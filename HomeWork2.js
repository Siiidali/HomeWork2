// Exercice 1:
// Write a JavaScript program that compare two objects 
// to determine if the first one contains equivalent 
// property values to the second one.

function compare (obj1,obj2){
    arr = Object.keys(obj2)
    return arr.every((prop)=>{
        return obj1.hasOwnProperty(prop) && obj1[prop] === obj2[prop];
    })
}
object1 = {nom:'si-saber',prenom:'sidali',studies:'cs'};
object2 = {nom:'si-saber',prenom:'sidali'};
object3 = {nom:'si-saber',prenom:'sidali',age:20}
console.log(compare(object1,object2));
console.log(compare(object1,object3));


//  Exercice 2:
// Write a JavaScript function to find the common elements from two arrays
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2"] 
function deff(arr1,arr2){
    for(var i = 0 ; i<arr1.length ; i++){
        for(var j = 0 ; j<arr2.length ; j++){
            if(arr1[i]==arr2[j]){
                console.log(arr1[i]);
                break;
            }
        }
    }
}
array1 = [1, 2, 3];
array2 = [100, 2, 1,1, 10];
deff(array1,array2);
