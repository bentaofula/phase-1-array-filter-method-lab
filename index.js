// Code your solution here
function findMatching(drivers, string){
    return drivers.filter(function(driver) {return driver.toLowerCase() ===string.toLowerCase() })
}
function fuzzyMatch(drivers, string){
    return drivers.filter(function(driver) {return driver.toLowerCase().substring(0, string.length) === string.toLowerCase() })
}
function matchName(driver, argument){
    return driver.filter(function (driver) {return driver.name === argument })
}