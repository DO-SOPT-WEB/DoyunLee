let INIT_BALANCE = 0;
let HISTORY_LIST = [
  {
    id: 1,
    category: "월급",
    space: "(주)에스케이씨컴퍼니",
    amount: "500000",
    InOrExpense: "income",
  },
  {
    id: 2,
    category: "식비",
    space: "공차 건대로데오점",
    amount: "6000",
    InOrExpense: "expense",
  },
  {
    id: 3,
    category: "셍활",
    space: "CJ 올리브영",
    amount: "37000",
    InOrExpense: "expense",
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

//초기 렌더링
function screenRendering(LIST) {
  calcMyAccount(LIST);
  ListRendering(LIST);
}
screenRendering(HISTORY_LIST);

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
  list.innerHTML = "";
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
    deleteBtn.id = elm.id;
    deleteBtn.onclick = () => {
      detectDelete(deleteBtn.id, LIST);
    };
    deleteBtn.innerText = "X";

    li.append(category, space, amount, deleteBtn);
    list.append(li);
  });
}

//수입/지출 필터링
function inOutFiltering(LIST) {
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
  return newList.sort((a, b) => a.id - b.id);
}

//checkbox 이벤트 감지
const incomeCheckBox = document.getElementById("income_check");
const expenseCheckBox = document.getElementById("expense_check");

incomeCheckBox.addEventListener("change", () => {
  const newList = inOutFiltering(HISTORY_LIST);
  ListRendering(newList);
});
expenseCheckBox.addEventListener("change", () => {
  const newList = inOutFiltering(HISTORY_LIST);
  ListRendering(newList);
});

//삭제 버튼 이벤트
function deleteListElement(delID, LIST) {
  LIST.forEach((elm, idx) => {
    if (elm.id === Number(delID)) {
      LIST.splice(idx, 1);
    }
  });
  screenRendering(LIST);
}

//삭제 모달
function detectDelete(delID, LIST) {
  const deleteModalWrapper = document.querySelector(".delete_modal_wrapper");
  const deleteModal = document.querySelector(".delete_modal");
  deleteModalWrapper.classList.remove("hidden");
  deleteModal.classList.remove("hidden");

  const deleteYes = document.querySelector(".yes_delete");
  const deleteNo = document.querySelector(".no_delete");

  deleteYes.addEventListener("click", () => {
    deleteModalWrapper.classList.add("hidden");
    deleteModal.classList.add("hidden");
    deleteListElement(delID, LIST);
  });

  deleteNo.addEventListener("click", () => {
    deleteModalWrapper.classList.add("hidden");
    deleteModal.classList.add("hidden");
  });
}
