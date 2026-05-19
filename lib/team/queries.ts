import { team, type TeamMember } from './data'

export function getAllTeamSlugs(): string[] {
  return team.map((m) => m.slug)
}

export function getTeamMember(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug)
}

/** Group the team by `department`, preserving the order from `data.ts`. */
export function getTeamByDepartment(): Record<TeamMember['department'], TeamMember[]> {
  const groups: Record<TeamMember['department'], TeamMember[]> = {
    'Field Leadership': [],
    Operations: [],
  }
  for (const m of team) groups[m.department].push(m)
  return groups
}
