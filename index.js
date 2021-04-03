// Code your solution in this file!
const hq = 42;
const feetInBlock = 264;
function distanceFromHqInBlocks(num){

    if (hq > num){
        return hq - num;
    } else {
        return num - hq;
    }
}

function distanceFromHqInFeet(num){
    if (hq > num){
        return ((hq - num)*feetInBlock);
    } else {
        return ((num - hq)*feetInBlock);
    }
}

function distanceTravelledInFeet(startBlock, endBlock){
    if (startBlock > endBlock){
        return ((startBlock - endBlock)*feetInBlock);
    } else {
        return ((endBlock - startBlock)*feetInBlock);
    }
}

function calculatesFarePrice(startBlock, endBlock){
    let feetTraveling;

    // Determines the distances in feet
    if (startBlock > endBlock){
        feetTraveling = (startBlock - endBlock)*feetInBlock;
    } else {
        feetTraveling = (endBlock - startBlock)*feetInBlock;
    }

    // Determines if distances traveling is equal to or less than 400 feet
    if (feetTraveling <= 400){
        return 0;
    }
    // For distances between 400 - 2000 feet, charge 2 cents per feet excluding the first 400 which are free
    if (feetTraveling > 400 && feetTraveling <= 2000){
        feetTraveling = feetTraveling - 400;
        return feetTraveling*.02
    }
    // Flat rate of $25 for traveling between 2000 and 2500 feet
    if (feetTraveling > 2000 && feetTraveling < 2500){
        return 25;
    }
    if (feetTraveling >= 2500){
        return `cannot travel that far`;
    }
}