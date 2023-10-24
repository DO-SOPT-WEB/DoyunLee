const mango = document.createElement("li");
mango.innerText = "mango";
/* mango 안에 text를 추가하는 방법(2)
const mangoText = document.createTextNode("mango");
mango.appendChild(mangoText);
*/
//결과 : <li>mango</li>

const fruitList = document.querySelector("ul");
fruitList.appendChild(mango);

// red class를 가진 객체 삭제
const redFruit = document.querySelectorAll(".red");
redFruit.forEach((fruit) => {
  fruit.remove();
});

//세번째 과일 blue로 만들기
const thirdFruit = document.querySelector("li:nth-child(3)");
thirdFruit.classList.add("blue");

//버튼을 누르면 개수 알려주기
const lengthButton = document.querySelector("button.count");
function showLength() {
  const allList = document.querySelectorAll("li");
  alert(`과일 개수는 ${allList.length}개 입니다.`);
}
lengthButton.addEventListener("click", showLength);
