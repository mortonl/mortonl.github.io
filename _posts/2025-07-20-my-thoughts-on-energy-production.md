---
layout: post
title: "Be Not Affeared: A Cheerfully Serious Guide to Comparing Energy Sources"
date: 2025-07-08
author: mortonl
tags: [energy, sustainability, nuclear, solar, renewables, land use, grid]
description: "A continually expanding exploration of how to properly compare energy sources — from land use to lifetime output and beyond."
---

# ⚡ Be Not Affeared

Welcome to an ongoing experiment in comparing energy sources properly. I could quote Brunel here — or just channel his spirit as we systematically pick apart myths, data gaps, and policy paradoxes. Every time we think we’ve got the comparison nailed, we realize there’s another missing variable. So, this post builds iteratively, layering each factor as a new piece of the puzzle.

---

## 🔢 Round 1: Land Use per Delivered MWh

We started with [Our World in Data](https://ourworldindata.org/land-use-per-energy-source), which nicely normalizes land use *per unit of electricity actually generated*. Not installed capacity — **actual output**, which is critical. We then added:

- Battery storage footprint for intermittent sources
- Realistic co-use of land (agrivoltaics ≠ magic)
- Mechanization feasibility (hello, combine harvester!)
- Adjusted for capacity factor and generation lifespan

### 📊 Lifetime Energy Yield per m²

A glimpse of reality:

```
Lifetime Energy Yield per m² (kWh/m²)

Nuclear               █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
Natural Gas           ██████████████████████████████████████████████
Coal                  ████████████████████████████
Rooftop Solar         ██████████████████████████████████████████
Wind (Footprint)      ██████████████████████████████
Agrivoltaic Solar     ████████████
Ground Solar PV       ███████
Hydroelectric         ██
Geothermal            ████
Wind (Spacing)        █
Biomass (Dedicated)   █
```

👉 The longer the bar, the more energy delivered per m² of land over the source’s lifetime.

---

## ⚠️ Round 2: False Friends & Greenwashed Metrics

Some classic traps we factored out:

- “Dual-use” land: limited by panel height, crop choice, and mechanization barriers
- “Offshore” wind: still needs land — transmission substations, onshore maintenance hubs
- “Battery-free” renewables: nope. If it’s intermittent, it *needs* storage
- “Installed capacity”: misleading without capacity factor adjustment

---

## 🔄 Round 3: Time and Degradation

Because not every generator ages gracefully:

| Source              | Lifetime (yrs) | Output Change | Notable Notes |
|---------------------|----------------|---------------|----------------|
| Nuclear             | 60–80          | Stable        | Often extended beyond initial design life |
| Solar PV            | 25–35          | -0.5%/yr      | Requires inverter & battery replacements |
| Wind (Onshore)      | 30–50          | Stable        | Often repowered with larger turbines |
| Battery Storage     | 10–15          | Varies        | Multiple replacements per generation cycle |
| Biomass             | 25–40          | Stable        | Requires constant land use & logistics |

We combined this with land use to calculate **lifetime energy yield per m²**, which reveals that nuclear, rooftop solar, and wind (when land is reused) offer the best bang-for-acre.

---

## 🏗️ Round 4: Materials, Waste, and Recycling

Forget just carbon — here’s what else we factored in:

- Solar: silicon vs. cadmium telluride, toxic risks, weak panel recycling market
- Nuclear: uranium mining, long-lived waste (but accounted for!)
- Wind: blade disposal nightmare, composite recycling lagging
- Biomass: land-use intensity that makes cattle blush

> Sidebar: Nuclear is one of few sources that **accounts for every gram of fuel and waste**. Most others... don’t.

---

## 📈 Round 5: Grid Reliability

Delivering energy is one thing. **Delivering it when needed** is another.

| Source      | Dispatchable? | Storage Needed? | Grid Value |
|-------------|----------------|------------------|-------------|
| Nuclear     | ✅             | ❌               | Excellent (baseload) |
| Solar PV    | ❌             | ✅               | Limited without grid support |
| Wind        | ❌             | ✅               | Variable; improves with offshore mix |
| Gas         | ✅             | ❌               | Flexible, fast ramp |
| Hydro       | ✅             | ❌               | Peak-shaving hero |

This matters when steel plants go offline or bills soar — because the grid can’t rely on installed capacity alone.

---

## 💸 Round 6: Economics and Policy

- Cheap on paper ≠ cheap on grid
- Subsidies aren’t just for nuclear — wind and solar get hefty support
- Policy consistency: Nuclear tracks fuel and waste obsessively. Others? Much less so.

---

## 🧪 Round 7: Visuals, Pollution, and Public Perception

Why aren’t we covering car parks with solar before taking over farmland?

- Nuclear: tiny visual footprint; big fear footprint
- Solar: vast fields, glinting panels
- Wind: iconic or intrusive
- Biomass: largely hidden but agriculturally greedy

---

## 🚧 Round 8: What’s Next?

This post isn’t done. Neither is the conversation. Each time we run the numbers, someone says “But what about…” and we unearth the next layer:

- Fusion and repurposing fission infrastructure
- Rare earths and resource extraction ethics
- End-of-life circularity for renewable hardware
- Comparative regulatory accountability across sources
- Rebuilding trust in transparent energy metrics

If you want to expand this post with charts, code blocks, interactive sliders, or timeline comparisons — I’m ready. Just say the word, and we’ll keep the energy going. ⚡
