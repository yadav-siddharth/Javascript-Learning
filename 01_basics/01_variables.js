const accountId = 136458734;
let accountName = "Siddharth Yadav"
var accountEmail = 'siddharth@gamil.com'
accountCity = 'Mumbai'

// accountId = '39698'  // not allowed in javascript to change const variable

console.log(accountEmail)

accountEmail = 'yadav@gmail.com'
accountName = 'Santosh'
accountCity = 'Jaipur'

console.table([accountEmail,accountId,accountName,accountCity])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/