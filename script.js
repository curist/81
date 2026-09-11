// --- Drop-in replacement: script.js ---

const fortuneData = {
  1: { score: 10, text: "繁榮發達，信用得固，萬人仰望，可獲成功。" },
  2: { score: 2, text: "動搖不安，一榮一枯，一盛一衰，勞而無功。" },
  3: { score: 10, text: "立身出世，有貴人助，天賜吉祥，四海名揚。" },
  4: { score: 2, text: "日被雲遮，苦難折磨，非有毅力，難望成功。" },
  5: { score: 10, text: "陰陽和合，精神愉快，榮譽達利，一門興隆。" },
  6: { score: 9, text: "萬寶集門，天降幸運，立志奮發，得成大功。" },
  7: { score: 9, text: "精力旺盛，頭腦明敏，排除萬難，必獲成功。" },
  8: { score: 9, text: "努力發達，貫徹志望，不忘進退，可期成功。" },
  9: { score: 0, text: "雖抱奇才，有才無命，獨營無力，財利難望。" },
  10: { score: 0, text: "烏雲遮月，暗淡無光，空費心力，徒勞無功。" },
  11: { score: 9, text: "草木逢春，枝葉沾露，穩建著實，必得人望。" },
  12: { score: 0, text: "薄弱無力，孤立無援，外祥內苦，謀事難成。" },
  13: { score: 9, text: "天賦吉運，能得人望，善用智慧，必獲成功。" },
  14: { score: 2, text: "忍得苦難，必有後福，是成是敗，惟靠堅毅。" },
  15: { score: 10, text: "謙恭做事，外得人和，大事成就，一門興隆。" },
  16: { score: 10, text: "能獲眾望，成就大業，名利雙收，盟主四方。" },
  17: { score: 9, text: "排除萬難，有貴人助，把握時機，可得成功。" },
  18: { score: 9, text: "經商做事，順利昌隆，如能慎始，百事亨通。" },
  19: { score: 1, text: "成功雖早，慎防虧空，內外不和，障礙重重。" },
  20: { score: 0, text: "智高志大，歷盡艱難，焦心憂勞，進退兩難。" },
  21: { score: 9, text: "先歷困苦，後得幸福，霜雪梅花，春來怒放。" },
  22: { score: 1, text: "秋草逢霜，懷才不遇，憂愁怨苦，事不如意。" },
  23: { score: 10, text: "旭日昇天，名顯四方，漸次進展，終成大業。" },
  24: { score: 10, text: "錦繡前程，須靠自力，多用智謀，能奏大功。" },
  25: { score: 9, text: "天時地利，只久人和，講信修睦，即可成功。" },
  26: { score: 2, text: "波瀾起伏，千變萬化，凌駕萬難，必可成功。" },
  27: { score: 6, text: "一成一敗，一盛一衰，惟靠謹慎，可守成功。" },
  28: { score: 0, text: "魚臨旱地，難逃惡運，此數大凶，不如更名。" },
  29: { score: 10, text: "如龍得雲，青雲直上，智謀奮進，才略奏功。" },
  30: { score: 6, text: "吉凶參半，得失相伴，投機取巧，如賭一樣。" },
  31: { score: 10, text: "此數大吉，名利雙收，漸進向上，大業成就。" },
  32: { score: 10, text: "池中之龍，風雲際會，一躍上天，成功可望。" },
  33: { score: 8, text: "意氣用事，人和必失，如能慎始，必可昌隆。" },
  34: { score: 0, text: "災難不絕，難望成功，此數大凶，不如更名。" },
  35: { score: 9, text: "處事嚴謹，進退保守，學智兼具，成就非凡。" },
  36: { score: 1, text: "波瀾重疊，常陷窮困，動不如靜，有才無命。" },
  37: { score: 9, text: "逢凶化吉，吉人天相，以德取眾，必成大功。" },
  38: { score: 3, text: "名雖可得，利則難獲，藝界發展，可望成功。" },
  39: { score: 8, text: "雲開見月，雖有勞碌，光明坦途，指日可期。" },
  40: { score: 6, text: "一盛一衰，浮沉不定，知難而退，自獲天佑。" },
  41: { score: 10, text: "天賦吉運，德望兼備，繼續努力，前途無限。" },
  42: { score: 6, text: "事業不專，十九不成，專心進取，可望成功。" },
  43: { score: 6, text: "兩夜之花，外祥內苦，忍耐自重，轉凶為吉。" },
  44: { score: 2, text: "雖用心計，事難遂願，貪功好進，必招失敗。" },
  45: { score: 9, text: "楊柳遇春，綠葉發枝，沖破難關，一舉成名。" },
  46: { score: 2, text: "坎坷不平，艱難重重，若無耐心，難望有成。" },
  47: { score: 8, text: "有貴人助，可成大業，雖遇不幸，浮沉不大。" },
  48: { score: 10, text: "美花豐實，鶴立雞群，名利俱全，繁榮富貴。" },
  49: { score: 2, text: "遇吉則吉，遇凶則凶，惟靠謹慎，逢凶化吉。" },
  50: { score: 6, text: "吉凶互見，一成一敗，凶中有吉，吉中有凶。" },
  51: { score: 6, text: "一盛一衰，浮沉不常，自重自處，可保平安。" },
  52: { score: 8, text: "草木逢春，雨過天晴，渡過難關，即獲成功。" },
  53: { score: 6, text: "盛衰參半，外祥內苦，先吉後凶，先凶後吉。" },
  54: { score: 0, text: "雖傾全力，難望成功，此數大凶，最好改名。" },
  55: { score: 6, text: "外觀隆昌，內隱禍患，克服難關，開出泰運。" },
  56: { score: 1, text: "事與願違，終難成功，欲速不達，有始無終。" },
  57: { score: 3, text: "雖有困難，時來運轉，曠野枯草，春來花開。" },
  58: { score: 3, text: "半凶半吉，浮沉多端，始凶終吉，能保成功。" },
  59: { score: 2, text: "遇事猶疑，難望成事，大刀闊斧，始可有成。" },
  60: { score: 0, text: "黑暗無光，心迷意亂，出爾反爾，難定方針。" },
  61: { score: 6, text: "雲遮半月，內隱風波，應自謹慎，始保平安。" },
  62: { score: 0, text: "煩悶懊惱，事業難展，自防災禍，始免困境。" },
  63: { score: 9, text: "萬物化育，繁榮之象，專心一意，必能成功。" },
  64: { score: 0, text: "見異思遷，十九不成，徒勞無功，不如更名。" },
  65: { score: 9, text: "吉運自來，能亨盛名，把握機會，必獲成功。" },
  66: { score: 0, text: "黑夜漫長，進退維谷，內外不和，信用缺乏。" },
  67: { score: 10, text: "獨營事業，事事如意，功成名就，富貴自來。" },
  68: { score: 9, text: "思慮週祥，計劃力行，不失先機，可望成功。" },
  69: { score: 0, text: "動搖不安，常陷逆境，不得時運，難得利潤。" },
  70: { score: 0, text: "慘淡經營，難免貧困，此數不吉，最好改名。" },
  71: { score: 6, text: "吉凶參半，惟賴勇氣，貫徹力行，始可成功。" },
  72: { score: 0, text: "利害混集，凶多吉少，得而復失，難以安順。" },
  73: { score: 9, text: "安樂自來，自然吉祥，力行不懈，必能成功。" },
  74: { score: 0, text: "利不及費，坐食山空，如無智謀，難望成功。" },
  75: { score: 6, text: "吉中帶凶，欲速不達，進不好守，可保安祥。" },
  76: { score: 0, text: "此數大凶，破產之象，宜速改名，以避厄運。" },
  77: { score: 6, text: "先苦後甘，先甘後苦，如能守成，不致失敗。" },
  78: { score: 6, text: "有得有失，華而不實，須防劫財，始保安順。" },
  79: { score: 0, text: "如走夜路，前途無光，希望不大，勞而無功。" },
  80: { score: 6, text: "得而復失，枉費心機，守成無貧，可保安穩。" },
  81: { score: 10, text: "最極之數，還本歸元，能得繁榮，發達成功。" },
};

const map81 = (number) => {
  number %= 81;
  return number || 81;
};

const map80 = (number) => {
  number %= 80;
  return number || 80;
};

// Digit sum -> map into 1..81 domain so fortuneData always exists.
const sumDigits = (number) =>
  String(Math.abs(number))
    .split("")
    .reduce((a, ch) => a + (ch >= "0" && ch <= "9" ? ch.charCodeAt(0) - 48 : 0), 0);

const mapDigits = (number) => map81(sumDigits(number));

const $w81 = document.getElementById("weight81");
const $w80 = document.getElementById("weight80");
const $wdigit = document.getElementById("weightDigits");
const $onlyGood = document.getElementById("onlyGood"); // requires checkbox in HTML

const GOOD_THRESHOLD = 9.0;

// Cache to keep "good mode" scanning snappy
const _fortuneCache = new Map();
function queryFortuneScore(number) {
  const key = `${number}|${$w81.value}|${$w80.value}|${$wdigit.value}`;
  if (_fortuneCache.has(key)) return _fortuneCache.get(key);

  const weight81 = parseFloat($w81.value) || 0;
  const weight80 = parseFloat($w80.value) || 0;
  const weightDigits = parseFloat($wdigit.value) || 0;

  const wsum = weight81 + weight80 + weightDigits;
  if (wsum <= 0) {
    const r = { score: 0, data: [] };
    _fortuneCache.set(key, r);
    return r;
  }

  const i81 = map81(number);
  const i80 = map80(number);
  const idg = mapDigits(number);

  const d81 = fortuneData[i81];
  const d80 = fortuneData[i80];
  const ddg = fortuneData[idg];

  let score = 0;
  score += d81.score * weight81;
  score += d80.score * weight80;
  score += ddg.score * weightDigits;
  score /= wsum;

  const data = [];
  if (weight81 > 0) data.push({ idx: i81, ...d81 });
  if (weight80 > 0) data.push({ idx: i80, ...d80 });
  if (weightDigits > 0) data.push({ idx: idg, ...ddg });

  const r = { score, data };
  _fortuneCache.set(key, r);
  return r;
}

function clearCache() {
  _fortuneCache.clear();
}

function isGoodNumber(n) {
  return queryFortuneScore(n).score >= GOOD_THRESHOLD;
}

function nextGood(n) {
  let i = Math.max(1, n + 1);
  while (!isGoodNumber(i)) i++;
  return i;
}

function prevGood(n) {
  let i = Math.max(1, n - 1);
  while (i > 1 && !isGoodNumber(i)) i--;
  return isGoodNumber(i) ? i : 1;
}

/**
 * Number list builder:
 * - Normal mode: [n-7..n+7]
 * - Good mode: 15 rows total if possible:
 *   includes target n (even if not good) + nearby good numbers around it.
 */
function buildNumberList(n) {
  const onlyGood = !!($onlyGood && $onlyGood.checked);

  if (!onlyGood) {
    const out = [];
    for (let i = n - 7; i <= n + 7; i++) {
      if (i >= 1) out.push(i);
    }
    return out;
  }

  const out = [n];

  let low = n - 1;
  let high = n + 1;

  let gotBelow = 0;
  let gotAbove = 0;

  // Try to collect up to 7 good below and 7 good above
  while ((gotBelow < 7 || gotAbove < 7) && out.length < 15) {
    if (gotBelow < 7) {
      while (low >= 1 && !isGoodNumber(low)) low--;
      if (low >= 1) {
        out.unshift(low);
        gotBelow++;
        low--;
      } else {
        gotBelow = 7; // no more below
      }
    }

    if (out.length >= 15) break;

    if (gotAbove < 7) {
      while (!isGoodNumber(high)) high++;
      out.push(high);
      gotAbove++;
      high++;
    }
  }

  // If still short (e.g., no more below), fill remaining from above (or vice versa)
  while (out.length < 15) {
    while (low >= 1 && !isGoodNumber(low)) low--;
    if (low >= 1) {
      out.unshift(low);
      low--;
      continue;
    }
    while (!isGoodNumber(high)) high++;
    out.push(high);
    high++;
  }

  return out;
}

const colorCode = (score) => {
  if (score > 7) return "green";
  if (score > 4) return "yellow";
  return "red";
};

const $num = document.getElementById("checkNumber");
const $tbody = document.querySelector("#scoreTable tbody");
const $scoreWheel = document.getElementById("scoreWheel");
const $checkScore = document.getElementById("checkScore");

function render() {
  const num = parseInt($num.value, 10) || 0;

  $tbody.innerHTML = "";
  $scoreWheel.innerHTML = "";

  const checkResult = queryFortuneScore(num);
  $checkScore.textContent = parseFloat(checkResult.score.toFixed(1));

  const numbers = buildNumberList(num);

  for (const i of numbers) {
    if (i < 1) continue;

    const row = document.createElement("tr");
    const result = queryFortuneScore(i);
    const color = colorCode(result.score);

    if (i == num) row.classList.add("target");

    row.innerHTML = `<td>${i}</td>
      <td class="sc-${color}">${result.score.toPrecision(3)}</td>
      <td>${result.data
        .map(({ idx, text, score }) => {
          return (
            `<div><span class="idx">${idx}</span>` +
            `<span class="ftext">${text}</span>` +
            `<span class="score">(${score})</span></div>`
          );
        })
        .join("")}</td>`;

    $tbody.appendChild(row);

    const wheel = document.createElement("div");
    wheel.classList.add("wheel");
    wheel.classList.add(`sc-${color}`);
    wheel.setAttribute("data-num", i);
    $scoreWheel.appendChild(wheel);
  }
}

function numberScroller(e) {
  e.preventDefault();

  let current = parseInt($num.value, 10) || 0;
  if (current < 1) current = 1;

  let newNum = current;

  const onlyGood = !!($onlyGood && $onlyGood.checked);

  if (onlyGood) {
    if (e.deltaY < 0) {
      // scroll up -> previous good number
      newNum = isGoodNumber(current) ? prevGood(current) : prevGood(current + 1);
    } else {
      // scroll down -> next good number
      newNum = isGoodNumber(current) ? nextGood(current) : nextGood(current - 1);
    }
  } else {
    if (e.deltaY < 0) newNum -= 3;
    else newNum += 3;
    if (newNum < 0) newNum = 0;
  }

  $num.value = newNum;
  $num.dispatchEvent(new Event("input"));
}

$num.addEventListener("wheel", numberScroller);
$scoreWheel.addEventListener("wheel", numberScroller);

document.addEventListener("click", (e) => {
  if (!e.target.matches(".wheel")) return;
  const num = e.target.getAttribute("data-num");
  $num.value = num;
  $num.dispatchEvent(new Event("input"));
});

function syncNumberToUrl(value) {
  const url = new URL(window.location.href);
  url.searchParams.set("n", value);
  window.history.replaceState(null, "", url);
}

// Persist all inputs (including checkbox) to localStorage
document.querySelectorAll("input").forEach((el) =>
  el.addEventListener("input", (e) => {
    const t = e.target;
    const v = t.type === "checkbox" ? String(t.checked) : t.value;
    localStorage.setItem(t.name, v);

    if (t === $num) {
      syncNumberToUrl(v);
    }
  })
);

// On any input change, clear cache (weights/checkbox change scoring/selection) and re-render
document.querySelectorAll("input").forEach((el) =>
  el.addEventListener("input", () => {
    clearCache();
    render();
  })
);

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  $num.value = params.get("n") || localStorage.getItem("num") || "100";
  syncNumberToUrl($num.value);
  $w80.value = localStorage.getItem("w80") || "1";
  $w81.value = localStorage.getItem("w81") || "1";
  $wdigit.value = localStorage.getItem("wdigit") || "1";

  if ($onlyGood) {
    $onlyGood.checked = (localStorage.getItem("onlyGood") || "false") === "true";
  }

  clearCache();
  render();

  $num.focus();
  $num.select();
});
