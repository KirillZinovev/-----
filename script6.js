function ZI() {  // Функция для заполнения выпадающего списка с годами
  try {
  for (let i = 1923; i < 2026; i++) {    // Цикл для перебора годов с 1923 по 2025
    let option = document.createElement("option"); // Создание нового элемента option
    option.value = i;   // Установка значения option равным текущему году
    document.getElementById("yea").appendChild(option);    // Добавление option в элемент с id "yea"
  }
  }catch (err) {
    alert(404);
    console.log(err);
  }
}
function ssilka(key, i) {  // Функция для открытия ссылки в новой вкладке
  window.open("https://www.calend.ru/holidays/" + key + "-" + i + "/");   // Открытие новой вкладки с URL, состоящим из значения key и i
}
function GO() { // Функция для заполнения календаря
  try {
  let yea = document.getElementById("go").value; // Получение выбранного года
  let mont = document.getElementById("monts").value; // Получение выбранного месяца
  let co = mont + " 1, " + yea + " 10:10:10"; // Создание строки с датой и временем
  let date = new Date(String(co)); // Создание объекта Date с указанной датой и временем
  let weekday = date.getDay(); // Получение номера дня недели
  let key; //Переменная для хранения ключа месяца
  switch (mont) {    // Определение ключа месяца
    case "January":
      key = 1;
      break;
    case "February":
      key = 2;
      break;
    case "March":
      key = 3;
      break;
    case "April":
      key = 4;
      break;
    case "May":
      key = 5;
      break;
    case "June":
      key = 6;
      break;
    case "July":
      key = 7;
      break;
    case "August":
      key = 8;
      break;
    case "September":
      key = 9;
      break;
    case "October":
      key = 10;
      break;
    case "November":
      key = 11;
      break;
    case "December":
      key = 12;
      break;
    default:
      break;
  }
  for (let i = 1; i < 43; i++) { // Очистка содержимого ячеек календаря
    document.getElementById("t" + i).replaceChildren();
  }
  if (weekday === 0) {  // Заполнение календаря
    document
      .getElementById("t7")
      .insertAdjacentHTML(
        "beforeend",
        '<p onclick="ssilka(' + key + "," + 1 + ')">' + 1 + "</p>"
      );
  } else {
    document
      .getElementById("t" + weekday)
      .insertAdjacentHTML(
        "beforeend",
        '<p onclick="ssilka(' + key + "," + 1 + ')">' + 1 + "</p>"
      );
  }
  if (mont === "April" || "June" || "September" || "November") {
    let mes = 31;
    for (let i = 2; i < mes; i++) {
      if (weekday === 0) {
        let u = i + 6;
        document
          .getElementById("t" + u)
          .insertAdjacentHTML(
            "beforeend",
            '<p onclick="ssilka(' + key + "," + i + ')">' + i + "</p>"
          );
      } else {
        let u = i + weekday - 1;
        document
          .getElementById("t" + u)
          .insertAdjacentHTML(
            "beforeend",
            '<p onclick="ssilka(' + key + "," + i + ')">' + i + "</p>"
          );
      }
    }
  } else if (mont === "February") {
    let mes1 = 29;
    for (let i = 2; i < mes1; i++) {
      if (weekday === 0) {
        let u = i + 6;
        document
          .getElementById("t" + u)
          .insertAdjacentHTML(
            "beforeend",
            '<p onclick="ssilka(' + key + "," + i + ')">' + i + "</p>"
          );
      } else {
        let u = i + weekday - 1;
        document
          .getElementById("t" + u)
          .insertAdjacentHTML(
            "beforeend",
            '<p onclick="ssilka(' + key + "," + i + ')">' + i + "</p>"
          );
      }
    }
  } else {
    let mes2 = 32;
    for (let i = 2; i < mes2; i++) {
      if (weekday === 0) {
        let u = i + 6;
        document
          .getElementById("t" + u)
          .insertAdjacentHTML(
            "beforeend",
            '<p onclick="ssilka(' + key + "," + i + ')">' + i + "</p>"
          );
      } else {
        let u = i + weekday - 1;
        document
          .getElementById("t" + u)
          .insertAdjacentHTML(
            "beforeend",
            '<p onclick="ssilka(' + key + "," + i + ')">' + i + "</p>"
          );
      }
    }
  }
}catch (err) {
    alert(404);
    console.log(err);
  }
}
async function ZIZI() { // Функция для заполнения выпадающего списка с кодами стран
  try {
    const resp = await fetch(`https://date.nager.at/api/v3/AvailableCountries`);
    const years = await resp.json();
    ZIZIin(years);
  } catch (err) {
    alert(err);
    console.log(err);
  }
}
function ZIZIin(asus) { // Функция для добавления кодов стран в выпадающий список
  try {
    for (let i = 0; i < asus.length; i++) {
      let sony = asus[i].countryCode;
      document
        .getElementById("count")
        .insertAdjacentHTML(
          "beforeend",
          "<option value = " + sony + "><option/>"
        );
    }
  } catch (err) {
    alert(err);
    console.log(err);
  }
}
async function ziData() { // Функция для получения данных о праздниках
  try {
    const god = document.getElementById("go").value;
    const strana_cod = document.getElementById("strana").value;
    const response = await fetch(
      `https://date.nager.at/api/v3/PublicHolidays/${god}/${strana_cod}`
    );
    const holidays = await response.json();
    getZI(holidays);
  } catch (err) {
    alert(404);
    console.log(err);
  }
}
function getZI(hp) { // Функция для отображения данных о праздниках
  try {
    const month = document.getElementById("monts").value;
    let key;
    switch (month) {
      case "January":
        key = "-01-";
        break;
      case "February":
        key = "-02-";
        break;
      case "March":
        key = "-03-";
        break;
      case "April":
        key = "-04-";
        break;
      case "May":
        key = "-05-";
        break;
      case "June":
        key = "-06-";
        break;
      case "July":
        key = "-07-";
        break;
      case "August":
        key = "-08-";
        break;
      case "September":
        key = "-09-";
        break;
      case "October":
        key = "-10-";
        break;
      case "November":
        key = "-11-";
        break;
      case "December":
        key = "-12-";
        break;
      default:
        break;
    }
    document.querySelectorAll(".g").forEach((del) => {
      del.remove();
    });
    let array = [];
    for (let i = 0; i < hp.length; i++) {
      if (hp[i].date.indexOf(key) !== -1) {
        array.push([hp[i].date, hp[i].localName, hp[i].name]);
        document
          .getElementById("ma")
          .insertAdjacentHTML(
            "beforeend",
            '<div class="card g" style="width: 18rem;"><div class="card-body"><p class="card-text">' +
              "Дата празднования: <br> " +
              hp[i].date +
              " <br>Местное название: <br> " +
              hp[i].localName +
              " <br>Название на английском: <br> " +
              hp[i].name +
              '</p> <button class="btn btn-light" onclick="urlishe(\'' +
              hp[i].name +
              "')\" >Подробнее!</button></div></div> </br>"
          );
      }
    }
    console.log(array);
    huk(array);
  } catch (err) {
    alert(err);
    console.log(err);
  }
}
function urlishe(name) {
  window.open("https://en.wikipedia.org/wiki/" + name);
}
function huk(arr) {
  if (arr.length === 0) {
    document
      .getElementById("ma")
      .insertAdjacentHTML(
        "beforeend",
        '<div class="card g" style="width: 20rem;"><div class="card-body"><p class="card-text">------ПРАЗДНИКОВ НЕТ------</p> </div></div> </br>'
      );
  }
}

