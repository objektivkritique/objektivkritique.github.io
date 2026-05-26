const quizContainer = document.getElementById("quiz-container");

const questions = [
  {
    question: "Hvor ofte føler du, at du spiller en rolle foran andre mennesker?",
    answers: [
      { text: "Hele tiden", type: "ARV" },
      { text: "Ofte", type: "KROP" },
      { text: "Nogle gange", type: "SIGNATUR" },
      { text: "Næsten aldrig", type: "INTENTION" }
    ]
  },
  {
    question: "Har kultur, religion eller familie påvirket hvordan du må udtrykke dig?",
    answers: [
      { text: "Meget", type: "ARV" },
      { text: "Noget", type: "KROP" },
      { text: "Lidt", type: "SIGNATUR" },
      { text: "Slet ikke", type: "INTENTION" }
    ]
  },
  {
    question: "Har du nogensinde skjult sider af dig selv for at passe ind?",
    answers: [
      { text: "Ofte", type: "ARV" },
      { text: "Nogle gange", type: "KROP" },
      { text: "Sjældent", type: "SIGNATUR" },
      { text: "Aldrig", type: "INTENTION" }
    ]
  },
  {
    question: "Hvad føles vigtigst for dig i relationer?",
    answers: [
      { text: "Tryghed", type: "KROP" },
      { text: "Frihed", type: "INTENTION" },
      { text: "Stabilitet", type: "ARV" },
      { text: "Ærlighed", type: "SIGNATUR" }
    ]
  }
];

let currentQuestion = 0;

const scores = {
  SIGNATUR: 0,
  ARV: 0,
  KROP: 0,
  INTENTION: 0
};

function renderQuestion() {

  const q = questions[currentQuestion];

  quizContainer.innerHTML = `
    <p class="section-label">
      ${currentQuestion + 1} / ${questions.length}
    </p>

    <h2>${q.question}</h2>

    <div class="answers">
      ${q.answers.map(answer => `
        <button class="button answer-btn">
          ${answer.text}
        </button>
      `).join("")}
    </div>
  `;

  document.querySelectorAll(".answer-btn").forEach((button, index) => {

    button.addEventListener("click", () => {

      const selected = q.answers[index];

      scores[selected.type]++;

      currentQuestion++;

      if (currentQuestion < questions.length) {
        renderQuestion();
      } else {
        renderResult();
      }

    });

  });

}

function renderResult() {

  const highest = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  let title = "";
  let description = "";
  let expression = "";
  let reading = "";

  if (highest === "ARV") {

    title = "ARV — DOMINERENDE";

    description = `
      Dine fællesskaber, din kultur eller sociale normer påvirker dig relativt stærkt.

      Det betyder ikke nødvendigvis, at dine valg ikke er autentiske.

      Men nogle af dem kan være blevet så normale,
      at de føles naturlige.
    `;

    expression = `
      Du vil sandsynligvis føle dig tryg i miljøer med stærke normer og tydelige roller.

      Det kan skabe fællesskab og loyalitet.

      Men også social kontrol,
      frygt for afvigelse
      og svært ved at sige ting højt.
    `;

    reading = `
      VIDERE LÆSNING

      • Ayo Hansen
      • Michel Foucault
      • Erving Goffman
    `;

  }

  if (highest === "INTENTION") {

    title = "INTENTION — I BEVÆGELSE";

    description = `
      Du virker mindre interesseret i at passe ind end tidligere.

      Frihed virker vigtigt for dig.
    `;

    expression = `
      Du vil sandsynligvis føle dig begrænset i miljøer hvor:

      • seksualitet forbindes med skam
      • kontrol kaldes kærlighed
      • normer vægtes højere end ærlighed
    `;

    reading = `
      VIDERE LÆSNING

      • Louise Perry
      • Jessica Fern
      • Esther Perel
    `;

  }

  if (highest === "SIGNATUR") {

    title = "SIGNATUR — STÆRK";

    description = `
      Du virker relativt bevidst om hvordan du ønsker at fremstå.

      Dine valg virker mindre tilfældige end mange andres.
    `;

    expression = `
      Du virker mindre styret af gruppens forventninger.

      Det kan skabe frihed.

      Men også konflikt med miljøer,
      der forventer loyalitet eller tilpasning.
    `;

    reading = `
      VIDERE LÆSNING

      • Mads Ananda Lodahl
      • bell hooks
      • Judith Butler
    `;

  }

  if (highest === "KROP") {

    title = "KROP — BESKYTTENDE";

    description = `
      Du tænker meget over hvordan andre ser dig.

      Der er sandsynligvis sider af dig selv,
      som du holder tilbage for at undgå kritik,
      skam eller konflikter.
    `;

    expression = `
      Du kan have tendens til at vælge tryghed fremfor frihed.

      Det kan gøre relationer stabile.

      Men også gøre det svært at mærke hvad du faktisk ønsker.
    `;

    reading = `
      VIDERE LÆSNING

      • The Will To Change
      • Polysecure
      • The Courage To Be Disliked
    `;

  }

  quizContainer.innerHTML = `
    <p class="section-label">
      DIN PERSONLIGE GARDEROBE
    </p>

    <h2>${title}</h2>

    <p>${description}</p>

    <h3>Hvordan det kan komme til udtryk</h3>

    <p>${expression}</p>

    <h3>Videre læsning</h3>

    <p>${reading}</p>

    <h3>Modsigelser</h3>

    <p>
      Nogle mennesker vil mene,
      at stærke normer skaber tryghed.

      Andre vil mene,
      at de begrænser frihed.

      Objektiv Kritique giver ikke facit.
      Kun spændinger.
    </p>
  `;

}

renderQuestion();
