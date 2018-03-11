'use strict';
/*
// es6 기능 : 블록 스코프 변수 선언
const sentences = [
    { subject: 'JavaScript', verb: 'is', object: 'great' },
    { subject: 'Elephants', verb: 'are', object: 'large' },
];
// es6 기능 : 객체 분해
function say({ subject, verb, object}) {
    // es6 기능 : 템플릿 문자열
    // 아래 사용한 것은 따옴표가 아니라 백틱 (`), 즉
    // 키보드의 탭 키 바로위 문자.
    console.log(`${subject} ${verb} ${object}`);
}
    // es6 기능 : for..of
for(let s of sentences) {
    say(s);
}
console.log("Line1\nLine2\n======")
console.log("De Morgan's law: \u2310(P \u22c0Q) \u21D4 (\u2310P) \u22c1 (\u2310Q)");
*/
/* 템플릿 문자열
let currentTemp = 19.5;
const message = `The current temperature is ${currentTemp}\u00b0C`;
console.log(message);
*/
/* 프로퍼티 접근 연산자
const obj = {};
obj.color = "yellow";
obj["not an identifier"] = 3;
console.log(`이것은 obj["not an identifier"]입니다. : ${obj["not an identifier"]}`);   // 3
console.log(`이것은 obj["color"]입니다. : ${obj["color"]}`);   // "yellow" (문자열임. 따옴표 빼고)

const SIZE = Symbol();
obj[SIZE] = 8;
obj.SIZE = 0;
console.log(`이것은 obj.["SIZE"]입니다. : ${obj["SIZE"]}`);   //0
console.log(`이것은 obj[SIZE]입니다. : ${obj[SIZE]}`);    // 8
console.log(obj);
*/
/*
const sam1 = {
    name: 'Sam' ,
    age: 4 ,
}
const sam2 = { name: 'Sam', age: 4 };
const sam3 = {
    name: 'Sam' ,
    classification: {
        kingdom: 'Anamalia' , 
        phylum: 'Chordata' ,
        class: 'Mamalia' , 
        order: 'Carnivoria',
        family: 'Felidae' ,
        subfamily: 'Felinae',
        genus: 'Felis',
        species: 'catus',
    },
}
sam3.speak = function(){console.log("Meow!")};

console.log(sam3.classification["family"]);     // Felidae
sam3['speak']();        // Meow!

delete sam3.classification;
delete sam3.speak;
if (sam3.classification === null){
    console.log("너가 옳아!");
}
if (sam3.classification === undefined){
    console.log("Undefined!");
}else{
    console.log("메롱!");
}
*/
/*
// 배열에 새 값을 할당할 때, 배열 크기 그 이상의 인덱스를 사용하면
// 배열 크기가 그에 맞게 늘어남.
const arr = [1,2,3];
console.log(arr.length);
arr[6] = 5;
console.log(`${arr.length} \n배열 : ${arr}`);
*/