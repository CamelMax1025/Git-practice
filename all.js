let data = [
  {
    charge: "免費",
    name: "駱榮權充電站",
  },
  {
    charge: "投幣式",
    name: "小名充電站",
  },
  {
    charge: "免費",
    name: "小花充電站",
  },
  {
    charge: "投幣式",
    name: "不知名充電站",
  },
  {
    charge: "免費",
    name: "我新增的充電站",
  },
];

// 預設函式
const list = document.querySelector(".list");

function init() {
  let str = "";
  data.forEach(function (item, index) {
    let content = `<li>${item.name},${item.charge}</li>`;
    str += content;
  });
  list.innerHTML = str;
}
init();
// 篩選器
const stationFilter = document.querySelector(".filter");
stationFilter.addEventListener("click", function (e) {
  if (e.target.value == undefined) {
    return;
  }
  let str = "";
  data.forEach(function (item, index) {
    if (e.target.value == "全部") {
      str += `<li>${item.name},${item.charge}</li>`;
    } else if (e.target.value == item.charge) {
      str += `<li>${item.name},${item.charge}</li>`;
    }
  });
  list.innerHTML = str;
});
// 新增邏輯

const stationName = document.querySelector(".stationName");
const stationCharge = document.querySelector(".stationCharge");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function (e) {
  let obj = {};
  obj.charge = `${stationCharge.value}`;
  obj.name = `${stationName.value}`;
  data.push(obj);
  init();
  stationCharge.value = "免費";
  stationName.value = "";
});
