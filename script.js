let map;

function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: 39.8996145, lng: -80.1877027 },
		zoom: 17.5,
		styles: [
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ece2d9"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#b8cb93"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ccdca1"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "hue": "#ff0000"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 99
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#808080"
            },
            {
                "lightness": 54
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#767676"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "saturation": 43
            },
            {
                "lightness": -11
            },
            {
                "hue": "#0088ff"
            }
        ]
    }
]

	});
// Define the LatLng coordinates for the polygon's path.
const stewartCoords = [
{ lat: 39.89820313942542, lng: -80.18674222997413 },
{ lat: 39.898196966171525, lng: -80.1864800440406 },
{ lat: 39.8977313983387, lng: -80.1864981489516 },
{ lat: 39.89773808607581, lng: -80.18675966433287 },
{ lat: 39.89820313942542, lng: -80.18674222997413 },
];
  // Construct the polygon.
  const stewartpolygon = new google.maps.Polygon({
  	paths: stewartCoords,
  	strokeColor: "#000000",
  	strokeOpacity: 0.8,
  	strokeWeight: 2,
  	fillColor: "#c16c18",
  	fillOpacity: 1.35,
  });

  stewartpolygon.setMap(map);

  const southCoords = [
  { lat: 39.90036605487646, lng: -80.18613153937626 },
  { lat: 39.90036296834702, lng: -80.18572786691594 },
  { lat: 39.90022304553257, lng: -80.18572786691594 },
  { lat: 39.90022407437784, lng: -80.18613556268981 },
  { lat: 39.90036605487646, lng: -80.18613153937626 },
  ];
  // Construct the polygon.
  const southpolygon = new google.maps.Polygon({
  	paths: southCoords,
  	strokeColor: "#000000",
  	strokeOpacity: 0.8,
  	strokeWeight: 2,
  	fillColor: "#c16c18",
  	fillOpacity: 1.35,
  });

  southpolygon.setMap(map);

  const westCoords = [
  { lat: 39.90053787146326, lng: -80.18560984971823 },
  { lat: 39.90053787146326, lng: -80.18542477729457 },
  { lat: 39.900227082463, lng: -80.18542305089767 },
  { lat: 39.90022503189161, lng: -80.1856048100907 },
  { lat: 39.90053787146326, lng: -80.18560984971823 },
  ];
  // Construct the polygon.
  const westpolygon = new google.maps.Polygon({
  	paths: westCoords,
  	strokeColor: "#000000",
  	strokeOpacity: 0.8,
  	strokeWeight: 2,
  	fillColor: "#c16c18",
  	fillOpacity: 1.35,
  });

  westpolygon.setMap(map);

  const eastCoords = [
  { lat: 39.900556198377956, lng: -80.1864066888825 },
  { lat: 39.90055312253561, lng: -80.1862209202955 },
  { lat: 39.900233234177925, lng: -80.18622893908343 },
  { lat: 39.90023425946349, lng: -80.18641337120577 },
  { lat: 39.900556198377956, lng: -80.1864066888825 },
  ];
  // Construct the polygon.
  const eastpolygon = new google.maps.Polygon({
  	paths: eastCoords,
  	strokeColor: "#000000",
  	strokeOpacity: 0.8,
  	strokeWeight: 2,
  	fillColor: "#c16c18",
  	fillOpacity: 1.35,
  });

  eastpolygon.setMap(map);

  const pollockCoords = [
  { lat: 39.89932966350404, lng: -80.18516459443458 }, 
  { lat: 39.89932674703466, lng: -80.18474261889916 }, 
  { lat: 39.89918383988418, lng: -80.18474185858288 }, 
  { lat:39.89918675635962, lng: -80.18516611506715 }, 
  { lat: 39.89932966350404 , lng: -80.18516459443458}
  ];
// Construct the polygon.
const pollockpolygon = new google.maps.Polygon({
	paths: pollockCoords,
	strokeColor: "#000000",
	strokeOpacity: 0.8,
	strokeWeight: 2,
	fillColor: "#c16c18",
	fillOpacity: 1.35,
});

pollockpolygon.setMap(map);

const chapelCoords = [
{ lat: 39.90094608957603, lng: -80.1873105618882 },
{ lat: 39.90094043098594, lng: -80.18702557717629 },
{ lat: 39.900505747029655, lng: -80.18704032932601 },
{ lat: 39.90051089123462, lng: -80.18732397293185 },
{ lat: 39.90094608957603, lng: -80.1873105618882 },
];
  // Construct the polygon.
  const chapelpolygon = new google.maps.Polygon({
  	paths: chapelCoords,
  	strokeColor: "#000000",
  	strokeOpacity: 0.8,
  	strokeWeight: 2,
  	fillColor: "#c16c18",
  	fillOpacity: 1.35,
  });

  chapelpolygon.setMap(map);

  const nestCoords = [
  {lat: 39.8982031743014, lng: -80.18528256249408},
    {lat: 39.89803340961704, lng: -80.1852906091205},
    {lat: 39.89803958288567, lng: -80.18549915085532},
    {lat: 39.89820883311696, lng: -80.18549512754211},
    {lat: 39.8982031743014, lng: -80.18528256249408},
  ];
  // Construct the polygon.
  const nestpolygon = new google.maps.Polygon({
  	paths: nestCoords,
  	strokeColor: "#000000",
  	strokeOpacity: 0.8,
  	strokeWeight: 2,
  	fillColor: "#c16c18",
  	fillOpacity: 1.35,
  });

  nestpolygon.setMap(map);

 const MillerCoords = [
    { lat: 39.89939727765804, lng: -80.1877995788888}, 
    { lat: 39.89939419108494, lng: -80.18761718866978},
    { lat: 39.89937772935947, lng: -80.18761718866978},
    { lat: 39.89937515721452, lng: -80.18760713038564},
    { lat: 39.899367955208106, lng: -80.1876057892811},
    { lat: 39.89936744077903,  lng: -80.1874254107189},
    { lat: 39.89937515721452, lng: -80.1874227285098},
    { lat: 39.899376186072516, lng: -80.18741602298704},
    { lat: 39.89939933537334, lng: -80.18741535243477}, 
    { lat: 39.89939984980218, lng: -80.1872289389021},
    { lat: 39.89955932254984, lng: -80.18723229166346},
    { lat: 39.89956343797066, lng: -80.18743748065987},
    { lat: 39.899593274764335, lng: -80.18743748065987},
    { lat: 39.89959481804641, lng: -80.18759103713101},
    { lat: 39.8995618946879, lng: -80.18759304878785},
    { lat: 39.89956086583266, lng: -80.18779555557518},
    { lat: 39.89939727765804, lng: -80.1877995788888}
];
  // Construct the polygon.
  const Millerpolygon = new google.maps.Polygon({
  	paths: MillerCoords,
  	strokeColor: "#000000",
  	strokeOpacity: 0.8,
  	strokeWeight: 2,
  	fillColor: "#c16c18",
  	fillOpacity: 1.35,
  });

  Millerpolygon.setMap(map);

  const StoverCoords = [
    {lat: 39.899772227541916, lng: -80.18636360069222},
    {lat: 39.89980309309625, lng: -80.18636695345333},
    {lat: 39.89980309309625, lng: -80.18640517492993},
    {lat: 39.89999548807153, lng: -80.18639712830327},
    {lat: 39.89999548807153, lng: -80.18635823627444},
    {lat: 39.90002841122172, lng: -80.18635756572223},
    {lat: 39.90002326698055, lng: -80.18596864543396},
    {lat: 39.89976502557723, lng: -80.18597803316504},
    {lat: 39.899772227541916, lng: -80.18636360069222}
];
  // Construct the polygon.
  const Stoverpolygon = new google.maps.Polygon({
  	paths: StoverCoords,
  	strokeColor: "#000000",
  	strokeOpacity: 0.8,
  	strokeWeight: 2,
  	fillColor: "#c16c18",
  	fillOpacity: 1.35,
  });

  Stoverpolygon.setMap(map);

  const willisonCoords = [
  { lat: 39.897538998708136, lng: -80.18620531789718 },
  { lat: 39.897541056479255, lng: -80.18638502589995 },
  { lat: 39.89711509654142, lng: -80.18639307252694 },
  { lat: 39.89711509654142, lng: -80.18621604673316 },
  { lat: 39.897538998708136, lng: -80.18620531789718 }
  ];
   // Construct the polygon.
   const willisonpolygon = new google.maps.Polygon({
   	paths: willisonCoords,
   	strokeColor: "#000000",
   	strokeOpacity: 0.8,
   	strokeWeight: 2,
   	fillColor: "#c16c18",
   	fillOpacity: 1.35,
   });

   willisonpolygon.setMap(map);

   const GpacCoords = [
   { lat: 39.90003, lng: -80.18801},
   { lat: 39.90002, lng: -80.18771},
   { lat: 39.89980, lng: -80.18772},
   { lat: 39.89981, lng: -80.18802},
   { lat: 39.90003, lng: -80.18801} 
   ];
 // Construct the polygon.
 const Gpacpolygon = new google.maps.Polygon({
 	paths: GpacCoords,
 	strokeColor: "#000000",
 	strokeOpacity: 0.8,
 	strokeWeight: 2,
 	fillColor: "#c16c18",
 	fillOpacity: 1.35,
 });

 Gpacpolygon.setMap(map);

 const ThayerCoords = [
 { lat: 39.89980, lng: -80.18429},
 { lat: 39.89979, lng: -80.18416},
 { lat: 39.89947, lng: -80.18416},
 { lat: 39.89947, lng: -80.18415},
 { lat: 39.89940, lng: -80.18415},
 { lat: 39.89939, lng: -80.18409},
 { lat: 39.89922, lng: -80.18409},
 { lat: 39.89922, lng: -80.18430},
 { lat: 39.89980, lng: -80.18429} ];

 const ThayerPolygon = new google.maps.Polygon({
 	paths: ThayerCoords,
 	strokeColor: "#000000",
 	strokeOpacity: 0.8,
 	strokeWeight: 2,
 	fillColor: "#c16c18",
 	fillOpacity: 1.35,
 });

 ThayerPolygon.setMap(map);

 const eberlyCoords = [

 { lat: 39.899922770354294, lng: -80.18553282853959 },

{ lat: 39.8999222559294, lng: -80.18550600644919 },

{ lat: 39.89994283292212, lng: -80.18550533589693 },

{ lat: 39.89994283292212, lng: -80.18549728926982 },

{ lat: 39.9000524053043, lng: -80.18549326595624 },

{ lat: 39.90005034760858, lng: -80.18533702727966 },

{ lat: 39.90004417452111, lng: -80.18533635672739 },

{ lat: 39.90004160240115, lng: -80.18518950578245 },

{ lat: 39.89993923194808, lng: -80.18519285854521 },

{ lat: 39.89993768867374, lng: -80.1851861530226 },

{ lat: 39.899848178703685, lng: -80.18518816467937 },

{ lat: 39.89984658769828, lng: -80.1851625027092 },

{ lat: 39.89970049070834, lng: -80.18516786712725 },

{ lat: 39.899702548414545, lng: -80.18530600089281 },

{ lat: 39.89968402905644, lng: -80.18530600089281 },

{ lat: 39.89968505790979, lng: -80.18535025734197 },

{ lat: 39.899704606120686, lng: -80.18535025734197 },

{ lat: 39.8997071782536, lng: -80.18550381380766 },

{ lat: 39.89981932314095, lng: -80.1854997904941 },

{ lat: 39.89981932314235, lng: -80.18550783712094 },

{ lat: 39.89984247229349, lng: -80.18550582546415 },

{ lat: 39.89984350114448, lng: -80.18553398865906 },

{ lat: 39.899922770354294, lng: -80.18553282853959 }

];

 const eberlyPolygon = new google.maps.Polygon({
 	paths: eberlyCoords,
 	strokeColor: "#000000",
 	strokeOpacity: 0.8,
 	strokeWeight: 2,
 	fillColor: "#c16c18",
 	fillOpacity: 1.35,
 });

 eberlyPolygon.setMap(map);

 const CafeCoords = [

 {lat: 39.900590997830925, lng: -80.18815567971573},

{lat: 39.9005889401514, lng: -80.18809130669877},

{lat: 39.90067536263846, lng: -80.18808661283293},

{lat: 39.90067124728441, lng: -80.18796457232162},

{lat: 39.900584310372246, lng: -80.18796926618744},

{lat: 39.9005745363928, lng: -80.18770171583846},

{lat: 39.900187698665945, lng: -80.18772553440714},

{lat: 39.900203131352356, lng: -80.18817815717938},

{lat: 39.900590997830925, lng: -80.18815567971573}
 ];

 const CafePolygon = new google.maps.Polygon({
 	paths: CafeCoords,
 	strokeColor: "#000000",
 	strokeOpacity: 0.8,
 	strokeWeight: 2,
 	fillColor: "#c16c18",
 	fillOpacity: 1.35,
 });

 CafePolygon.setMap(map);

 const hannaCoords = [
 { lat: 39.899575902129406, lng: -80.18715171790629 },
 { lat: 39.89957230113685, lng: -80.18694183506034 },
 { lat: 39.89937424625455, lng: -80.18694787003034 },
 { lat: 39.89937784725752, lng: -80.18715708232408 },
 { lat: 39.899575902129406, lng: -80.18715171790629 }
 ];

 const hannaPolygon = new google.maps.Polygon({
 	paths: hannaCoords,
 	strokeColor: "#000000",
 	strokeOpacity: 0.8,
 	strokeWeight: 2,
 	fillColor: "#c16c18",
 	fillOpacity: 1.35,
 });

 hannaPolygon.setMap(map);

 const fieldhouseCoords = [
 { lat: 39.89822129557472, lng: -80.18785727074538 },
 { lat: 39.89821720506465, lng: -80.18727432259585 },
 { lat: 39.89798540909532, lng: -80.18727609987678 },
 { lat: 39.89798677260331, lng: -80.18785904802633 },
 { lat: 39.89822129557472, lng: -80.18785727074538 },
 ];

 const fieldhousePolygon = new google.maps.Polygon({
 	paths: fieldhouseCoords,
 	strokeColor: "#000000",
 	strokeOpacity: 0.8,
 	strokeWeight: 2,
 	fillColor: "#c16c18",
 	fillOpacity: 1.35,
 });

 fieldhousePolygon.setMap(map);

 const cjCoords = [
 { lat: 39.900381516505455, lng: -80.18875312061515 },
 { lat: 39.90030229555674, lng: -80.18875312061515 },
 { lat: 39.900303838822865, lng: -80.1890005543931 },
 { lat: 39.90038357419121, lng: -80.18899988384086 },
 { lat: 39.900381516505455, lng: -80.18875312061515 },
 ];
 const cjHouse = new google.maps.Polygon({
 	paths: cjCoords,
 	strokeColor: "#000000",
 	strokeOpacity: 0.8,
 	strokeWeight: 2,
 	fillColor: "#c16c18",
 	fillOpacity: 1.35,
 });
 cjHouse.setMap(map);

 const WILEYCoords = [
 { lat: 39.893254519482745, lng: -80.18153607900841 }, 
    { lat: 39.893179400851224, lng: -80.181416094374 }, 
    { lat: 39.89309323526072, lng: -80.18151016232737 },  
    { lat: 39.89316909044439, lng: -80.18162822720764 },
    { lat: 39.893253783025976, lng: -80.18153770943769 },  
 ];
  // Construct the polygon.
  const Wileypolygon = new google.maps.Polygon({
  	paths: WILEYCoords,
  	strokeColor: "#000000",
  	strokeOpacity: 0.8,
  	strokeWeight: 2,
  	fillColor: "#c16c18",
  	fillOpacity: 1.35,
  });

  Wileypolygon.setMap(map);

  const BuhlhallCoords = [
  { lat: 39.89950878796206,  lng: -80.18562837849694},
  { lat: 39.899509816818046, lng: -80.18551304351189},
  { lat: 39.89954891333424,  lng: -80.18551304351189},
  { lat: 39.899546855623434, lng: -80.18537356864626},
  { lat: 39.89950055711358,  lng: -80.18537222754178},
  { lat: 39.899497470545185, lng: -80.18525689255674},
  { lat: 39.899184697556294, lng: -80.18526091587017},
  { lat: 39.899188812999625, lng: -80.18564178954172},
  { lat: 39.89950878796206,  lng: -80.18562837849694},  
  ];

  const Buhlhallpolygon = new google.maps.Polygon({
  	paths: BuhlhallCoords,
  	strokeColor: "#000000",
  	strokeOpacity: 0.8,
  	strokeWeight: 2,
  	fillColor: "#c16c18",
  	fillOpacity: 1.35,
  });
  Buhlhallpolygon.setMap(map);

const buhlmarker = new google.maps.Marker({
		position: { lat: 39.89931103038398, lng: -80.18549393947211 },
		map,
		title: "Buhl Hall",
		icon: "https://i.imgur.com/P93gRrH.png",
	});

const Buhlwindow = new google.maps.InfoWindow({
  	content: "<img src='https://i.imgur.com/ERg6yqs.png'><br>Buhl Hall is home to the a plethora of different academic departments at Waynesburg University. It is also home to the award-winning media groups WCTV, The Yellow Jacket, WUSN, and PRSSA.",
  });
  buhlmarker.addListener("click", () => {
  	Buhlwindow.open({
  		anchor: buhlmarker,
  		map,
  		shouldFocus: false,
  	});
  	});
  const Millermarker = new google.maps.Marker({
		position: { lat: 39.89947801522044, lng: -80.1875298503923 },
		map,
		title: "Miller Hall",
		icon: "https://i.imgur.com/P93gRrH.png",
	});

const Millerwindow = new google.maps.InfoWindow({
  	content: "<img src='https://i.imgur.com/HgDv0Ki.jpg'><br>Miller Hall is the main building used by administrators at Waynesburg University. Located in it is the business office, President's office, university relations, and many more. The building is named after Alfred Brashear Miller.",
  });
  Millermarker.addListener("click", () => {
  	Millerwindow.open({
  		anchor: Millermarker,
  		map,
  		shouldFocus: false,
  	});
  	});

  const Stovermarker = new google.maps.Marker({
		position: { lat: 39.89989109561443, lng: -80.18620282372892 },
		map,
		title: "Stover Center",
		icon: "https://i.imgur.com/P93gRrH.png",
	});

const Stoverwindow = new google.maps.InfoWindow({
  	content: "<img src='https://i.imgur.com/ubMnNIX.jpeg'><br>The Stover Center is the main hub for student recreation and student services. Located in it is a Starbucks, 24/7 market, place for students to get food, the Center of Campus Ministry and more!",
  });
  Stovermarker.addListener("click", () => {
  	Stoverwindow.open({
  		anchor: Stovermarker,
  		map,
  		shouldFocus: false,
  	});
  	});
  const Eberlymarker = new google.maps.Marker({
		position: { lat: 39.89987491341424, lng: -80.18535366145835 },
		map,
		title: "Eberly Library",
		icon: "https://i.imgur.com/y0KPsPE.png",
	});

const Eberlywindow = new google.maps.InfoWindow({
  	content: "<img src='https://i.imgur.com/ijYBHRd.jpg'><br>Eberly Library is host to over 295,000 print and online books. There are many resources offered to students through the Eberly Library such as the Writing Center, Tutoring Center, Pathways Center, and more.",
  });
  Eberlymarker.addListener("click", () => {
  	Eberlywindow.open({
  		anchor: Eberlymarker,
  		map,
  		shouldFocus: false,
  	});
  	});
  const Pollockmarker = new google.maps.Marker({
		position: { lat: 39.89924936946002, lng: -80.18496474113618 },
		map,
		title: "Pollock Hall",
		icon: "https://i.imgur.com/kCr3rJ2.png",
	});

const Pollockwindow = new google.maps.InfoWindow({
  	content: "<img src='https://i.imgur.com/0hyVzsq.jpg'><br>Pollock Hall is an upperclassmen female residence hall on campus.",
  });
  Pollockmarker.addListener("click", () => {
  	Pollockwindow.open({
  		anchor: Pollockmarker,
  		map,
  		shouldFocus: false,
  	});
  	});
  const Thayermarker = new google.maps.Marker({
		position: { lat: 39.89946542969694, lng: -80.18423249805456 },
		map,
		title: "Thayer Hall",
		icon: "https://i.imgur.com/kCr3rJ2.png",
	});

const Thayerwindow = new google.maps.InfoWindow({
  	content: "<img src='https://i.imgur.com/bSCkLsj.jpeg'><br>Thayer Hall is an underclassmen male residence hall on campus. Most first and second year students are placed here.",
  });
  Thayermarker.addListener("click", () => {
  	Thayerwindow.open({
  		anchor: Thayermarker,
  		map,
  		shouldFocus: false,
  	});
  	});
 const Southmarker = new google.maps.Marker({
		position: { lat: 39.900278221629435, lng: -80.18593838303595 },
		map,
		title: "South Hall",
		icon: "https://i.imgur.com/kCr3rJ2.png",
	});

const Southwindow = new google.maps.InfoWindow({
  	content: "<img src='https://i.imgur.com/vZJWhad.jpg'><br>South Hall is an upperclassmen female residence hall on campus.",
  });
  Southmarker.addListener("click", () => {
  	Southwindow.open({
  		anchor: Southmarker,
  		map,
  		shouldFocus: false,
  	});
  	});
 const Eastmarker = new google.maps.Marker({
		position: { lat: 39.90035819203803, lng: -80.18553227148165 },
		map,
		title: "East Hall",
		icon: "https://i.imgur.com/kCr3rJ2.png",
	});

const Eastwindow = new google.maps.InfoWindow({
  	content: "<img src='https://i.imgur.com/vZJWhad.jpg'><br>East Hall is an upperclassmen female residence hall on campus.",
  });
  Eastmarker.addListener("click", () => {
  	Eastwindow.open({
  		anchor: Eastmarker,
  		map,
  		shouldFocus: false,
  	});
  	});
  const Westmarker = new google.maps.Marker({
		position: { lat: 39.90038316368256, lng: -80.18632193893585 },
		map,
		title: "West Hall",
		icon: "https://i.imgur.com/kCr3rJ2.png",
	});

const Westwindow = new google.maps.InfoWindow({
  	content: "<img src='https://i.imgur.com/vZJWhad.jpg'><br>West Hall is an upperclassmen female residence hall on campus.",
  });
  Westmarker.addListener("click", () => {
  	Westwindow.open({
  		anchor: Westmarker,
  		map,
  		shouldFocus: false,
  	});
  	});
  const Willisonmarker = new google.maps.Marker({
		position: { lat: 39.89730474412355, lng: -80.18630657623282 },
		map,
		title: "Willison Hall",
		icon: "https://i.imgur.com/kCr3rJ2.png",
	});

const Willisonwindow = new google.maps.InfoWindow({
  	content: "<img src='https://i.imgur.com/Eu0kcIG.jpeg'><br>Willison Hall is an upperclassmen male residence hall on campus. Most junior and senior males get placed here.",
  });
  Willisonmarker.addListener("click", () => {
  	Willisonwindow.open({
  		anchor: Willisonmarker,
  		map,
  		shouldFocus: false,
  	});
  	});
 const Nestmarker = new google.maps.Marker({
		position: { lat: 39.89811961943875, lng: -80.18539998957176 },
		map,
		title: "The Nest",
		icon: "https://i.imgur.com/BTtACCE.png",
	});

const Nestwindow = new google.maps.InfoWindow({
  	content: "<img src='https://i.imgur.com/1R2WksU.jpeg'><br>The Nest is the new campus store and hangout at Waynesburg University.",
  });
  Nestmarker.addListener("click", () => {
  	Nestwindow.open({
  		anchor: Nestmarker,
  		map,
  		shouldFocus: false,
  	});
  	});
  const Rudymarker = new google.maps.Marker({
		position: { lat: 39.89809701150556, lng: -80.18756458191751 },
		map,
		title: "Rudy Marisa Fieldhouse",
		icon: "https://i.imgur.com/X0tSL2i.png",
	});

const Rudywindow = new google.maps.InfoWindow({
  	content: "<img src='https://i.imgur.com/mx36fSN.jpg'><br>The Rudy Marisa Fieldhouse is home to the basketball, wrestling and volleyball teams. It is named after former Waynesburg head coach Rudy Marisa.",
  });
  Rudymarker.addListener("click", () => {
  	Rudywindow.open({
  		anchor: Rudymarker,
  		map,
  		shouldFocus: false,
  	});
  	});
   const Stewartmarker = new google.maps.Marker({
		position: { lat: 39.897963257339775, lng: -80.18663117315411 },
		map,
		title: "Paul R. Stewart Science Building",
		icon: "https://i.imgur.com/P93gRrH.png",
	});

const Stewartwindow = new google.maps.InfoWindow({
  	content: "<img src='https://i.imgur.com/ENvJxbj.jpg'><br>The Paul R. Stewart Science Building is home to the science departments at Waynesburg University.",
  });
  Stewartmarker.addListener("click", () => {
  	Stewartwindow.open({
  		anchor: Stewartmarker,
  		map,
  		shouldFocus: false,
  	});
  	});
 const Hannamarker = new google.maps.Marker({
		position: { lat: 39.899475693097386, lng: -80.1870630088098 },
		map,
		title: "Hanna Hall",
		icon: "https://i.imgur.com/P93gRrH.png",
	});

const Hannawindow = new google.maps.InfoWindow({
  	content: "<img src='https://i.imgur.com/noYJ91U.jpg'><br>Hanna Hall was the original Waynesburg University building here and was built in 1851. The building is now home to the business administration department.",
  });
  Hannamarker.addListener("click", () => {
  	Hannawindow.open({
  		anchor: Hannamarker,
  		map,
  		shouldFocus: false,
  	});
  	});
  const Cafemarker = new google.maps.Marker({
		position: { lat: 39.90039472434481, lng: -80.18794336597321 },
		map,
		title: "Benedum Dining Hall",
		icon: "https://i.imgur.com/WBJM6hF.png",
	});  

const Cafewindow = new google.maps.InfoWindow({
  	content: "<img src='https://i.imgur.com/kjPb1NH.jpeg'><br>The Benedum Dining Hall is host to great catering from Aladdin Eatery. Students gather here to spend hours eating great food and spending it with even greater people.",
  });
  Cafemarker.addListener("click", () => {
  	Cafewindow.open({
  		anchor: Cafemarker,
  		map,
  		shouldFocus: false,
  	});
  	});
 const Wileymarker = new google.maps.Marker({
		position: { lat: 39.893166869920194, lng: -80.18152802116268 },
		map,
		title: "John F. Wiley Stadium",
		icon: "https://i.imgur.com/yYehl0k.png",
	});

const Wileywindow = new google.maps.InfoWindow({
  	content: "<img src='https://i.imgur.com/yNUuWKv.jpeg'><br>John F. Wiley Stadium hosts Waynesburg's football, soccer and lacrosse teams. It is named after former Waynesburg player and head coach John F. Wiley. He also spent some time in the NFL playing for the Pittsburgh Steelers.",
  });
  Wileymarker.addListener("click", () => {
  	Wileywindow.open({
  		anchor: Wileymarker,
  		map,
  		shouldFocus: false,
  	});
  	});
  const GPACmarker = new google.maps.Marker({
		position: { lat: 39.8999139845822, lng: -80.187878400349 },
		map,
		title: "Goodwin Performing Arts Center",
		icon: "https://i.imgur.com/EWqUY8v.png",
	});

const GPACwindow = new google.maps.InfoWindow({
  	content: "<img src='https://i.imgur.com/yUeczmS.jpeg'><br>The Goodwin Performing Arts Center contains all of Waynesburg's plays and musicals, as well as the music programs.",
  });
  GPACmarker.addListener("click", () => {
  	GPACwindow.open({
  		anchor: GPACmarker,
  		map,
  		shouldFocus: false,
  	});
  	});
 const Chapelmarker = new google.maps.Marker({
		position: { lat: 39.90070413676255, lng: -80.18718907262104 },
		map,
		title: "Roberts Chapel",
		icon: "https://i.imgur.com/ADPjj09.png",
	});

const Chapelwindow = new google.maps.InfoWindow({
  	content: "<img src='https://i.imgur.com/2CFiGnJ.jpg'><br>Roberts Chapel is the most visable building on campus with its tall pinnacle. It hosts weekly chapel services, as well as other programs held at Waynesburg.",
  });
  Chapelmarker.addListener("click", () => {
  	Chapelwindow.open({
  		anchor: Chapelmarker,
  		map,
  		shouldFocus: false,
  	});
  	});
 const CSImarker = new google.maps.Marker({
		position: { lat: 39.900348157872294, lng: -80.18888691097516 },
		map,
		title: "CSI Center",
		icon: "https://i.imgur.com/P93gRrH.png",
	});

const CSIwindow = new google.maps.InfoWindow({
  	content: "<img src='https://i.imgur.com/5DBPSeR.jpeg'><br>The CSI Center hosts classes for criminal justice students at Waynesburg.",
  });
  CSImarker.addListener("click", () => {
  	CSIwindow.open({
  		anchor: CSImarker,
  		map,
  		shouldFocus: false,
  	});
  	});
}