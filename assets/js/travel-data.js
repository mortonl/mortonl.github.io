// Travel data organized by trips
const travelData = [
    {
        id: 'norwegian-fjords-cruise',
        title: 'Norwegian Fjords Cruise',
        description: 'P&O Britannia cruise exploring Norway\'s stunning fjords and coastal cities',
        dateRange: '5-12 August 2017',
        color: '#0d6efd',
        destinations: [
            {
                name: 'Portsmouth',
                country: 'United Kingdom',
                continent: 'Europe',
                coords: [50.8198, -1.0880],
                date: 'Sat 5 Aug 2017',
                time: 'Morning Visit',
                description: 'Historic Naval Dockyard visit before cruise',
                highlights: ['Historic Naval Dockyard', 'Maritime heritage', 'Pre-cruise exploration'],
                photos: [
//                    {
//                        url: '/assets/images/travel/norway-2017/20170805_101057.jpg',
//                        caption: 'Portsmouth Historic Naval Dockyard - HMS Victory',
//                        datetime: '2017-08-05 10:10'
//                    },
//                    {
//                        url: '/assets/images/travel/norway-2017/20170805_103313.jpg',
//                        caption: 'Mary Rose Museum - Mary Rose Wreck',
//                        datetime: '2017-08-05 10:33'
//                    }
                ]
            },
            {
                name: 'Southampton',
                country: 'United Kingdom',
                continent: 'Europe',
                coords: [50.89252387769757, -1.3995001995296],
                date: 'Sat 5 Aug 2017',
                time: 'Embark Ship',
                description: 'Embarkation port - Ocean Terminal',
                highlights: ['Cruise departure point', 'Historic maritime city', 'Gateway to adventure'],
                photos: [
//                    {
//                        url: '/assets/images/travel/norway-2017/20170805_161045.jpg',
//                        caption: 'Departure from Southampton',
//                        datetime: '2017-08-05 16:10'
//                    }
                ]
            },
            {
                name: 'Stavanger',
                country: 'Norway',
                continent: 'Europe',
                coords: [58.973147514530794, 5.726774209210145],
                date: 'Mon 7 Aug 2017',
                time: 'Arrive Morning, Depart Afternoon',
                excursion: 'Stavanger Highlights - 1:30PM',
                description: 'First Norwegian port - historic coastal city',
                highlights: ['Stavanger Highlights tour', 'Old town charm', 'Oil industry heritage'],
                photos: [
//                    {
//                        url: '/assets/images/travel/norway-2017/20170806_103627.jpg',
//                        caption: 'At sea approaching Norway',
//                        datetime: '2017-08-06 10:36'
//                    },
//                    {
//                        url: '/assets/images/travel/norway-2017/20170807_081929.jpg',
//                        caption: 'Stavanger harbor arrival',
//                        datetime: '2017-08-07 08:19'
//                    },
//                    {
//                        url: '/assets/images/travel/norway-2017/20170807_145040.jpg',
//                        caption: 'Stavanger Highlights tour',
//                        datetime: '2017-08-07 14:50'
//                    },
//                    {
//                        url: '/assets/images/travel/norway-2017/20170807_145555.jpg',
//                        caption: 'Historic Stavanger streets',
//                        datetime: '2017-08-07 14:55'
//                    },
//                    {
//                        url: '/assets/images/travel/norway-2017/20170807_151525.jpg',
//                        caption: 'Stavanger old town',
//                        datetime: '2017-08-07 15:15'
//                    },
//                    {
//                        url: '/assets/images/travel/norway-2017/20170807_161121.jpg',
//                        caption: 'Departure from Stavanger',
//                        datetime: '2017-08-07 16:11'
//                    }
                ]
            },
            {
                name: 'Olden',
                country: 'Norway',
                continent: 'Europe',
                coords: [61.8372, 6.8014],
                date: 'Tue 8 Aug 2017',
                time: 'Arrive Morning, Depart Early Evening',
                excursion: 'Kjenndalen Glacier and Lovatnet Lake - 10:00AM',
                description: 'Gateway to glaciers and pristine lakes',
                highlights: ['Kjenndalen Glacier excursion', 'Lovatnet Lake', 'Dramatic mountain scenery'],
                photos: [
//                    {
//                        url: '/assets/images/travel/norway-2017/20170808_072046.jpg',
//                        caption: 'Early morning approach to Olden',
//                        datetime: '2017-08-08 07:20'
//                    },
//                    {
//                        url: '/assets/images/travel/norway-2017/20170808_081438.jpg',
//                        caption: 'Olden fjord scenery',
//                        datetime: '2017-08-08 08:14'
//                    },
//                    {
//                        url: '/assets/images/travel/norway-2017/20170808_084247.jpg',
//                        caption: 'Preparing for glacier excursion',
//                        datetime: '2017-08-08 08:42'
//                    },
//                    {
//                        url: '/assets/images/travel/norway-2017/20170808_084408.jpg',
//                        caption: 'Olden village views',
//                        datetime: '2017-08-08 08:44'
//                    },
//                    {
//                        url: '/assets/images/travel/norway-2017/20170808_111014.jpg',
//                        caption: 'Kjenndalen Glacier excursion',
//                        datetime: '2017-08-08 11:10'
//                    },
//                    {
//                        url: '/assets/images/travel/norway-2017/20170808_122914.jpg',
//                        caption: 'Lovatnet Lake - crystal clear waters',
//                        datetime: '2017-08-08 12:29'
//                    },
//                    {
//                        url: '/assets/images/travel/norway-2017/20170808_122919.jpg',
//                        caption: 'Lovatnet Lake panorama',
//                        datetime: '2017-08-08 12:29'
//                    },
//                    {
//                        url: '/assets/images/travel/norway-2017/20170808_122924.jpg',
//                        caption: 'Mountain reflections in Lovatnet',
//                        datetime: '2017-08-08 12:29'
//                    },
//                    {
//                        url: '/assets/images/travel/norway-2017/20170808_123136.jpg',
//                        caption: 'Dramatic mountain scenery',
//                        datetime: '2017-08-08 12:31'
//                    },
//                    {
//                        url: '/assets/images/travel/norway-2017/20170808_123256.jpg',
//                        caption: 'Glacier and lake views',
//                        datetime: '2017-08-08 12:32'
//                    },
//                    {
//                        url: '/assets/images/travel/norway-2017/20170808_124510.jpg',
//                        caption: 'Return journey from glacier',
//                        datetime: '2017-08-08 12:45'
//                    }
                ]
            },
            {
                name: 'Innvikfjorden',
                country: 'Norway',
                continent: 'Europe',
                coords: [61.85404201783192, 6.091116253172998],
                date: 'Tue 8 Aug 2017',
                time: 'Arrive Early Evening, Cruising Only, Depart Early Evening',
                description: 'Scenic fjord cruising experience',
                highlights: ['Fjord cruising', 'Untouched wilderness', 'Spectacular waterfalls'],
                photos: [
//                    {
//                        url: '/assets/images/travel/norway-2017/20170808_174621.jpg',
//                        caption: 'Innvikfjorden scenic cruising',
//                        datetime: '2017-08-08 17:46'
//                    }
                ]
            },
            {
                name: 'Nordfjord',
                country: 'Norway',
                continent: 'Europe',
                coords: [61.90125266260695, 5.708864519290962],
                date: 'Tue 8 Aug 2017',
                time: 'Arrive Early Evening, Cruising Only, Depart Evening',
                description: 'One of Norway\'s most beautiful fjords',
                highlights: ['Scenic cruising', 'Towering mountains', 'Crystal clear waters'],
                photos: [
//                    {
//                        url: '/assets/images/travel/norway-2017/20170808_220155.jpg',
//                        caption: 'Nordfjord evening cruise',
//                        datetime: '2017-08-08 22:01'
//                    },
//                    {
//                        url: '/assets/images/travel/norway-2017/20170808_234804.jpg',
//                        caption: 'Late evening fjord views',
//                        datetime: '2017-08-08 23:48'
//                    }
                ]
            },
            {
                name: 'Alesund',
                country: 'Norway',
                continent: 'Europe',
                coords: [62.4722, 6.1495],
                date: 'Wed 9 Aug 2017',
                time: 'Arrive Early Morning, Depart Early Evening',
                excursion: 'Island Discovery - 1:00PM',
                description: 'Art Nouveau architecture and island setting',
                highlights: ['Island Discovery tour', 'Art Nouveau buildings', 'Panoramic viewpoints'],
                photos: [
//                    {
//                        url: '/assets/images/travel/norway-2017/20170809_092224.jpg',
//                        caption: 'Alesund morning arrival',
//                        datetime: '2017-08-09 09:22'
//                    },
//                    {
//                        url: '/assets/images/travel/norway-2017/20170809_101228.jpg',
//                        caption: 'Art Nouveau architecture',
//                        datetime: '2017-08-09 10:12'
//                    },
//                    {
//                        url: '/assets/images/travel/norway-2017/20170809_102320.jpg',
//                        caption: 'Alesund city center',
//                        datetime: '2017-08-09 10:23'
//                    },
//                    {
//                        url: '/assets/images/travel/norway-2017/20170809_131626.jpg',
//                        caption: 'Island Discovery tour',
//                        datetime: '2017-08-09 13:16'
//                    },
//                    {
//                        url: '/assets/images/travel/norway-2017/20170809_131711.jpg',
//                        caption: 'Panoramic island views',
//                        datetime: '2017-08-09 13:17'
//                    },
//                    {
//                        url: '/assets/images/travel/norway-2017/20170809_131854.jpg',
//                        caption: 'Alesund from viewpoint',
//                        datetime: '2017-08-09 13:18'
//                    },
//                    {
//                        url: '/assets/images/travel/norway-2017/20170809_141252.jpg',
//                        caption: 'Island discovery scenery',
//                        datetime: '2017-08-09 14:12'
//                    }
                ]
            },
            {
                name: 'Bergen',
                country: 'Norway',
                continent: 'Europe',
                coords: [60.3913, 5.3221],
                date: 'Thu 10 Aug 2017',
                time: 'Arrive Early Morning, Depart Afternoon',
                excursion: 'Leisurely Bergen - 8:30AM',
                description: 'Historic Hanseatic city and UNESCO World Heritage site',
                highlights: ['Leisurely Bergen tour', 'Bryggen wharf', 'Colorful wooden houses'],
                photos: []
            }
        ],
        // Sea routes with waypoints to follow coastlines
        seaRoutes: [
            // Portsmouth to Southampton (short land route - not shown)
            // Southampton to Stavanger
            {
                from: 1,
                to: 2,
                waypoints: [
                    [50.88451066305381, -1.4025437711130933], // River Test
                    [50.66284565591595, -0.8591188441340495], // Near Isle of Wight
                    [50.604788349393054, 0.29698060046234687], // South of Eastbourne
                    [51.098172970194824, 1.5994916738953902], // English Channel
                    [52.0, 2.0],    // North Sea
                    [55.0, 4.0],    // Scottish waters
                    [57.0, 5.0],     // Norwegian Sea approach
                    [58.957306484906255, 5.395379721698187],
                    [59.0419871815232, 5.585175783164791],
                    [58.98297637417853, 5.718053683988678]
                ]
            },
            // Stavanger to Olden
            {
                from: 2,
                to: 3,
                waypoints: [
                [58.98297637417853, 5.718053683988678],
                [59.0419871815232, 5.585175783164791],
                [58.957306484906255, 5.395379721698187],
                [59.283079762195364, 4.776372234239982],
                [60.838689550637234, 4.417840991797743],
                [61.48222442421193, 4.5192398899024075],
                [61.85276575473931, 4.773264436462769],
                [61.93743692918964, 4.995321943674375],
                [61.88860390440433, 5.179270416753332],
                [61.8993808686254, 5.330936591199466],
                [61.92552378195386, 5.426474535647319],
                [61.89938086804214, 5.691449457421495],
                [61.84953215006323, 5.804135238052297],
                [61.864167985493886, 6.046246371597142],
                [61.83912875669363, 6.136068393793678],
                [61.85338436341821, 6.307138473809279],
                [61.818889829914376, 6.523119572070253],
                [61.867224600759336, 6.56353701547895],
                [61.87952147505485, 6.670399950958932],
                [61.86246140382305, 6.796376066838218]
                ]
            },
            // Olden to Innvikfjorden (short fjord route)
            {
                from: 3,
                to: 4,
                waypoints: [
                  [61.86246140382305, 6.796376066838218],
                  [61.87952147505485, 6.670399950958932],
                  [61.867224600759336, 6.56353701547895],
                  [61.818889829914376, 6.523119572070253],
                  [61.85338436341821, 6.307138473809279],
                  [61.83912875669363, 6.136068393793678],
                  [61.85404201783192, 6.091116253172998] // South of Lote
                ]
            },
            // Innvikfjorden to Nordfjord (fjord cruising)
            {
                from: 4,
                to: 5,
                waypoints: [
                  [61.864167985493886, 6.046246371597142],
                  [61.84953215006323, 5.804135238052297]
                ]
            },
            // Nordfjord to Alesund
            {
                from: 5,
                to: 6,
                waypoints: [
                    [61.89938086804214, 5.691449457421495],
                    [61.92552378195386, 5.426474535647319],
                    [61.8993808686254, 5.330936591199466],
                    [61.88860390440433, 5.179270416753332],
                    [61.93743692918964, 4.995321943674375],
                    [62.0, 6.3]     // Coastal approach
                ]
            },
            // Alesund to Bergen
            {
                from: 6,
                to: 7,
                waypoints: [
                    [61.5, 6.0],    // South along coast
                    [61.0, 5.5]     // Approaching Bergen
                ]
            },
            // Bergen back to Southampton
            {
                from: 7,
                to: 1,
                waypoints: [
                    [58.0, 4.0],    // Norwegian Sea
                    [56.0, 3.0],    // North Sea
                    [54.0, 2.0],    // Approaching UK
                    [52.0, 2.0],    // North Sea
                    [51.098172970194824, 1.5994916738953902], // English Channel
                    [50.604788349393054, 0.29698060046234687], // South of Eastbourne
                    [50.66284565591595, -0.8591188441340495], // Near Isle of Wight
                    [50.88451066305381, -1.4025437711130933] // River Test
                ]
            }
        ]
    }
];

// Make data available globally
window.travelData = travelData;

// Add Southampton return for completeness
travelData[0].destinations.push({
    name: 'Southampton',
    country: 'United Kingdom',
    continent: 'Europe',
    coords: [50.89252387769757, -1.3995001995296],
    date: 'Sat 12 Aug 2017',
    time: 'Debark Ship',
    description: 'Disembarkation - Ocean Terminal',
    highlights: ['Journey complete', 'Memories made', 'Safe return home'],
    photos: []
});
