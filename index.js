const pointInPolygon = (point, vs, start, end) => {
    var x = point[0], y = point[1];
    var inside = false;
    if (start === undefined) start = 0;
    if (end === undefined) end = vs.length;
    var len = end - start;
    for (var i = 0, j = len - 1; i < len; j = i++) {
        var xi = vs[i+start][0], yi = vs[i+start][1];
        var xj = vs[j+start][0], yj = vs[j+start][1];
        var intersect = ((yi > y) !== (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    return inside;
}

// StartBase to Calculate Radius
const degreeToRadians =  (degree) =>{
    return degree * Math.PI / 180;
}
const distanceCalculation = (lat1, lng1, lat2, lng2) => {
    let earthRadius = 6371;                               //radius of Earth in KM.
    let differenceOfLatInRadians = degreeToRadians(lat1 - lat2);
    let differenceOfLngInRadians = degreeToRadians(lng1 - lng2);
    let lat1InRadians = degreeToRadians(lat1);
    let lat2InRadians = degreeToRadians(lat2);
    let a = Math.sin(differenceOfLatInRadians/2) * Math.sin(differenceOfLatInRadians/2) +
            Math.cos(lat1InRadians) * Math.cos(lat2InRadians) * 
            Math.sin(differenceOfLngInRadians/2) * Math.sin(differenceOfLngInRadians/2) ;
    
    let c = 2 * Math.atan2( Math.sqrt(a), Math.sqrt(1-a) );
    return earthRadius*c;
}
const pointInCircle = (pointLat, pointLng, circle) => {
    const {circleLat, circleLng, circleRadius} = circle;
    distanceOfPointFromCircleCenter = distanceCalculation(pointLat, pointLng,circleLat, circleLng,);
    return distanceOfPointFromCircleCenter > circleRadius ? {result : false, distanceFromCenter: distanceOfPointFromCircleCenter} : {result : true, distanceFromCenter: distanceOfPointFromCircleCenter};   
}


module.exports = { pointInCircle, pointInPolygon }
