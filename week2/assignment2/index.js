let INIT_BALANCE = 0;
const HISTORY_LIST = [
  {
    id: 1,
    category: "식비",
    space: "공차 건대로데오점",
    amount: "6000",
    InOrExpense: "expense",
  },
  {
    id: 2,
    category: "셍활",
    space: "CJ 올리브영",
    amount: "37000",
    InOrExpense: "expense",
  },
  {
    id: 3,
    category: "월급",
    space: "(주)에스케이씨컴퍼니",
    amount: "500000",
    InOrExpense: "income",
  },
  {
    id: 4,
    category: "기타",
    space: "카카오뱅크 캐시백지급",
    amount: "3000",
    InOrExpense: "income",
  },
];

const initBalance = document.querySelector(".init_balance");
const incomeAmount = document.querySelector(".income_amount");
const expenseAmount = document.querySelector(".expense_amount");

function initRendering(LIST) {
  calcMyAccount(HISTORY_LIST);
  ListRendering(HISTORY_LIST);
}

document.addEventListener("DOMContentLoaded", () => {
  initRendering(HISTORY_LIST);
});
// 나의 자산 구하기
function calcMyAccount(LIST) {
  let initIncome = 0,
    initExpense = 0;

  LIST.forEach((elm) => {
    switch (elm.InOrExpense) {
      case "income": {
        initIncome += Number(elm.amount);
        break;
      }
      case "expense": {
        initExpense += Number(elm.amount);
        break;
      }
    }
  });

  INIT_BALANCE = initIncome - initExpense;
  initBalance.innerText = INIT_BALANCE;
  incomeAmount.innerText = initIncome;
  expenseAmount.innerText = initExpense;
}

// 수입/지출 내역 element 생성
function ListRendering(LIST) {
  const list = document.querySelector(".budget_list>ul");

  LIST.forEach((elm) => {
    const li = document.createElement("li");

    const category = document.createElement("span");
    category.classList.add("categorize");
    category.innerText = elm.category;

    const space = document.createElement("span");
    space.classList.add("space");
    space.innerText = elm.space;

    const amount = document.createElement("span");
    amount.classList.add("amount");
    switch (elm.InOrExpense) {
      case "income": {
        li.classList.add("income_elm");
        amount.classList.add("add");
        amount.innerText = `+${elm.amount}`;
        break;
      }
      case "expense": {
        li.classList.add("expense_elm");
        amount.classList.add("sub");
        amount.innerText = `-${elm.amount}`;
        break;
      }
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete_btn");
    deleteBtn.innerText = "X";

    li.append(category, space, amount, deleteBtn);
    list.append(li);
  });
}

//수입/지출 필터링
function inOutFiltering(LIST) {
  let curList = document.querySelector(".budget_list>ul");
  curList.innerHTML = "";

  let newList = [];
  if (incomeCheckBox.checked) {
    LIST.forEach((elm) => {
      if (elm.InOrExpense === "income") {
        newList.push(elm);
      }
    });
  }
  if (expenseCheckBox.checked) {
    if (expenseCheckBox.checked) {
      LIST.forEach((elm) => {
        if (elm.InOrExpense === "expense") {
          newList.push(elm);
        }
      });
    }
  }
  return newList;
}

//checkbox 이벤트 감지
const incomeCheckBox = document.getElementById("income_check");
const expenseCheckBox = document.getElementById("expense_check");

incomeCheckBox.addEventListener("change", () => {
  const newList = inOutFiltering(HISTORY_LIST);
  console.log(newList);
  ListRendering(newList);
});
expenseCheckBox.addEventListener("change", () => {
  const newList = inOutFiltering(HISTORY_LIST);
  ListRendering(newList);
});
