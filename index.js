// Code your solution in this file.

function lowerCaseDrivers(object){
  return object.map(function(name){
    return name.toLowerCase();
  })
    
}
function nameToAttributes (list) {
  return list.map(function (driver) {
    const driverFirst = driver.split(' ')[0];
    const driverLast = driver.split(' ')[1];

    return { firstName: driverFirst, lastName: driverLast };
  });
}