let a = 5,
    b = a;

b = b + 5; 

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

// const copy = obj; //ссылка на объект
// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy [key] = mainObj [key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNubers = copy(numbers);

newNubers.a = 10;
newNubers.c.x = 10; // поверхностная копия

console.log(newNubers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add));

const clone = (Object.assign({}, add));
clone.d = 20;

console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'jdnjnoinm';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'fb'];

console.log(internet);

function log (a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ["a", "b"];
const newAarray = [...array];

console.log(newAarray);

const q = {
    one: 1,
    two: 2
};

const newOObj = {...q};

console.log(newOObj);