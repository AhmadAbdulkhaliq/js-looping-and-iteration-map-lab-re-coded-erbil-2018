// Code your solution in this file.

function lowerCaseDrivers(object){
  return object.map(function(name){
    return name.toLowerCase();
  })
    
}

function nameToAttributes (object){
  return object.map(function(driver){
    let driverfirstName=driver.slice(' ')[0]
    let driverlastName=driver.slice(' ')[1]
    return {Fname: driverlastNamefirstName , lName: driverlastName}
  })
}