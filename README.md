# Inside GeoFence
This package will help you to identify if a (latitude / longitude) is within a circular or polygonal geofence

## Installation
`npm install --save inside_geofence`
`yarn add inside_geofence`

## Usage

### Complete Example


    const { pointInCircle, pointInPolygon } = require('inside_geofence');

    // Circle  Geofence
    geofenceCircle = { 
        circleLat : 25.675992,
        circleLng : -100.322234,
        circleRadius : 0.05 // Radius in KM (kilometers)
    }
    
    console.log(pointInCircle(25.676224, -100.321972 , circle)); //inside
    console.log(pointInCircle(25.676348, -100.321823 , circle)); //outside

    The above will return the result as 
    { result: true, distanceFromCenter: 0.036808906536072265 }
    { result: false, distanceFromCenter: 0.05712698970054393 }

    // Polygon  Geofence

    
    let polygonGeofence = [
        [25.677076287573513, -100.32288908958435 ], 
        [25.675403539167014,-100.32313585281373],
        [25.675142472268792,-100.32124757766725],
        [25.675558245207203,-100.32118320465088],
        [25.675654936380383,-100.3220844268799],
        [25.676148060143237,-100.3219771385193],
        [25.676070707531043,-100.32109737396242],
        [25.67693125251409,-100.32103300094606]
    ]

    console.log(pointInPolygon([ 25.676400, -100.320334], polygonGeofence)); //false
    console.log(pointInPolygon([ 25.676453, -100.321505], polygonGeofence)); //true
    console.log(pointInPolygon([ 25.676543, -100.321081], polygonGeofence)); //true
    console.log(pointInPolygon([ 25.676541, -100.320999], polygonGeofence)); //false

