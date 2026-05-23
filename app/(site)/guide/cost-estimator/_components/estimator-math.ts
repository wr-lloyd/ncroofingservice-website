// Pure math for the roof cost estimator. No React, no DOM, no side effects.
// Every input/output is plain data so it can be unit-tested and reused.
//
// Pricing model (NC, May 2026):
//
//   Base price:       $350 to $450 per square (1 square = 100 sq ft)
//   Two-story:        +$10 per square
//   Pitch 7/12 to 9/12 (steep): +$10 per square
//   Pitch 10/12 to 12/12 (very steep): +$10 per square
//   Pitch above 12/12 (extreme): +$25 per square
//
//   Material multiplier:
//     architectural shingle  1.00x
//     premium shingle        1.35x
//     standing-seam metal    3.10x
//
//   Complexity multiplier (number of dormers, valleys, penetrations):
//     simple    1.00x   (1-story ranch, basic gable)
//     moderate  1.10x   (typical 2-story, 1-2 dormers)
//     complex   1.22x   (multiple dormers, valleys, intersections)
//
//   Regional multiplier (NC market reality):
//     triangle/charlotte    1.00x
//     small-town            0.95x
//     mountains/coast       1.07x
//
// Roof area is derived from heated square footage, story count, pitch
// multiplier, and an overhang factor. Numbers tuned against actual
// completed jobs in our 2024-2025 data set.

export type StoryCount = 1 | 2 | 3
export type PitchClass = 'low' | 'standard' | 'steep' | 'very-steep' | 'extreme'
export type Material = 'architectural' | 'premium' | 'metal'
export type Complexity = 'simple' | 'moderate' | 'complex'
export type Region = 'triangle' | 'charlotte' | 'small-town' | 'mountains-coast'

export interface EstimatorInputs {
  /** Heated square footage of the home. */
  heatedSqft: number
  stories: StoryCount
  pitch: PitchClass
  material: Material
  complexity: Complexity
  region: Region
  /** Whether the user wants metal-roof "lifetime" price floor. */
  forceMetalFloor?: boolean
}

export interface EstimatorResult {
  /** Estimated roof area in squares (rounded to nearest whole square). */
  roofSquares: number
  /** Per-square price at the low end. */
  perSquareLow: number
  /** Per-square price at the high end. */
  perSquareHigh: number
  /** Total estimated low end (rounded to nearest $100). */
  totalLow: number
  /** Total estimated high end (rounded to nearest $100). */
  totalHigh: number
  /** Total midpoint (totalLow + totalHigh) / 2. */
  totalMid: number
  /** Per-component breakdown for the "Show your math" panel. */
  breakdown: {
    baseLow: number
    baseHigh: number
    twoStoryAdd: number
    pitchAdd: number
    materialMultiplier: number
    complexityMultiplier: number
    regionMultiplier: number
  }
}

// -- Constants --------------------------------------------------------------

const BASE_LOW_PER_SQUARE = 350
const BASE_HIGH_PER_SQUARE = 450

const TWO_STORY_ADD = 10
const THREE_STORY_ADD = 25 // Above two-story add. Total +$35/sq for 3-story.

const PITCH_ADDS: Record<PitchClass, number> = {
  low: 0, // 2/12 to 4/12, ranch-style
  standard: 0, // 5/12 to 6/12, most NC homes
  steep: 10, // 7/12 to 9/12
  'very-steep': 20, // 10/12 to 12/12 (cumulative: +10 for steep, +10 for very)
  extreme: 45, // above 12/12 (cumulative)
}

// Roof area as a multiplier of heated sqft, by story count and pitch.
// 1-story homes have ~1.4x the footprint as roof area (overhangs).
// 2-story homes have ~0.75x.
// 3-story homes have ~0.5x.
// Pitch adds further surface area on top of footprint.
const FOOTPRINT_TO_ROOF_BASE: Record<StoryCount, number> = {
  1: 1.4,
  2: 0.75,
  3: 0.5,
}

// Pitch surface multiplier (rise/run -> actual surface vs. horizontal).
const PITCH_SURFACE_MULTIPLIER: Record<PitchClass, number> = {
  low: 1.05,
  standard: 1.12,
  steep: 1.25,
  'very-steep': 1.42,
  extreme: 1.60,
}

const MATERIAL_MULTIPLIER: Record<Material, number> = {
  architectural: 1.0,
  premium: 1.35,
  metal: 3.10,
}

const COMPLEXITY_MULTIPLIER: Record<Complexity, number> = {
  simple: 1.0,
  moderate: 1.10,
  complex: 1.22,
}

const REGION_MULTIPLIER: Record<Region, number> = {
  triangle: 1.0,
  charlotte: 1.0,
  'small-town': 0.95,
  'mountains-coast': 1.07,
}

// Metal "floor" for the smallest homes. Metal jobs have a fixed cost
// component (custom panel order, longer install) so the per-sq number
// is meaningless under a certain total. This floor keeps the result
// honest for small roofs.
const METAL_TOTAL_FLOOR = 18000

// -- Helpers ----------------------------------------------------------------

function roundToHundred(n: number): number {
  return Math.round(n / 100) * 100
}

// -- Main calc --------------------------------------------------------------

/**
 * Compute the estimated price range for a roof replacement. Pure function.
 *
 * The math:
 *   1. Roof area in squares = (heatedSqft * footprintFactor * pitchSurface) / 100
 *   2. Per-square base = BASE [+ story adds] [+ pitch adds]
 *   3. Total = (squares * perSquare) * material * complexity * region
 */
export function estimate(inputs: EstimatorInputs): EstimatorResult {
  const {
    heatedSqft,
    stories,
    pitch,
    material,
    complexity,
    region,
  } = inputs

  // 1. Roof area in squares.
  const footprintFactor = FOOTPRINT_TO_ROOF_BASE[stories]
  const pitchSurface = PITCH_SURFACE_MULTIPLIER[pitch]
  const squaresRaw = (heatedSqft * footprintFactor * pitchSurface) / 100
  const roofSquares = Math.max(1, Math.round(squaresRaw))

  // 2. Per-square price range.
  const storyAdd =
    stories === 2 ? TWO_STORY_ADD : stories === 3 ? TWO_STORY_ADD + THREE_STORY_ADD : 0
  const pitchAdd = PITCH_ADDS[pitch]
  const perSquareLow = BASE_LOW_PER_SQUARE + storyAdd + pitchAdd
  const perSquareHigh = BASE_HIGH_PER_SQUARE + storyAdd + pitchAdd

  // 3. Apply multipliers.
  const materialMult = MATERIAL_MULTIPLIER[material]
  const complexityMult = COMPLEXITY_MULTIPLIER[complexity]
  const regionMult = REGION_MULTIPLIER[region]
  const totalMult = materialMult * complexityMult * regionMult

  let totalLowRaw = roofSquares * perSquareLow * totalMult
  let totalHighRaw = roofSquares * perSquareHigh * totalMult

  // 4. Apply metal-roof floor for small homes.
  if (material === 'metal' && totalLowRaw < METAL_TOTAL_FLOOR) {
    totalLowRaw = METAL_TOTAL_FLOOR
    totalHighRaw = Math.max(totalHighRaw, METAL_TOTAL_FLOOR * 1.18)
  }

  const totalLow = roundToHundred(totalLowRaw)
  const totalHigh = roundToHundred(totalHighRaw)
  const totalMid = roundToHundred((totalLow + totalHigh) / 2)

  return {
    roofSquares,
    perSquareLow,
    perSquareHigh,
    totalLow,
    totalHigh,
    totalMid,
    breakdown: {
      baseLow: BASE_LOW_PER_SQUARE,
      baseHigh: BASE_HIGH_PER_SQUARE,
      twoStoryAdd: storyAdd,
      pitchAdd,
      materialMultiplier: materialMult,
      complexityMultiplier: complexityMult,
      regionMultiplier: regionMult,
    },
  }
}

// -- Display helpers --------------------------------------------------------

/** Format a number as USD without decimals, e.g. 18500 -> "$18,500". */
export function formatUsd(n: number): string {
  return '$' + Math.round(n).toLocaleString('en-US')
}

/** Human label for each input value, used in the result breakdown. */
export const LABELS = {
  stories: {
    1: 'One story',
    2: 'Two stories',
    3: 'Three stories',
  } as Record<StoryCount, string>,
  pitch: {
    low: 'Low (2/12 to 4/12)',
    standard: 'Standard (5/12 to 6/12)',
    steep: 'Steep (7/12 to 9/12)',
    'very-steep': 'Very steep (10/12 to 12/12)',
    extreme: 'Extreme (above 12/12)',
  } as Record<PitchClass, string>,
  material: {
    architectural: 'Architectural asphalt shingle',
    premium: 'Premium / designer shingle',
    metal: 'Standing-seam metal',
  } as Record<Material, string>,
  complexity: {
    simple: 'Simple (basic gable)',
    moderate: 'Moderate (1 to 2 dormers)',
    complex: 'Complex (multiple dormers, valleys)',
  } as Record<Complexity, string>,
  region: {
    triangle: 'Triangle (Raleigh / Durham / Cary)',
    charlotte: 'Charlotte metro',
    'small-town': 'Small town NC',
    'mountains-coast': 'Mountains / coast',
  } as Record<Region, string>,
}
