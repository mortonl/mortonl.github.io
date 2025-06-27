---
title: "Travel & Adventures"
layout: page
description: "Exploring the world and documenting my journeys"
order: 1
---

# Travel & Adventures

Travel has been one of my greatest teachers here are some of my past adventures:

## Interactive Travel Map

<div class="map-controls" style="margin-bottom: 10px;">
    <button id="show-all" class="btn btn-sm btn-outline-primary">All Trips</button>
    <button id="show-countries" class="btn btn-sm btn-outline-secondary" style="margin-left: 10px;">Countries Visited</button>
    <select id="trip-filter" class="btn btn-sm btn-outline-secondary" style="margin-left: 10px;">
        <option value="">Filter by Trip</option>
    </select>
</div>

<div id="travel-map" style="height: 500px; width: 100%; margin: 20px 0; border-radius: 8px; overflow: hidden;"></div>

<div id="photo-gallery" style="margin: 20px 0; padding: 20px; background: #f8f9fa; border-radius: 8px; display: none;">
    <h5 id="gallery-title" style="margin: 0 0 15px 0;">Select a location to view photos</h5>
    <div id="gallery-photos" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px;"></div>
</div>

<div class="travel-stats" style="display: flex; justify-content: space-around; margin: 20px 0; padding: 15px; background: #f8f9fa; border-radius: 8px;">
    <div style="text-align: center;">
        <strong>Countries Visited</strong><br>
        <span id="countries-count" style="font-size: 1.5em; color: #0d6efd;">0</span>
    </div>
    <div style="text-align: center;">
        <strong>Cities Explored</strong><br>
        <span id="cities-count" style="font-size: 1.5em; color: #198754;">0</span>
    </div>
    <div style="text-align: center;">
        <strong>Continents</strong><br>
        <span id="continents-count" style="font-size: 1.5em; color: #dc3545;">0</span>
    </div>
</div>

## Travel Philosophy

> "The world is big and also tiny. Travel is the best education you can get."

Travel has taught me that England and America aren't necessarily the most advanced countries, despite common perceptions. Each place has something unique to offer and lessons to teach.

## Countries Visited

*Note: This list includes some territories, dependencies, and constituent countries that aren't technically sovereign nations, but are included due to their distinct cultures and identities (e.g., Hong Kong, Scotland, Wales, Puerto Rico, various Caribbean islands, Canary Islands, Madeira).*

<div id="countries-overview" style="margin: 20px 0;">
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
        <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545;">
            <h5 style="margin: 0 0 10px 0; color: #dc3545;">Africa (2)</h5>
            <p style="margin: 0; font-size: 0.9em;">Egypt, Kenya</p>
        </div>
        <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #198754;">
            <h5 style="margin: 0 0 10px 0; color: #198754;">Asia (1)</h5>
            <p style="margin: 0; font-size: 0.9em;">Hong Kong</p>
        </div>
        <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #0d6efd;">
            <h5 style="margin: 0 0 10px 0; color: #0d6efd;">Europe (31)</h5>
            <p style="margin: 0; font-size: 0.9em;">England, Scotland, Wales, France, Germany, Netherlands, Belgium, Switzerland, Austria, Italy, Spain, Fuerteventura, Lanzarote, Tenerife, Portugal, Madeira, Norway, Denmark, Czech Republic, Slovakia, Hungary, Poland, Slovenia, Croatia, Bosnia and Herzegovina, Montenegro, Greece, Malta, Ireland, Luxembourg, Liechtenstein, Andorra, Monaco, San Marino, Isle of Man</p>
        </div>
        <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #fd7e14;">
            <h5 style="margin: 0 0 10px 0; color: #fd7e14;">North America & Caribbean (12)</h5>
            <p style="margin: 0; font-size: 0.9em;">United States, Jamaica, Cuba, Puerto Rico, US Virgin Islands, Antigua, Barbuda, Saint Lucia, Trinidad, Tobago, Montserrat, Martinique</p>
        </div>
        <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #6f42c1;">
            <h5 style="margin: 0 0 10px 0; color: #6f42c1;">Oceania (1)</h5>
            <p style="margin: 0; font-size: 0.9em;">Australia</p>
        </div>
    </div>
</div>

## Recent Adventures

<div id="trip-list" style="margin: 20px 0;"></div>

## Future Adventures

- **Japan**
- **South Korea** 
- **China**
- **Mexico**
- **Peru**
- **Chile**
- **Antarctica**
- **Canada**
- **New Zealand**
- **India**
- **Indonesia**
- **Malaysia**
- **Philippines**

---

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script src="/assets/js/travel-data.js"></script>
<script src="/assets/js/countries-visited.js"></script>
<script src="/assets/js/travel-map.js"></script>
