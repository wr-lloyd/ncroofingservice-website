#!/usr/bin/env python3
"""
Generate an NC-only ZIP dataset JSON file for an address form.

Input: a US ZIP CSV (e.g., SimpleMaps uszips.csv)
Output: data/nc-zip-cities.json

Expected columns (SimpleMaps typical):
- zip
- city
- state_id  (or state)
- county_name (or county)
"""

import csv
import json
from collections import defaultdict
from pathlib import Path

INPUT_CSV = Path(__file__).parent / "uszips.csv"
OUTPUT_JSON = Path(__file__).parent.parent / "data" / "nc-zip-cities.json"

# Map your CSV headers to our internal names
COLUMN_MAP = {
    "zip": ["zip", "zipcode", "postal_code"],
    "city": ["city", "primary_city", "place"],
    "state": ["state_abbr", "state_id", "state"],
    "county": ["county", "county_name", "county_full"],
}

def pick_col(headers, candidates):
    hset = {h.lower(): h for h in headers}
    for c in candidates:
        if c.lower() in hset:
            return hset[c.lower()]
    return None

def norm(s: str) -> str:
    return (s or "").strip()

def main():
    if not INPUT_CSV.exists():
        raise SystemExit(f"Missing input file: {INPUT_CSV.resolve()}")

    with INPUT_CSV.open("r", newline="", encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)
        headers = reader.fieldnames or []
        if not headers:
            raise SystemExit("CSV appears to have no headers.")

        col_zip = pick_col(headers, COLUMN_MAP["zip"])
        col_city = pick_col(headers, COLUMN_MAP["city"])
        col_state = pick_col(headers, COLUMN_MAP["state"])
        col_county = pick_col(headers, COLUMN_MAP["county"])

        missing = [k for k, v in {
            "zip": col_zip,
            "city": col_city,
            "state": col_state,
            "county": col_county,
        }.items() if v is None]

        if missing:
            raise SystemExit(
                "Your CSV is missing required columns: "
                + ", ".join(missing)
                + "\nHeaders found: "
                + ", ".join(headers)
            )

        zips_data = {}
        city_zip_count = defaultdict(int)
        city_county_map = {}

        for r in reader:
            state = norm(r.get(col_state))
            if state.upper() != "NC":
                continue

            zip_code = norm(r.get(col_zip))
            city = norm(r.get(col_city))
            county = norm(r.get(col_county))

            if not zip_code or not city:
                continue

            # Skip ZCTA placeholders and non-standard ZIP codes
            if city.lower().startswith("zcta") or not zip_code.isdigit():
                continue

            # Remove "County" suffix if present
            if county.lower().endswith(" county"):
                county = county[:-7].strip()

            # Title case city names properly
            city = city.title()
            county = county.title()

            zips_data[zip_code] = {
                "preferred": city,
                "alternates": [],
                "county": county
            }

            city_zip_count[city] += 1
            if city not in city_county_map:
                city_county_map[city] = county

    # Build cities array
    cities = []
    for city_name, zip_count in sorted(city_zip_count.items()):
        cities.append({
            "name": city_name,
            "county": city_county_map.get(city_name, ""),
            "zipCount": zip_count
        })

    # Sort cities by name
    cities.sort(key=lambda x: x["name"])

    # Build final output
    output = {
        "zips": dict(sorted(zips_data.items())),
        "cities": cities
    }

    # Write JSON
    OUTPUT_JSON.parent.mkdir(parents=True, exist_ok=True)
    with OUTPUT_JSON.open("w", encoding="utf-8") as out:
        json.dump(output, out, indent=2)

    print(f"Done! Wrote {OUTPUT_JSON.resolve()}")
    print(f"   - {len(zips_data)} ZIP codes")
    print(f"   - {len(cities)} cities")

if __name__ == "__main__":
    main()
