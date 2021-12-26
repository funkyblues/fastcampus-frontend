// 기명 함수
// 함수 선언!
function hello() {
  console.log('Hello~');
}

// 익명 함수
// 함수 표현!
let world = function() {
  console.log('World~');
}

// 함수 호출!
hello(); // Hello~
world(); // World~


const changuk = {
  name: 'changuk',
  age: 85,
  getName: function () {
    return this.name;
  }
};

const hisName = changuk.getName();
console.log(hisName); // changuk
console.log(changuk.getName()); //changuk