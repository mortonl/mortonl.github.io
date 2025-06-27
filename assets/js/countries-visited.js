// Countries visited data with coordinates
const countriesVisited = [
    // Africa
    { name: 'Egypt', continent: 'Africa', coords: [26.8206, 30.8025] },
    { name: 'Kenya', continent: 'Africa', coords: [-0.0236, 37.9062] },
    
    // Asia
    { name: 'Hong Kong', continent: 'Asia', coords: [22.3193, 114.1694] },
    
    // Europe
    { name: 'England', continent: 'Europe', coords: [52.3555, -1.1743] },
    { name: 'Scotland', continent: 'Europe', coords: [56.4907, -4.2026] },
    { name: 'Wales', continent: 'Europe', coords: [52.1307, -3.7837] },
    { name: 'France', continent: 'Europe', coords: [46.6034, 1.8883] },
    { name: 'Germany', continent: 'Europe', coords: [51.1657, 10.4515] },
    { name: 'Netherlands', continent: 'Europe', coords: [52.1326, 5.2913] },
    { name: 'Belgium', continent: 'Europe', coords: [50.5039, 4.4699] },
    { name: 'Switzerland', continent: 'Europe', coords: [46.8182, 8.2275] },
    { name: 'Austria', continent: 'Europe', coords: [47.5162, 14.5501] },
    { name: 'Italy', continent: 'Europe', coords: [41.8719, 12.5674] },
    { name: 'Spain', continent: 'Europe', coords: [40.4637, -3.7492] },
    { name: 'Fuerteventura', continent: 'Europe', coords: [28.3587, -14.0537] },
    { name: 'Lanzarote', continent: 'Europe', coords: [29.0469, -13.5896] },
    { name: 'Tenerife', continent: 'Europe', coords: [28.2916, -16.6291] },
    { name: 'Portugal', continent: 'Europe', coords: [39.3999, -8.2245] },
    { name: 'Madeira', continent: 'Europe', coords: [32.7607, -16.9595] },
    { name: 'Norway', continent: 'Europe', coords: [60.4720, 8.4689] },
    { name: 'Denmark', continent: 'Europe', coords: [56.2639, 9.5018] },
    { name: 'Czech Republic', continent: 'Europe', coords: [49.8175, 15.4730] },
    { name: 'Slovakia', continent: 'Europe', coords: [48.6690, 19.6990] },
    { name: 'Hungary', continent: 'Europe', coords: [47.1625, 19.5033] },
    { name: 'Poland', continent: 'Europe', coords: [51.9194, 19.1451] },
    { name: 'Slovenia', continent: 'Europe', coords: [46.1512, 14.9955] },
    { name: 'Croatia', continent: 'Europe', coords: [45.1000, 15.2000] },
    { name: 'Bosnia and Herzegovina', continent: 'Europe', coords: [43.9159, 17.6791] },
    { name: 'Montenegro', continent: 'Europe', coords: [42.7087, 19.3744] },
    { name: 'Greece', continent: 'Europe', coords: [39.0742, 21.8243] },
    { name: 'Malta', continent: 'Europe', coords: [35.9375, 14.3754] },
    { name: 'Ireland', continent: 'Europe', coords: [53.1424, -7.6921] },
    { name: 'Luxembourg', continent: 'Europe', coords: [49.8153, 6.1296] },
    { name: 'Liechtenstein', continent: 'Europe', coords: [47.1660, 9.5554] },
    { name: 'Andorra', continent: 'Europe', coords: [42.5063, 1.5218] },
    { name: 'Monaco', continent: 'Europe', coords: [43.7384, 7.4246] },
    { name: 'San Marino', continent: 'Europe', coords: [43.9424, 12.4578] },
    { name: 'Isle of Man', continent: 'Europe', coords: [54.2361, -4.5481] },
    
    // North America & Caribbean
    { name: 'United States', continent: 'North America', coords: [37.0902, -95.7129] },
    { name: 'Jamaica', continent: 'North America', coords: [18.1096, -77.2975] },
    { name: 'Cuba', continent: 'North America', coords: [21.5218, -77.7812] },
    { name: 'Puerto Rico', continent: 'North America', coords: [18.2208, -66.5901] },
    { name: 'United States Virgin Islands', continent: 'North America', coords: [18.3358, -64.8963] },
    { name: 'Antigua', continent: 'North America', coords: [17.0608, -61.7964] },
    { name: 'Barbuda', continent: 'North America', coords: [17.6350, -61.8165] },
    { name: 'Saint Lucia', continent: 'North America', coords: [13.9094, -60.9789] },
    { name: 'Trinidad', continent: 'North America', coords: [10.6918, -61.2225] },
    { name: 'Tobago', continent: 'North America', coords: [11.2500, -60.7500] },
    { name: 'Montserrat', continent: 'North America', coords: [16.7425, -62.1874] },
    { name: 'Martinique', continent: 'North America', coords: [14.6415, -61.0242] },
    
    // Oceania
    { name: 'Australia', continent: 'Oceania', coords: [-25.2744, 133.7751] }
];

// Categorize countries by continent
const countriesByContinent = {
    'Africa': countriesVisited.filter(c => c.continent === 'Africa'),
    'Asia': countriesVisited.filter(c => c.continent === 'Asia'),
    'Europe': countriesVisited.filter(c => c.continent === 'Europe'),
    'North America': countriesVisited.filter(c => c.continent === 'North America'),
    'Oceania': countriesVisited.filter(c => c.continent === 'Oceania')
};

// Make data available globally
window.countriesVisited = countriesVisited;
window.countriesByContinent = countriesByContinent;