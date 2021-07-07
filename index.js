function wakeDog(dogName, dogBreed) {
    const action1 = `Wake ${dogName} the ${dogBreed}`;
    console.log(action1);
    return action1;
}

function leashDog(dogName, dogBreed) {
    const action2 = `Leash ${dogName} the ${dogBreed}`;
    console.log(action2);
    return action2;
}

function walkToPark(dogName, dogBreed) {
    const action3 = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(action3);
    return action3;
}

function throwFrisbee(dogName, dogBreed) {
    const action4 = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(action4);
    return action4;
}

function walkHome(dogName, dogBreed) {
    const action5 = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(action5);
    return action5;
}

function unleashDog(dogName, dogBreed) {
    const action6 = `Unleash ${dogName} the ${dogBreed}`;
    console.log(action6);
    return action6;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
    let i = 0
    let result = []
    for (i; i <routine.length; i++) {
        
        result.push(routine[i](dogName, dogBreed));
        }

    return result
    
}





