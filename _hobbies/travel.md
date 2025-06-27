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

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Initialize map
    const map = L.map('travel-map').setView([40, 0], 2);
    
    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    let allMarkers = [];
    let allRoutes = [];
    let countryMarkers = [];
    
    // Calculate dynamic stats
    function calculateStats() {
        const countries = new Set();
        const continents = new Set();
        let cityCount = 0;
        
        travelData.forEach(trip => {
            trip.destinations.forEach(dest => {
                countries.add(dest.country);
                continents.add(dest.continent);
                cityCount++;
            });
        });
        
        // Update with actual countries visited count
        document.getElementById('countries-count').textContent = countriesVisited.length;
        document.getElementById('cities-count').textContent = cityCount;
        document.getElementById('continents-count').textContent = Object.keys(countriesByContinent).filter(continent => countriesByContinent[continent].length > 0).length;
    }
    
    // Populate trip filter dropdown
    function populateTripFilter() {
        const select = document.getElementById('trip-filter');
        travelData.forEach(trip => {
            const option = document.createElement('option');
            option.value = trip.id;
            option.textContent = trip.title;
            select.appendChild(option);
        });
    }
    
    // Create trip list
    function createTripList() {
        const tripList = document.getElementById('trip-list');
        travelData.forEach(trip => {
            const tripDiv = document.createElement('div');
            tripDiv.style.cssText = 'margin-bottom: 20px; padding: 15px; border-left: 4px solid ' + trip.color + '; background: #f8f9fa;';
            tripDiv.innerHTML = `
                <h5 style="margin: 0 0 5px 0; color: ${trip.color};">${trip.title}</h5>
                <p style="margin: 0 0 5px 0; font-size: 0.9em;">${trip.description}</p>
                <p style="margin: 0; font-size: 0.8em; color: #666;"><strong>Date:</strong> ${trip.dateRange}</p>
            `;
            tripList.appendChild(tripDiv);
        });
    }
    
    // Create markers and routes
    function createMapElements() {
        travelData.forEach(trip => {
            // Create markers for each destination
            trip.destinations.forEach((dest, index) => {
                const marker = L.circleMarker(dest.coords, {
                    radius: 8,
                    fillColor: trip.color,
                    color: '#fff',
                    weight: 2,
                    opacity: 1,
                    fillOpacity: 0.8
                }).addTo(map);
                
                const popupContent = `
                    <div style="min-width: 200px;">
                        <h6 style="margin: 0 0 8px 0; color: ${trip.color};">${dest.name}, ${dest.country}</h6>
                        <p style="margin: 0 0 8px 0; font-size: 0.9em;"><strong>${trip.title}</strong></p>
                        <p style="margin: 0 0 8px 0; font-size: 0.9em;">${dest.description}</p>
                        <p style="margin: 0 0 8px 0; font-size: 0.8em; color: #666;"><strong>Date:</strong> ${dest.date}</p>
                        <p style="margin: 0 0 8px 0; font-size: 0.8em; color: #666;"><strong>Schedule:</strong> ${dest.time}</p>
                        ${dest.excursion ? `<p style="margin: 0 0 8px 0; font-size: 0.8em; color: #666;"><strong>Excursion:</strong> ${dest.excursion}</p>` : ''}
                        ${dest.photos && dest.photos.length > 0 ? `<p style="margin: 8px 0; font-size: 0.8em; color: #0d6efd; cursor: pointer;" onclick="showPhotoGallery('${dest.name}', '${trip.color}')">📷 View ${dest.photos.length} photos</p>` : ''}
                        <div style="font-size: 0.8em;">
                            <strong>Highlights:</strong><br>
                            ${dest.highlights.map(h => `• ${h}`).join('<br>')}
                        </div>
                    </div>
                `;
                
                marker.bindPopup(popupContent);
                marker.tripId = trip.id;
                marker.destination = dest;
                marker.tripColor = trip.color;
                
                // Add click event to show photo gallery
                marker.on('click', function() {
                    if (dest.photos && dest.photos.length > 0) {
                        showPhotoGallery(dest.name, trip.color, dest.photos);
                    }
                });
                
                allMarkers.push(marker);
            });
            
            // Create sea routes with waypoints
            if (trip.seaRoutes) {
                trip.seaRoutes.forEach(seaRoute => {
                    const fromDest = trip.destinations[seaRoute.from];
                    const toDest = trip.destinations[seaRoute.to];
                    
                    // Build route coordinates with waypoints
                    const routeCoords = [fromDest.coords];
                    if (seaRoute.waypoints && seaRoute.waypoints.length > 0) {
                        routeCoords.push(...seaRoute.waypoints);
                    }
                    routeCoords.push(toDest.coords);
                    
                    const route = L.polyline(routeCoords, {
                        color: trip.color,
                        weight: 3,
                        opacity: 0.7,
                        dashArray: '8, 12'
                    }).addTo(map);
                    
                    route.tripId = trip.id;
                    allRoutes.push(route);
                });
            }
        });
    }
    
    // Create country markers
    function createCountryMarkers() {
        const continentColors = {
            'Africa': '#dc3545',
            'Asia': '#198754', 
            'Europe': '#0d6efd',
            'North America': '#fd7e14',
            'Oceania': '#6f42c1'
        };
        
        countriesVisited.forEach(country => {
            const marker = L.circleMarker(country.coords, {
                radius: 6,
                fillColor: continentColors[country.continent],
                color: '#fff',
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
            });
            
            marker.bindPopup(`
                <div style="min-width: 150px;">
                    <h6 style="margin: 0 0 5px 0; color: ${continentColors[country.continent]};">${country.name}</h6>
                    <p style="margin: 0; font-size: 0.8em; color: #666;">${country.continent}</p>
                </div>
            `);
            
            countryMarkers.push(marker);
        });
    }
    
    // Filter functions
    function showAll() {
        allMarkers.forEach(marker => marker.addTo(map));
        allRoutes.forEach(route => route.addTo(map));
        countryMarkers.forEach(marker => map.removeLayer(marker));
        map.setView([40, 0], 2);
    }
    
    function showCountries() {
        allMarkers.forEach(marker => map.removeLayer(marker));
        allRoutes.forEach(route => map.removeLayer(route));
        countryMarkers.forEach(marker => marker.addTo(map));
        map.setView([40, 0], 2);
    }
    
    function showTrip(tripId) {
        // Hide all
        allMarkers.forEach(marker => map.removeLayer(marker));
        allRoutes.forEach(route => map.removeLayer(route));
        countryMarkers.forEach(marker => map.removeLayer(marker));
        
        // Show selected trip
        const tripMarkers = allMarkers.filter(marker => marker.tripId === tripId);
        const tripRoutes = allRoutes.filter(route => route.tripId === tripId);
        
        tripMarkers.forEach(marker => marker.addTo(map));
        tripRoutes.forEach(route => route.addTo(map));
        
        // Fit map to trip
        if (tripMarkers.length > 0) {
            const group = new L.featureGroup(tripMarkers);
            map.fitBounds(group.getBounds().pad(0.1));
        }
    }
    
    // Photo gallery function
    window.showPhotoGallery = function(locationName, color, photos) {
        const gallery = document.getElementById('photo-gallery');
        const title = document.getElementById('gallery-title');
        const photosContainer = document.getElementById('gallery-photos');
        
        // Find photos for this location
        let locationPhotos = photos;
        if (!locationPhotos) {
            // Find photos from marker data
            const marker = allMarkers.find(m => m.destination && m.destination.name === locationName);
            locationPhotos = marker ? marker.destination.photos : [];
        }
        
        if (locationPhotos && locationPhotos.length > 0) {
            title.innerHTML = `<span style="color: ${color};">📷 ${locationName}</span> - ${locationPhotos.length} photos`;
            
            photosContainer.innerHTML = locationPhotos.map(photo => `
                <div style="background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <img src="${photo.url}" alt="${photo.caption}" 
                         style="width: 100%; height: 200px; object-fit: cover; cursor: pointer;"
                         onclick="window.open('${photo.url}', '_blank')">
                    <div style="padding: 10px;">
                        <p style="margin: 0 0 5px 0; font-size: 0.9em; font-weight: bold;">${photo.caption}</p>
                        <p style="margin: 0; font-size: 0.8em; color: #666;">${photo.datetime}</p>
                    </div>
                </div>
            `).join('');
            
            gallery.style.display = 'block';
            gallery.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    // Event listeners
    document.getElementById('show-all').addEventListener('click', function() {
        showAll();
        document.getElementById('trip-filter').value = '';
        // Update button states
        this.className = 'btn btn-sm btn-outline-primary';
        document.getElementById('show-countries').className = 'btn btn-sm btn-outline-secondary';
    });
    
    document.getElementById('show-countries').addEventListener('click', function() {
        showCountries();
        document.getElementById('trip-filter').value = '';
        // Update button states
        this.className = 'btn btn-sm btn-outline-primary';
        document.getElementById('show-all').className = 'btn btn-sm btn-outline-secondary';
    });
    
    document.getElementById('trip-filter').addEventListener('change', function() {
        if (this.value) {
            showTrip(this.value);
            // Update button states
            document.getElementById('show-all').className = 'btn btn-sm btn-outline-secondary';
            document.getElementById('show-countries').className = 'btn btn-sm btn-outline-secondary';
        } else {
            showAll();
        }
    });
    
    // Initialize everything
    calculateStats();
    populateTripFilter();
    createTripList();
    createMapElements();
    createCountryMarkers();
    
    // Add legend
    const legend = L.control({position: 'bottomright'});
    legend.onAdd = function(map) {
        const div = L.DomUtil.create('div', 'legend');
        div.style.cssText = 'background: white; padding: 10px; border-radius: 5px; box-shadow: 0 0 15px rgba(0,0,0,0.2);';
        
        let legendContent = '<h6 style="margin: 0 0 8px 0;">View</h6>';
        legendContent += '<div><span style="color: #0d6efd;">●</span> Detailed Trips</div>';
        legendContent += '<div><span style="color: #666;">●</span> All Countries</div>';
        
        div.innerHTML = legendContent;
        
        return div;
    };
    legend.addTo(map);
});
</script>
