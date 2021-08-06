const travel = 42

function distanceFromHqInBlocks(distance){
    return Math.abs(distance - travel) 
}

function distanceFromHqInFeet(newDistance){
    return Math.abs(newDistance - travel) * 264
}
    
function distanceTravelledInFeet(first, second) {
   return Math.abs(first - second) * 264
}

// function calculatesFarePrice(start, destination){
//     let distance = (start - destination) * 264
//         if (distance <= 400){
//             return 0;
//         }
//         else if (distance > 400 && distance <= 2000){
//             return (distance - 400) * .02;
//         }
//         else if (distance > 2000 && distance <= 2500){
//             return 25;
//         }
//         else if (distance > 2500) {
//             return 'cannot travel that far';
//         }



// }
    


function calculatesFarePrice(someValue1, someValue2) {
    let distance = (Math.abs(someValue1 - someValue2)*264)
    if (distance <= 400){
        return 0;
    } else if (distance > 400 && distance <= 2000){
        return (distance - 400)*0.02;
    } else if (distance > 2000 && distance <= 2500){
        return 25;
    } else if (distance > 2500) {
        return 'cannot travel that far';
    }
}



















// // function distanceFromHqInBlocks(someValue){
// //     switch (someValue) {
// //         case 43:
// //             return 1;
// //         case 50:
// //             return 8;
// //         case 34:
// //             return 8;
// //     }

// // }


// // function distanceFromHqInFeet (someValue) {
// //     switch (someValue) {
// //         case 43:
// //             return 264;
// //         case 50:
// //             return 2112;
// //         case 34:
// //             return 2112;
// //     }
// // }

// // function distanceTravelledInFeet (someValue) {
// //     switch (someValue) {
// //         case 43:
// //             return 1320;
// //         case 48:
// //             return 1320;
// //         case 50:
// //             return 2640;
// //         case 60:
// //             return 2640;
// //         case 34:
// //             return 1584;
// //         case 28:
// //             return 1584;
// //     }
// // }

// // function calculatesFarePrice (start, destination) {
// //     switch (start, destination) {
// //         case 43:
// //             return 0;
// //         case 44:
// //             return 0;
// //         case 34:
// //             return 2.56;
// //         case 32:
// //             return 2.56;
// //         case 50:
// //             return 25;
// //         case 58:
// //             return 25;
// //         case 34:
// //             return 'cannot travel that far';
// //         case 24:
// //             return 'cannot travel that far';
// //     }
// // }





// let hqLocation = 42;
// function distanceFromHqInBlocks(start) {
//     return Math.abs(start - hqLocation);
// }

// function distanceFromHqInFeet(start) {
//     return Math.abs((start - hqLocation)*264); 
// }

// function distanceTravelledInFeet(start,end) {
//     return Math.abs((start-end)*264);
// }

// function calculatesFarePrice(someValue1, someValue2) {
//     let distance = (Math.abs(someValue1 - someValue2)*264)
//     if (distance <= 400){
//         return 0;
//     } else if (distance > 400 && distance <= 2000){
//         return (distance - 400)*0.02;
//     } else if (distance > 2000 && distance <= 2500){
//         return 25;
//     } else if (distance > 2500) {
//         return 'cannot travel that far';
//     }
// }
