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

// 나의 자산 구하기 (총 합계, 수입, 지출)
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

// 수입/지출 리스트 element 생성
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

//삭제 버튼 클릭 -> 리스트 삭제
function deleteListElement(delID, LIST) {
  LIST.forEach((elm, idx) => {
    if (elm.id === Number(delID)) {
      LIST.splice(idx, 1);
    }
  });
  screenRendering(LIST);
}

//삭제 확인 모달 보이기
function detectDelete(delID, LIST) {
  const deleteModalWrapper = document.querySelector(".modal_background");
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

//리스트 추가 모달 카테고리 생성
function createSelectOption(LIST, inOrOut) {
  const selectSection = document.querySelector(".select_section>select");
  selectSection.innerHTML = "";
  LIST.forEach((elm) => {
    if (inOrOut === elm.InOrExpense) {
      const option = document.createElement("option");
      option.innerText = elm.category;
      selectSection.appendChild(option);
    }
  });
}

//리스트 추가 모달창 띄우기
const listAddBtn = document.querySelector(".add_btn");
const addModalSection = document.querySelector(".add_modal_section");
const modalContent = document.querySelector(".add_modal_content");
listAddBtn.addEventListener("click", () => {
  addModalSection.classList.remove("hidden");
  modalContent.classList.add("modal_animation");
});

//수입 / 지출 카테고리 분류
const addIncomeBtn = document.getElementById("new_income");
const addExpenseBtn = document.getElementById("new_expense");
createSelectOption(HISTORY_LIST, "income");

addIncomeBtn.addEventListener("change", btnToggle);
addExpenseBtn.addEventListener("change", btnToggle);

function btnToggle() {
  addIncomeBtn.toggleAttribute("checked");
  addExpenseBtn.toggleAttribute("checked");
  if (addIncomeBtn.checked) {
    createSelectOption(HISTORY_LIST, "income");
  } else {
    createSelectOption(HISTORY_LIST, "expense");
  }
}

//유효성 검사 - 금액란에 숫자만 입력하도록 검사
const newAmount = document.querySelector(".amount_section>input ");
newAmount.addEventListener("change", (e) => {
  if (isNaN(e.target.value)) {
    alert("숫자를 입력하세요");
    e.target.value = "";
  }
});

const submitBtn = document.querySelector(".submit_btn");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  submitForm();
});

//저장하기 버튼 클릭 시 새 항목 추가 후 원본 리스트에 반영
const newForm = document.querySelector("form");
function submitForm() {
  const newInExList = newForm.querySelectorAll(".in_ex_btns>input");
  const newCategory = newForm.querySelector(".select_category>option");
  const newAmount = newForm.querySelector(".amount_section>input");
  const newContent = newForm.querySelector(".content_section>input");

  //유효성 검사 2 - 모든 폼 입력했는지 검사
  if (!newAmount.value || !newContent.value) {
    alert("모든 항목을 입력하세요!");
  }
  let inExID = "";
  newInExList.forEach((elm) => {
    if (elm.checked) {
      inExID = elm.id;
    }
  });

  let inExState = "";
  if (inExID === "new_income") {
    inExState = "income";
  }
  if (inExID === "new_expense") {
    inExState = "expense";
  }

  const newListElm = [
    {
      id: HISTORY_LIST.length + 1,
      category: newCategory.value,
      space: newContent.value,
      amount: newAmount.value,
      InOrExpense: inExState,
    },
  ];

  HISTORY_LIST.push(newListElm[0]);
  initForm();
  screenRendering(HISTORY_LIST);
}

//리스트 추가 후 확인 및 form 비우기
function initForm() {
  alert("저장되었습니다!");
  newForm.reset();
}

//리스트 추가 모달창 닫기
const closeBtn = document.querySelector(".close_modal_btn");
closeBtn.addEventListener("click", () => {
  addModalSection.classList.add("hidden");
  modalContent.classList.remove("modal_animation");
});

//초기 렌더링 함수 실행
screenRendering(HISTORY_LIST);
