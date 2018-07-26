// Code your solution in this file.

function lowerCaseDrivers(object){
  return object.map(function(name){
    return name.toLowerCase();
  })
    
}

function nameToAttributes (object){
  return object.map(function(driver){
    let firstName=driver.slice(' ')[0]
    let lastName=driver.slice(' ')[1]
  })
}