// let boxEl = document.querySelector('.box');

// console.log(boxEl);

// // HTML 요소(Element) 1개 검색/찾기
// const boxEl = document.querySelector('.box');

// // HTML 요소에 적용할 수 있는 메소드!
// boxEl.addEventListener();

// // 인수(Arguments)를 추가 가능!
// boxEl.addEventListener(1, 2);

// // 1 - 이벤트(Event, 상황)
// boxEl.addEventListener('click', 2);

// // 2- 핸들러(Handler, 실행할 함수)
// boxEl.addEventListener('click', function() {
//   console.log("Click~");
// })

// boxEl.addEventListener("click", function () {
//   console.log("Click~~");
//   boxEl.classList.add("active");
//   console.log(boxEl.classList.contains('active'));
//   boxEl.classList.remove("active");
//   console.log(boxEl.classList.contains('active'));
// });


// const boxEls = document.querySelectorAll('.box');

// boxEls.forEach(function (boxEl, index) {
//   boxEl.classList.add(`order-${index + 1}`);
//   console.log(index, boxEl);
// }
// );

const boxEl = document.querySelector('.box');

console.log(boxEl.textContent);

boxEl.textContent = "changuk~!";
console.log(boxEl.textContent);