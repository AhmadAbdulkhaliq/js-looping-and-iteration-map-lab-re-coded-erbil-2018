// Code your solution in this file.

function lowerCaseDrivers(object){
  return object.map(function(name){
    return name.toLowerCase();
  })
    
}

function nameToAttributes (list){
  return list.map(function(driver){
    let driverfirstName=driver.slice(' ')[0]
    let driverlastName=driver.slice(' ')[1]
    return {firstname: driverlastNamefirstName , lastName: driverlastName}
  })
}