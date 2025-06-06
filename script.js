const data = {
  2015: {
    ecf: "騎士 4-0 老鷹 - MVP: LeBron James",
    finals: "勇士 4-2 騎士 - FMVP: Andre Iguodala",
    starters: ["LeBron James", "Kyrie Irving", "Kevin Love", "Tristan Thompson", "JR Smith"],
    image: "https://example.com/2015.jpg"
  },
  2016: {
    ecf: "騎士 4-2 暴龍 - MVP: LeBron James",
    finals: "騎士 4-3 勇士 - FMVP: LeBron James",
    starters: ["LeBron James", "Kyrie Irving", "Kevin Love", "Tristan Thompson", "JR Smith"],
    image: "https://example.com/2016.jpg"
  },
  // ... 加上其他年份
};

function showData() {
  const year = document.getElementById("yearSelect").value;
  const result = document.getElementById("result");

  if (data[year]) {
    result.innerHTML = `
      <h2>${year} 年</h2>
      <p><strong>東區冠軍賽：</strong> ${data[year].ecf}</p>
      <p><strong>總冠軍賽：</strong> ${data[year].finals}</p>
      <p><strong>先發五人：</strong> ${data[year].starters.join(', ')}</p>
      <img src="${data[year].image}" alt="${year} 照片" style="max-width: 100%; height: auto;">
    `;
  } else {
    result.innerHTML = "<p>尚無資料</p>";
  }
}