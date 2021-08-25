"use strict";
const select = document.querySelector("select");
const para = document.querySelector("p");

const setWeather = () => {
  const choice = select.value;

  if (choice === "sunny") {
    para.textContent =
      "今日はとてもいい天気です。短いパンツをはいて、砂浜や公園に出かけ、アイスクリームを食べましょう！";
  } else if (choice === "rainy") {
    para.textContent =
      "雨が降っています。レインコートと傘を忘れないようにして、できる限り室内で過ごしましょう。";
  } else if (choice === "snowing") {
    para.textContent =
      "雪が降ってとても寒いです！室内でホットチョコレートを飲むか、雪だるまを作るのがよいでしょう。";
  } else if (choice === "overcast") {
    para.textContent =
      "雨は降っていませんが、空はとても暗くなっています。万が一に備えレインコートを持ちましょう。";
  } else {
    para.textContent = "今日はなにもありません";
  }
};

select.addEventListener("change", setWeather);
