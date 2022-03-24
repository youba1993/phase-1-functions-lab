function distanceFromHqInBlocks(dHq){
    let distance = 0 ;
    if (dHq>42){
        distance = dHq - 42;
    }else {
        distance =42 - dHq;
    }
    return distance ;  
}
function distanceFromHqInFeet(distance){
    let distHq = distanceFromHqInBlocks(distance);
       return  distHq * 264;
 }
function distanceTravelledInFeet(block1 , block2){
    let distance = 0 ;
    if (block1 > block2) {
        distance = (block1 - block2)*264 ; 
    } else {
        distance = (block2 - block1)*264 ;  
    }
    return distance ;
}
function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    switch (true){
        case distance < 400 : return 0;
        break;
        case distance >= 400 && distance <2000 : return ((distance-400)*2)/100;
        break;
        case distance >=2000 && distance <2500 : return 25;
        break;
        case distance >2500 : return 'cannot travel that far';
        break;
    }
   
    
}