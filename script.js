const array = ['Mike', 'Nikola', 'Tom'];
console.log(array[1]);
array[1] = 'Alex';
array.length = array.length - 2;
console.log(array.length);


const a = [5, 3, -4, 25, 32, -16, 6];
const b = [21, -30, 9, 5, 12, -19, 5, 25];
function mas(array1,array2){
    if (array1.length > array2.length){
        console.log('a > b');
    } else if  (array1.length < array2.length){
        console.log('a < b');
    } else {console.log('a == b');}
}
mas(a,b);


let phrase = 'I am learning JavaScript right now';
phrase = phrase.split(' ');
console.log(phrase);

const arr1 = [5, 3, 8, 5, 3, 2, 1, 2];
const arr2 = [];

arr1.forEach((value, index) => {
    arr2[index] = value;
});
const arr_2 = arr2.filter((item, index) => {
    return arr2.indexOf(item) === index });
console.log(arr_2);

const users = [
    { id: 1, age: 17 },
    { id: 2, age: 18 },
    { id: 3, age: 19 },
    { id: 4, age: 21 },
    { id: 5, age: 17 },
    { id: 6, age: 20 },
    { id: 7, age: 25 },
  ];
  function findId(users) {
    users.forEach ((user,index) => {
    if (user.age > 18 && user.age < 21){
    console.log(user.id);
    }
    });
  }
findId(users);