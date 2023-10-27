const eggTypeButton1 = document.getElementById("eggType1");
const eggTypeButton2 = document.getElementById("eggType2");
const eggTypeButton3 = document.getElementById("eggType3");

const eggCategoryButton1 = document.getElementById("eggCategory1");
const eggCategoryButton2 = document.getElementById("eggCategory2");
const eggCategoryButton3 = document.getElementById("eggCategory3");
const eggCategoryButton4 = document.getElementById("eggCategory4");
const eggCategoryButton5 = document.getElementById("eggCategory5");

const switcherButton1 = document.getElementById("switch");

const timer = document.getElementById("timer");

const eggSvg = document.getElementById("eggpic");

let eggTypeIndex = 0;
let eggCategoryIndex = 0;
let placeIndex = 0;
let eggIndex = 0;

const eggSvgList = [
    "0.png",
    "1.png",
    "2.png",
];

const timerList = [
  [[["06:20"],["05:00"]],[["07:30"],["06:10"]],[["12:20"],["11:00"]],],
  [[["05:40"],["04:30"]],[["06:50"],["05:40"]],[["11:30"],["10:20"]],],
  [[["05:20"],["04:10"]],[["06:20"],["05:10"]],[["10:40"],["09:30"]],],
  [[["04:40"],["03:40"]],[["05:40"],["04:40"]],[["09:40"],["08:40"]],],
  [[["04:00"],["03:10"]],[["05:00"],["04:10"]],[["08:50"],["08:10"]],],
];

changeTimer(eggTypeIndex, eggCategoryIndex,  placeIndex);

eggTypeButton1.addEventListener("click", function () {
    eggTypeIndex = 0;
    changeTimer(eggCategoryIndex, eggTypeIndex, placeIndex);
    setActiveButton(eggTypeIndex);
    eggSvg.src = eggSvgList[eggTypeIndex];
});

eggTypeButton2.addEventListener("click", function () {
    eggTypeIndex = 1;
    changeTimer(eggCategoryIndex, eggTypeIndex, placeIndex);
    setActiveButton(eggTypeIndex);
    eggSvg.src = eggSvgList[eggTypeIndex];
});

eggTypeButton3.addEventListener("click", function () {
    eggTypeIndex = 2;
    changeTimer(eggCategoryIndex, eggTypeIndex, placeIndex);
    setActiveButton(eggTypeIndex);
    eggSvg.src = eggSvgList[eggTypeIndex];
});

eggCategoryButton1.addEventListener("click", function () {
    eggCategoryIndex = 0;
    setActiveCategoryButton(eggCategoryIndex);
    changeTimer(eggCategoryIndex, eggTypeIndex, placeIndex);
});

eggCategoryButton2.addEventListener("click", function () {
    eggCategoryIndex = 1;
    setActiveCategoryButton(eggCategoryIndex);
    changeTimer(eggCategoryIndex, eggTypeIndex, placeIndex);
});

eggCategoryButton3.addEventListener("click", function () {
    eggCategoryIndex = 2;
    setActiveCategoryButton(eggCategoryIndex);
    changeTimer(eggCategoryIndex, eggTypeIndex, placeIndex);
});

eggCategoryButton4.addEventListener("click", function () {
    eggCategoryIndex = 3;
    setActiveCategoryButton(eggCategoryIndex);
    changeTimer(eggCategoryIndex, eggTypeIndex, placeIndex);
});

eggCategoryButton5.addEventListener("click", function () {
    eggCategoryIndex = 4;
    setActiveCategoryButton(eggCategoryIndex);
    changeTimer(eggCategoryIndex, eggTypeIndex, placeIndex);
});

switcherButton1.addEventListener("click", function () {
    if (placeIndex == 0) {
        placeIndex += 1;
    } else {
        placeIndex -= 1;
    }
    changeTimer(eggCategoryIndex, eggTypeIndex, placeIndex);
});

function changeTimer(eggCategoryIndex, eggTypeIndex, eggPlaceIndex) {
  timer.textContent = timerList[eggCategoryIndex][eggTypeIndex][eggPlaceIndex];
}

function setActiveButton(buttonIndex) {
  if (buttonIndex == 0) {
    eggTypeButton1.className = "eggTypeButton-active";
    eggTypeButton2.className = "eggTypeButton";
    eggTypeButton3.className = "eggTypeButton";
  }
  if (buttonIndex == 1) {
    eggTypeButton1.className = "eggTypeButton";
    eggTypeButton2.className = "eggTypeButton-active";
    eggTypeButton3.className = "eggTypeButton";
  }
  if (buttonIndex == 2) {
    eggTypeButton1.className = "eggTypeButton";
    eggTypeButton2.className = "eggTypeButton";
    eggTypeButton3.className = "eggTypeButton-active";
  }
}

function setActiveCategoryButton(buttonIndex) {
  if (buttonIndex == 0) {
    eggCategoryButton1.className = "eggCategoryButton CB active";
    eggCategoryButton2.className = "eggCategoryButton C0";
    eggCategoryButton3.className = "eggCategoryButton C1";
    eggCategoryButton4.className = "eggCategoryButton C2";
    eggCategoryButton5.className = "eggCategoryButton C3";
  }
  if (buttonIndex == 1) {
    eggCategoryButton1.className = "eggCategoryButton CB";
    eggCategoryButton2.className = "eggCategoryButton C0 active";
    eggCategoryButton3.className = "eggCategoryButton C1";
    eggCategoryButton4.className = "eggCategoryButton C2";
    eggCategoryButton5.className = "eggCategoryButton C3";
  }
  if (buttonIndex == 2) {
    eggCategoryButton1.className = "eggCategoryButton CB";
    eggCategoryButton2.className = "eggCategoryButton C0";
    eggCategoryButton3.className = "eggCategoryButton C1 active";
    eggCategoryButton4.className = "eggCategoryButton C2";
    eggCategoryButton5.className = "eggCategoryButton C3";
  }
  if (buttonIndex == 3) {
    eggCategoryButton1.className = "eggCategoryButton CB";
    eggCategoryButton2.className = "eggCategoryButton C0";
    eggCategoryButton3.className = "eggCategoryButton C1";
    eggCategoryButton4.className = "eggCategoryButton C2 active";
    eggCategoryButton5.className = "eggCategoryButton C3";
  }
  if (buttonIndex == 4) {
    eggCategoryButton1.className = "eggCategoryButton CB";
    eggCategoryButton2.className = "eggCategoryButton C0";
    eggCategoryButton3.className = "eggCategoryButton C1";
    eggCategoryButton4.className = "eggCategoryButton C2";
    eggCategoryButton5.className = "eggCategoryButton C3 active";
  }
}