const quizContainer = document.getElementById("quiz-container");

const sections = [
  {
    title: "DET INDIVIDUELLE",
    intro: "Dette lag handler om behov, grænser, komfort og energi. Hvordan føles det at være dig, når ingen forventer noget bestemt?"
  },
  {
    title: "DET IDENTITETSBASEREDE",
    intro: "Dette lag handler om grupper, kultur, religion, seksualitet, familie og sociale signaler. Fællesskaber kan give tryghed. De kan også skabe kontrol."
  },
  {
    title: "DET UNIVERSELLE",
    intro: "Dette lag handler om frygt, nærhed, sårbarhed og mening. De fleste mennesker ønsker frihed, kærlighed og tryghed. Vi skjuler det bare forskelligt."
  },
  {
    title: "INTENTION / FREMTID",
    intro: "Dette lag handler om retning. Ikke kun hvem du er, men hvem du forsøger at blive."
  }
];

const questions = [
  {
    section: 0,
    question: "Hvornår føler du dig mindst observeret?",
    answers: [
      { text: "Når jeg er alene", scores: { KROP: 2 } },
      { text: "Når jeg er blandt nære relationer", scores: { SIGNATUR: 2 } },
      { text: "Når jeg er anonym blandt fremmede", scores: { INTENTION: 2 } },
      { text: "Næsten aldrig", scores: { ARV: 2, KROP: 1 } }
    ]
  },
  {
    section: 0,
    question: "Hvilket miljø føles mest naturligt for dig?",
    answers: [
      { text: "Stilhed", scores: { KROP: 2 } },
      { text: "Bevægelse", scores: { INTENTION: 2 } },
      { text: "Struktur", scores: { ARV: 2 } },
      { text: "Kaos", scores: { SIGNATUR: 2 } }
    ]
  },
  {
    section: 0,
    question: "Hvor ofte ændrer du dit udseende afhængigt af hvem du skal møde?",
    answers: [
      { text: "Næsten altid", scores: { ARV: 2, KROP: 1 } },
      { text: "Af og til", scores: { SIGNATUR: 1, ARV: 1 } },
      { text: "Sjældent", scores: { SIGNATUR: 2 } },
      { text: "Jeg tænker ikke over det", scores: { KROP: 1, ARV: 1 } }
    ]
  },
  {
    section: 0,
    question: "Hvad føles mest ubehageligt?",
    answers: [
      { text: "At skille sig ud", scores: { ARV: 2 } },
      { text: "At ligne alle andre", scores: { SIGNATUR: 2 } },
      { text: "At blive misforstået", scores: { KROP: 2 } },
      { text: "At blive aflæst korrekt", scores: { KROP: 2, INTENTION: 1 } }
    ]
  },

  {
    section: 1,
    question: "Har kultur, religion eller familie påvirket hvordan du må udtrykke dig?",
    answers: [
      { text: "Meget", scores: { ARV: 3 } },
      { text: "Noget", scores: { ARV: 2, KROP: 1 } },
      { text: "Lidt", scores: { SIGNATUR: 2 } },
      { text: "Slet ikke", scores: { INTENTION: 2, SIGNATUR: 1 } }
    ]
  },
  {
    section: 1,
    question: "Har du nogensinde skjult sider af dig selv for at passe ind?",
    answers: [
      { text: "Ofte", scores: { ARV: 2, KROP: 2 } },
      { text: "Nogle gange", scores: { ARV: 1, KROP: 1 } },
      { text: "Sjældent", scores: { SIGNATUR: 2 } },
      { text: "Aldrig", scores: { SIGNATUR: 2, INTENTION: 1 } }
    ]
  },
  {
    section: 1,
    question: "Hvor ofte føler du, at du spiller en rolle foran andre mennesker?",
    answers: [
      { text: "Hele tiden", scores: { ARV: 2, KROP: 2 } },
      { text: "Ofte", scores: { ARV: 2 } },
      { text: "Nogle gange", scores: { SIGNATUR: 1, ARV: 1 } },
      { text: "Næsten aldrig", scores: { SIGNATUR: 2 } }
    ]
  },
  {
    section: 1,
    question: "Hvor frit føler du, at du kan udtrykke kærlighed, seksualitet, tro eller tvivl?",
    answers: [
      { text: "Helt frit", scores: { SIGNATUR: 2, INTENTION: 2 } },
      { text: "Delvist frit", scores: { SIGNATUR: 1, KROP: 1 } },
      { text: "Begrænset", scores: { ARV: 2, KROP: 1 } },
      { text: "Ikke frit", scores: { ARV: 3, KROP: 2 } }
    ]
  },

  {
    section: 2,
    question: "Hvad frygter du mest?",
    answers: [
      { text: "At være alene", scores: { KROP: 2 } },
      { text: "At blive afvist", scores: { ARV: 1, KROP: 2 } },
      { text: "At miste kontrol", scores: { ARV: 2 } },
      { text: "At leve uautentisk", scores: { INTENTION: 2, SIGNATUR: 1 } }
    ]
  },
  {
    section: 2,
    question: "Hvornår føler du mest ro?",
    answers: [
      { text: "Når ingen forventer noget af mig", scores: { KROP: 2 } },
      { text: "Når jeg bliver set tydeligt", scores: { SIGNATUR: 2 } },
      { text: "Når jeg bidrager til noget større", scores: { ARV: 2 } },
      { text: "Når jeg kan forsvinde lidt", scores: { KROP: 2, ARV: 1 } }
    ]
  },
  {
    section: 2,
    question: "Hvad ville være sværest at miste?",
    answers: [
      { text: "Relationer", scores: { KROP: 2 } },
      { text: "Identitet", scores: { SIGNATUR: 2 } },
      { text: "Frihed", scores: { INTENTION: 2 } },
      { text: "Retning", scores: { ARV: 1, INTENTION: 1 } }
    ]
  },
  {
    section: 2,
    question: "Føler du, at andre ser den rigtige version af dig?",
    answers: [
      { text: "Ja", scores: { SIGNATUR: 2 } },
      { text: "Delvist", scores: { SIGNATUR: 1, KROP: 1 } },
      { text: "Sjældent", scores: { KROP: 2, ARV: 1 } },
      { text: "Nej", scores: { KROP: 3 } }
    ]
  },

  {
    section: 3,
    question: "Hvad forsøger du mest at bevæge dig væk fra?",
    answers: [
      { text: "Skam", scores: { INTENTION: 2, KROP: 1 } },
      { text: "Ensomhed", scores: { KROP: 2 } },
      { text: "Forventninger", scores: { INTENTION: 2, ARV: 1 } },
      { text: "Meningsløshed", scores: { INTENTION: 2 } }
    ]
  },
  {
    section: 3,
    question: "Hvad ønsker du mest at blive?",
    answers: [
      { text: "Fri", scores: { INTENTION: 3 } },
      { text: "Elsket", scores: { KROP: 2 } },
      { text: "Hel", scores: { SIGNATUR: 1, KROP: 1 } },
      { text: "Uafhængig", scores: { SIGNATUR: 2, INTENTION: 1 } }
    ]
  },
  {
    section: 3,
    question: "Hvilket ord føles mest som en længsel?",
    answers: [
      { text: "Ro", scores: { KROP: 2 } },
      { text: "Intensitet", scores: { INTENTION: 2 } },
      { text: "Tilhørsforhold", scores: { ARV: 2 } },
      { text: "Klarhed", scores: { SIGNATUR: 2 } }
    ]
  },
  {
    section: 3,
    question: "Hvis ingen observerede dig i et år, hvad ville sandsynligvis ændre sig mest?",
    answers: [
      { text: "Mit udseende", scores: { SIGNATUR: 2 } },
      { text: "Mine relationer", scores: { KROP: 2 } },
      { text: "Mine mål", scores: { INTENTION: 2 } },
      { text: "Mit sprog eller kropssprog", scores: { ARV: 1, SIGNATUR: 1 } }
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

function addScores(scoreObject) {
  Object.keys(scoreObject).forEach(key => {
    scores[key] += scoreObject[key];
  });
}

function renderQuestion() {
  const q = questions[currentQuestion];
  const showSectionIntro =
    currentQuestion === 0 ||
    questions[currentQuestion - 1].section !== q.section;

  quizContainer.innerHTML = `
    ${showSectionIntro ? `
      <div class="quiz-layer-intro">
        <p class="section-label">${sections[q.section].title}</p>
        <p>${sections[q.section].intro}</p>
      </div>
    ` : ""}

    <p class="section-label">${currentQuestion + 1} / ${questions.length}</p>
    <h2>${q.question}</h2>

    <div class="answers">
      ${q.answers.map(answer => `
        <button class="button answer-btn">${answer.text}</button>
      `).join("")}
    </div>
  `;

  document.querySelectorAll(".answer-btn").forEach((button, index) => {
    button.addEventListener("click", () => {
      addScores(q.answers[index].scores);
      currentQuestion++;

      if (currentQuestion < questions.length) {
        renderQuestion();
      } else {
        renderResult();
      }
    });
  });
}

function level(score) {
  if (score >= 8) return "høj";
  if (score >= 5) return "middel";
  return "lav";
}

function moduleText(type, score) {
  const l = level(score);

  const texts = {
    SIGNATUR: {
      høj: {
        title: "SIGNATUR — STÆRK",
        body: "Du virker bevidst om hvordan du fremstår. Dine valg virker mindre tilfældige end mange andres. Det kan give frihed. Det kan også blive en rolle, hvis du hele tiden skal være tydelig."
      },
      middel: {
        title: "SIGNATUR — FLYDENDE",
        body: "Du skifter udtryk efter situationen. Det er ikke nødvendigvis falskt. Det kan være social intelligens. Men det kan også blive uklart, hvad du selv ville vælge uden publikum."
      },
      lav: {
        title: "SIGNATUR — SKJULT",
        body: "Din egen retning står ikke tydeligst i svarene. Du holder måske dele af dig selv tilbage. Ikke fordi de er forkerte, men fordi de ikke altid føles sikre at vise."
      }
    },

    ARV: {
      høj: {
        title: "ARV — DOMINERENDE",
        body: "Dine fællesskaber, din kultur eller sociale normer påvirker dig relativt stærkt. Det betyder ikke, at dine valg ikke er autentiske. Men nogle af dem kan være blevet så normale, at de føles naturlige."
      },
      middel: {
        title: "ARV — FORHANDLET",
        body: "Du står mellem det du kommer fra, og det du selv vil. Du afviser ikke nødvendigvis dine fællesskaber. Men du tager dem heller ikke bare for givet."
      },
      lav: {
        title: "ARV — AFSTAND",
        body: "Du virker mindre styret af fællesskabets forventninger. Det kan give frihed. Det kan også koste tilhørsforhold, hvis dit miljø forventer loyalitet frem for tvivl."
      }
    },

    KROP: {
      høj: {
        title: "KROP — BESKYTTENDE",
        body: "Du tænker meget over hvordan andre ser dig. Der er sandsynligvis sider af dig selv, som du holder tilbage for at undgå kritik, skam eller konflikter. Det kan beskytte dig. Det kan også gøre det svært at føle sig fri."
      },
      middel: {
        title: "KROP — OPMÆRKSOM",
        body: "Du mærker både dine behov og omgivelsernes krav. Du kan tilpasse dig, men du mister ikke nødvendigvis dig selv. Spørgsmålet er, hvor ofte du vælger tryghed før ærlighed."
      },
      lav: {
        title: "KROP — FRAKOBLET",
        body: "Dine svar peger mindre på kroppen og mere på idéer, roller eller retning. Det kan gøre dig handlekraftig. Men man kan også blive så god til at fungere, at man ikke mærker hvad man faktisk føler."
      }
    },

    INTENTION: {
      høj: {
        title: "INTENTION — I BEVÆGELSE",
        body: "Du virker mindre interesseret i at passe ind end tidligere. Frihed virker vigtigt for dig. Du er måske mere optaget af hvem du er ved at blive, end hvem du har været."
      },
      middel: {
        title: "INTENTION — SØGENDE",
        body: "Du leder efter retning, men uden at have lukket svaret. Det kan være forvirrende. Det kan også være ærligt. Ikke alle mennesker skal ligne en færdig identitet."
      },
      lav: {
        title: "INTENTION — FASTHOLDT",
        body: "Fremtiden fylder ikke stærkest i dine svar. Du kan være optaget af stabilitet, tryghed eller det kendte. Det kan være ro. Det kan også være en pænere måde at sige stilstand på."
      }
    }
  };

  return texts[type][l];
}

function renderResult() {
  const modules = ["SIGNATUR", "ARV", "KROP", "INTENTION"].map(type => {
    const text = moduleText(type, scores[type]);
    return `
      <div class="project-card">
        <span class="card-number">${type}</span>
        <h3>${text.title}</h3>
        <p>${text.body}</p>
      </div>
    `;
  }).join("");

  quizContainer.innerHTML = `
    <p class="section-label">DIN PERSONLIGE GARDEROBE</p>
    <h2>Et kort over dine spændinger</h2>

    <p>
      Dette er ikke en diagnose. Det er heller ikke en sandhed.
      Det er et spejl over de kræfter, dine svar peger på.
    </p>

    <div class="project-grid">
      ${modules}
    </div>

    <h3>Hvordan det kan komme til udtryk</h3>

    <p>
      I et toxic community kan fællesskab blive vigtigere end frihed.
      Man lærer hvad man må sige, hvad man skal skjule, og hvilke spørgsmål der skaber problemer.
      Det kan ske i religiøse miljøer, politiske grupper, familier, maskuline hierarkier eller online fællesskaber.
    </p>

    <p>
      I et sexnegativt samfund bliver lyst ofte blandet sammen med skam.
      Jalousi kan blive behandlet som kærlighed.
      Kontrol kan blive forklaret som omsorg.
      Tavshed kan blive forvekslet med moral.
    </p>

    <p>
      Det modsatte er ikke kaos.
      Det modsatte er ærlighed, samtykke, frihed og ansvar.
      Frie relationer kræver ikke færre grænser.
      De kræver tydeligere grænser.
    </p>

    <h3>Hvad kan man gøre?</h3>

    <p>
      Læg mærke til hvor du tier stille.
      Læg mærke til hvem du prøver at berolige.
      Læg mærke til hvornår du kalder noget kærlighed, selvom det mest ligner kontrol.
    </p>

    <p>
      Spørg dig selv:
      Er dette mit valg?
      Er det mit miljøs valg?
      Eller er det bare blevet så normalt, at jeg ikke længere kan kende forskel?
    </p>

    <h3>Videre læsning</h3>

    <p>
      Jessica Fern skriver om polyamori, åbne relationer og hvordan tryg tilknytning kan se ud uden klassisk monogami.
    </p>

    <p>
      Esther Perel skriver om begær, parforhold og hvorfor tryghed og frihed ofte trækker i hver sin retning.
    </p>

    <p>
      Louise Perry kritiserer den seksuelle revolution og argumenterer for, at frihed også kan skabe nye former for pres og udnyttelse.
    </p>

    <p>
      Michel Foucault skriver om magt, normer og hvordan samfund former mennesker uden altid at bruge direkte tvang.
    </p>

    <p>
      Erving Goffman skriver om hverdagslivets roller og hvordan mennesker performer sig selv foran andre.
    </p>

    <p>
      Ayo Hansen skriver om social kontrol, tavshed og frihed i miljøer hvor fællesskabets normer kan blive stærkere end individets stemme.
    </p>

    <h3>Modsigelser</h3>

    <p>
      Der vil altid være modsigelser.
      Stærke normer kan skabe tryghed, fællesskab og retning.
      De kan også skabe frygt, tavshed og social kontrol.
    </p>

    <p>
      Monogami kan være et frit valg.
      Det kan også være en social kontrakt, man aldrig har fået lov til at forhandle.
    </p>

    <p>
      Religion kan give mening, trøst og fællesskab.
      Den kan også begrænse tvivl, seksualitet og individuel frihed.
    </p>

    <p>
      Objektiv Kritique giver ikke facit.
      Vi viser spændingerne.
      Resten må du selv leve med.
    </p>

    <button class="button" onclick="location.reload()">Tag quizzen igen</button>
  `;
}

renderQuestion();
