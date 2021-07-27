// Code your solution here

function findMatching(drivers, string){
    return drivers.filter(driver => {return driver.toUpperCase() === string.toUpperCase()})
}

function fuzzyMatch(drivers, string){
    return drivers.filter(driver => {return driver.substr(0, string.length) === string})
}

function matchName(drivers, string){
    return drivers.filter(driver => {return driver.name === string})
}