let value1 = 900;
let value2 = 500;

function addition(){
    return value1 + value2;
}
// let addition = value1 + value2;

// exporting data so that importer can use it
module.exports = {addition, value1, value2};