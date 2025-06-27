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