const verbs = [
  {
    infinitive: "être", de: "sein",
    present: ["je suis", "tu es", "il est", "nous sommes", "vous êtes", "ils sont"],
    passeCompose: ["j'ai été", "tu as été", "il a été", "nous avons été", "vous avez été", "ils ont été"],
    futurSimple: ["je serai", "tu seras", "il sera", "nous serons", "vous serez", "ils seront"],
    imparfait: ["j'étais", "tu étais", "il était", "nous étions", "vous étiez", "ils étaient"],
    conditionnel: ["je serais", "tu serais", "il serait", "nous serions", "vous seriez", "ils seraient"]
  },
  {
    infinitive: "avoir", de: "haben",
    present: ["j'ai", "tu as", "il a", "nous avons", "vous avez", "ils ont"],
    passeCompose: ["j'ai eu", "tu as eu", "il a eu", "nous avons eu", "vous avez eu", "ils ont eu"],
    futurSimple: ["j'aurai", "tu auras", "il aura", "nous aurons", "vous aurez", "ils auront"],
    imparfait: ["j'avais", "tu avais", "il avait", "nous avions", "vous aviez", "ils avaient"],
    conditionnel: ["j'aurais", "tu aurais", "il aurait", "nous aurions", "vous auriez", "ils auraient"]
  },
  {
    infinitive: "faire", de: "machen",
    present: ["je fais", "tu fais", "il fait", "nous faisons", "vous faites", "ils font"],
    passeCompose: ["j'ai fait", "tu as fait", "il a fait", "nous avons fait", "vous avez fait", "ils ont fait"],
    futurSimple: ["je ferai", "tu feras", "il fera", "nous ferons", "vous ferez", "ils feront"],
    imparfait: ["je faisais", "tu faisais", "il faisait", "nous faisions", "vous faisiez", "ils faisaient"],
    conditionnel: ["je ferais", "tu ferais", "il ferait", "nous ferions", "vous feriez", "ils feraient"]
  },
  {
    infinitive: "aller", de: "gehen",
    present: ["je vais", "tu vas", "il va", "nous allons", "vous allez", "ils vont"],
    passeCompose: ["je suis allé", "tu es allé", "il est allé", "nous sommes allés", "vous êtes allés", "ils sont allés"],
    futurSimple: ["j'irai", "tu iras", "il ira", "nous irons", "vous irez", "ils iront"],
    imparfait: ["j'allais", "tu allais", "il allait", "nous allions", "vous alliez", "ils allaient"],
    conditionnel: ["j'irais", "tu irais", "il irait", "nous irions", "vous iriez", "ils iraient"]
  },
  {
    infinitive: "pouvoir", de: "können",
    present: ["je peux", "tu peux", "il peut", "nous pouvons", "vous pouvez", "ils peuvent"],
    passeCompose: ["j'ai pu", "tu as pu", "il a pu", "nous avons pu", "vous avez pu", "ils ont pu"],
    futurSimple: ["je pourrai", "tu pourras", "il pourra", "nous pourrons", "vous pourrez", "ils pourront"],
    imparfait: ["je pouvais", "tu pouvais", "il pouvait", "nous pouvions", "vous pouviez", "ils pouvaient"],
    conditionnel: ["je pourrais", "tu pourrais", "il pourrait", "nous pourrions", "vous pourriez", "ils pourraient"]
  },
  {
    infinitive: "vouloir", de: "wollen",
    present: ["je veux", "tu veux", "il veut", "nous voulons", "vous voulez", "ils veulent"],
    passeCompose: ["j'ai voulu", "tu as voulu", "il a voulu", "nous avons voulu", "vous avez voulu", "ils ont voulu"],
    futurSimple: ["je voudrai", "tu voudras", "il voudra", "nous voudrons", "vous voudrez", "ils voudront"],
    imparfait: ["je voulais", "tu voulais", "il voulait", "nous voulions", "vous vouliez", "ils voulaient"],
    conditionnel: ["je voudrais", "tu voudrais", "il voudrait", "nous voudrions", "vous voudriez", "ils voudraient"]
  },
  {
    infinitive: "prendre", de: "nehmen",
    present: ["je prends", "tu prends", "il prend", "nous prenons", "vous prenez", "ils prennent"],
    passeCompose: ["j'ai pris", "tu as pris", "il a pris", "nous avons pris", "vous avez pris", "ils ont pris"],
    futurSimple: ["je prendrai", "tu prendras", "il prendra", "nous prendrons", "vous prendrez", "ils prendront"],
    imparfait: ["je prenais", "tu prenais", "il prenait", "nous prenions", "vous preniez", "ils prenaient"],
    conditionnel: ["je prendrais", "tu prendrais", "il prendrait", "nous prendrions", "vous prendriez", "ils prendraient"]
  },
  {
    infinitive: "venir", de: "kommen",
    present: ["je viens", "tu viens", "il vient", "nous venons", "vous venez", "ils viennent"],
    passeCompose: ["je suis venu", "tu es venu", "il est venu", "nous sommes venus", "vous êtes venus", "ils sont venus"],
    futurSimple: ["je viendrai", "tu viendras", "il viendra", "nous viendrons", "vous viendrez", "ils viendront"],
    imparfait: ["je venais", "tu venais", "il venait", "nous venions", "vous veniez", "ils venaient"],
    conditionnel: ["je viendrais", "tu viendrais", "il viendrait", "nous viendrions", "vous viendriez", "ils viendraient"]
  },
  {
    infinitive: "dire", de: "sagen",
    present: ["je dis", "tu dis", "il dit", "nous disons", "vous dites", "ils disent"],
    passeCompose: ["j'ai dit", "tu as dit", "il a dit", "nous avons dit", "vous avez dit", "ils ont dit"],
    futurSimple: ["je dirai", "tu diras", "il dira", "nous dirons", "vous direz", "ils diront"],
    imparfait: ["je disais", "tu disais", "il disait", "nous disions", "vous disiez", "ils disaient"],
    conditionnel: ["je dirais", "tu dirais", "il dirait", "nous dirions", "vous diriez", "ils diraient"]
  },
  {
    infinitive: "devoir", de: "müssen / sollen",
    present: ["je dois", "tu dois", "il doit", "nous devons", "vous devez", "ils doivent"],
    passeCompose: ["j'ai dû", "tu as dû", "il a dû", "nous avons dû", "vous avez dû", "ils ont dû"],
    futurSimple: ["je devrai", "tu devras", "il devra", "nous devrons", "vous devrez", "ils devront"],
    imparfait: ["je devais", "tu devais", "il devait", "nous devions", "vous deviez", "ils devaient"],
    conditionnel: ["je devrais", "tu devrais", "il devrait", "nous devrions", "vous devriez", "ils devraient"]
  }
];

const pronouns = ["je", "tu", "il", "nous", "vous", "ils"];
const allTenses = ["present", "passeCompose", "futurSimple", "imparfait", "conditionnel"];

const tenseNames = {
  present: "présent",
  passeCompose: "passé composé",
  futurSimple: "futur simple",
  imparfait: "imparfait",
  conditionnel: "conditionnel présent"
};

let state = JSON.parse(localStorage.getItem("missionVerbesFreshState")) || {
  score: 0,
  streak: 0,
  total: 0,
  correct: 0,
  xp: 0,
  level: 1
};

let currentTask = null;
let answerAlreadyChecked = false;

const $ = (id) => document.getElementById(id);

function normalize(text) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[’`´]/g, "'")
    .replace(/\s+/g, " ");
}

function removePronoun(fullAnswer, pronoun) {
  let answer = normalize(fullAnswer);
  const p = normalize(pronoun);

  if (p === "je") {
    answer = answer.replace(/^je\s+/, "");
    answer = answer.replace(/^j'\s*/, "");
  } else {
    answer = answer.replace(new RegExp("^" + p + "\\s+"), "");
  }

  return answer.trim();
}

function chooseTense() {
  const selected = $("tenseSelect").value;

  if (selected === "mixed") {
    return allTenses[Math.floor(Math.random() * allTenses.length)];
  }

  return selected;
}

function newTask() {
  const tense = chooseTense();
  const verb = verbs[Math.floor(Math.random() * verbs.length)];
  const personIndex = Math.floor(Math.random() * pronouns.length);
  const pronoun = pronouns[personIndex];
  const fullAnswer = verb[tense][personIndex];

  currentTask = {
    tense,
    verb,
    pronoun,
    fullAnswer,
    shortAnswer: removePronoun(fullAnswer, pronoun)
  };

  answerAlreadyChecked = false;

  $("pronoun").textContent = pronoun;
  $("verb").textContent = verb.infinitive;
  $("info").textContent = `Deutsch: ${verb.de} · Zeitform: ${tenseNames[tense]}`;
  $("answerInput").value = "";
  $("feedback").className = "feedback";
  $("feedback").textContent = "Gib deine Antwort ein und drücke Enter.";
  $("answerInput").focus();
}

function updateStats() {
  $("score").textContent = state.score;
  $("streak").textContent = state.streak;
  $("level").textContent = state.level;

  const accuracy = state.total === 0 ? 0 : Math.round((state.correct / state.total) * 100);
  $("accuracy").textContent = accuracy + "%";

  $("xpText").textContent = `${state.xp} / 100 XP`;
  $("xpBar").style.width = state.xp + "%";

  localStorage.setItem("missionVerbesFreshState", JSON.stringify(state));
}

function addXp(points) {
  state.xp += points;

  while (state.xp >= 100) {
    state.xp -= 100;
    state.level += 1;
  }
}

function checkAnswer() {
  if (!currentTask || answerAlreadyChecked) return;

  const userAnswer = normalize($("answerInput").value);
  const correctFull = normalize(currentTask.fullAnswer);
  const correctShort = normalize(currentTask.shortAnswer);

  if (!userAnswer) {
    $("feedback").className = "feedback bad";
    $("feedback").textContent = "Bitte zuerst eine Antwort eingeben.";
    return;
  }

  answerAlreadyChecked = true;
  state.total += 1;

  const isCorrect = userAnswer === correctFull || userAnswer === correctShort;

  if (isCorrect) {
    state.correct += 1;
    state.streak += 1;
    state.score += 2;
    addXp(2);

    $("feedback").className = "feedback good";
    $("feedback").textContent = `Richtig! ${currentTask.fullAnswer} · +2 Punkte. Enter = nächste Frage.`;
  } else {
    state.streak = 0;

    $("feedback").className = "feedback bad";
    $("feedback").textContent = `Noch nicht. Richtig: ${currentTask.fullAnswer} oder ${currentTask.shortAnswer}. Enter = nächste Frage.`;
  }

  updateStats();
}

$("answerForm").addEventListener("submit", (event) => {
  event.preventDefault();

  if (answerAlreadyChecked) {
    newTask();
  } else {
    checkAnswer();
  }
});

$("newTaskBtn").addEventListener("click", newTask);

$("showSolutionBtn").addEventListener("click", () => {
  if (!currentTask) return;

  answerAlreadyChecked = true;
  $("feedback").className = "feedback";
  $("feedback").textContent = `Lösung: ${currentTask.fullAnswer} oder ${currentTask.shortAnswer}. Enter = nächste Frage.`;
});

$("resetBtn").addEventListener("click", () => {
  state = {
    score: 0,
    streak: 0,
    total: 0,
    correct: 0,
    xp: 0,
    level: 1
  };

  updateStats();
  newTask();
});

$("tenseSelect").addEventListener("change", newTask);

updateStats();
newTask();
