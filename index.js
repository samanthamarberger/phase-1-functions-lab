// Code your solution in this file!

const streetHQ = 42;
const blockLength = 264;

function distanceFromHqInBlocks (pickupLocation) {
    let distance = Math.abs(pickupLocation - streetHQ);
    return distance;
}

function distanceFromHqInFeet(pickupLocation) {
    let distanceInFeet = distanceFromHqInBlocks (pickupLocation) * blockLength;
    return distanceInFeet;
}

function distanceTravelledInFeet(pickupLocation, dropOffLocation) {
    let distanceTravelled = Math.abs((pickupLocation - dropOffLocation) * blockLength);
    return distanceTravelled;
}

function  calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    let fare = 0;
    if (distance <= 400) {
        return fare
    }
    else if (distance <= 2000) {
        fare =  (distance - 400) * 0.02;
        return fare;
    }
    else if (distance <= 2500) {
        fare = 25;
        return fare;
    }
    else {
        fare = 'cannot travel that far'
        return 'cannot travel that far';
    }
}