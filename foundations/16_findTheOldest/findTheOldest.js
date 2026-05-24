const findTheOldest = function(people) {
    let ages = [];

    
    for (i = 0; i < people.length; i++) {
        let age = people[i].yearOfDeath - people[i].yearOfBirth;
        ages.push(age);
    }

    let oldest = 0;
    
    for (i = 0; i < ages.length; i++) {
        if (ages[i] > oldest) {
            oldest = ages[i];
        }
    }

    let oldestIdx = ages.indexOf(oldest);

    return people[oldestIdx];

};

// Do not edit below this line
module.exports = findTheOldest;
