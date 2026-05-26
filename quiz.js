const layers = {
  individ: 'Dette lag handler om behov, grænser, komfort og energi. Hvordan føles det at være dig, når ingen forventer noget bestemt?',
  identitet: 'Dette lag handler om grupper, kultur, religion, seksualitet, familie og sociale regler. Nogle fællesskaber giver frihed. Andre giver roller.',
  univers: 'Dette lag handler om frygt, nærhed, krop, tryghed og mening. De fleste mennesker længes efter frihed, kærlighed og ro, men vi skjuler det forskelligt.',
  fremtid: 'Dette lag handler om retning. Ikke kun hvem du er, men hvem du prøver at blive.'
};

const questions = [
  {layer:'individ', q:'Hvornår føler du dig mest som dig selv?', a:[['Når jeg er alene',{signatur:'skjult',krop:'tryg'}],['Når jeg er med få nære mennesker',{signatur:'stærk',krop:'sanselig'}],['Når jeg er anonym blandt fremmede',{signatur:'flydende',arv:'afvisende'}],['Det ved jeg ikke rigtigt',{signatur:'performativ',krop:'frakoblet'}]]},
  {layer:'individ', q:'Hvor ofte ændrer du dit udseende efter hvem du skal møde?', a:[['Næsten altid',{signatur:'performativ',arv:'dominerende'}],['Nogle gange',{signatur:'flydende',arv:'forhandlet'}],['Sjældent',{signatur:'stærk',arv:'afvisende'}],['Jeg tænker ikke over det',{signatur:'skjult',arv:'ubevidst'}]]},
  {layer:'individ', q:'Hvad føles mest ubehageligt?', a:[['At skille mig ud',{arv:'dominerende',krop:'tryg'}],['At ligne alle andre',{signatur:'stærk',arv:'afvisende'}],['At blive misforstået',{signatur:'performativ',krop:'beskyttende'}],['At blive set for tydeligt',{signatur:'skjult',krop:'beskyttende'}]]},
  {layer:'individ', q:'Hvad vælger du oftest først?', a:[['Det der føles rart på kroppen',{krop:'sanselig'}],['Det der passer til situationen',{signatur:'flydende',arv:'forhandlet'}],['Det der sender det rigtige signal',{signatur:'performativ'}],['Det der ikke vækker for meget opmærksomhed',{signatur:'skjult',krop:'tryg'}]]},
  {layer:'identitet', q:'Har kultur, religion eller familie påvirket hvordan du må udtrykke dig?', a:[['Meget',{arv:'dominerende',krop:'beskyttende'}],['Noget',{arv:'forhandlet'}],['Lidt',{arv:'ubevidst'}],['Slet ikke',{arv:'afvisende',signatur:'stærk'}]]},
  {layer:'identitet', q:'Har du skjult en del af dig selv for at passe ind?', a:[['Ja, ofte',{arv:'dominerende',krop:'beskyttende'}],['Nogle gange',{arv:'forhandlet',signatur:'flydende'}],['Sjældent',{signatur:'stærk'}],['Aldrig',{arv:'afvisende',signatur:'stærk'}]]},
  {layer:'identitet', q:'Hvor frit kan du kritisere de normer du er vokset op med?', a:[['Helt frit',{arv:'afvisende',signatur:'stærk'}],['Delvist frit',{arv:'forhandlet'}],['Kun forsigtigt',{arv:'dominerende',krop:'beskyttende'}],['Næsten ikke',{arv:'dominerende',krop:'tryg'}]]},
  {layer:'identitet', q:'Hvor ofte føler du, at du spiller en rolle foran andre?', a:[['Hele tiden',{signatur:'performativ',krop:'frakoblet'}],['Ofte',{signatur:'performativ'}],['Nogle gange',{signatur:'flydende'}],['Næsten aldrig',{signatur:'stærk'}]]},
  {layer:'univers', q:'Hvad frygter du mest?', a:[['At være alene',{krop:'tryg'}],['At blive afvist',{signatur:'performativ',krop:'beskyttende'}],['At miste kontrol',{krop:'frakoblet',arv:'dominerende'}],['At leve uærligt',{intention:'opgørende',signatur:'stærk'}]]},
  {layer:'univers', q:'Har du ønsket noget i kærlighed, som føltes forkert at sige højt?', a:[['Ofte',{krop:'beskyttende',intention:'opgørende'}],['Nogle gange',{krop:'sanselig',arv:'forhandlet'}],['Sjældent',{arv:'ubevidst'}],['Aldrig',{arv:'dominerende',krop:'tryg'}]]},
  {layer:'univers', q:'Føler du, at jalousi ofte bliver forvekslet med kærlighed?', a:[['Ja',{intention:'opgørende',arv:'afvisende'}],['Nogle gange',{arv:'forhandlet'}],['Ikke rigtigt',{arv:'ubevidst'}],['Nej',{arv:'dominerende',krop:'tryg'}]]},
  {layer:'univers', q:'Hvad ville være sværest at miste?', a:[['Mine relationer',{krop:'tryg',arv:'forhandlet'}],['Min identitet',{signatur:'stærk'}],['Min frihed',{intention:'opgørende',arv:'afvisende'}],['Min retning',{intention:'ambitiøs'}]]},
  {layer:'fremtid', q:'Hvad prøver du mest at bevæge dig væk fra?', a:[['Skam',{krop:'beskyttende',intention:'opgørende'}],['Ensomhed',{krop:'tryg'}],['Forventninger',{arv:'afvisende',intention:'opgørende'}],['Meningsløshed',{intention:'søgende'}]]},
  {layer:'fremtid', q:'Hvad ønsker du mest at blive?', a:[['Fri',{intention:'opgørende',arv:'afvisende'}],['Elsket',{krop:'tryg'}],['Hel',{krop:'sanselig',intention:'søgende'}],['Uafhængig',{intention:'ambitiøs',signatur:'stærk'}]]},
  {layer:'fremtid', q:'Hvis ingen så dig i et år, hvad ville ændre sig mest?', a:[['Mit udseende',{signatur:'performativ',intention:'bevægelse'}],['Mine relationer',{krop:'sanselig'}],['Mine mål',{intention:'ambitiøs'}],['Mit sprog og min måde at være på',{signatur:'flydende',arv:'forhandlet'}]]},
  {layer:'fremtid', q:'Hvad længes du mest efter?', a:[['Ro',{krop:'tryg'}],['Intensitet',{krop:'sanselig'}],['Tilhørsforhold',{arv:'forhandlet',krop:'tryg'}],['Klarhed',{intention:'søgende'}]]}
];

const resultTexts = {
  signatur: {
    title:'SIGNATUR', subtitle:'Det kun du ville vælge',
    states:{
      'stærk':['STÆRK','Du virker bevidst om hvordan du vil fremstå. Dine valg virker ikke tilfældige. Du bruger stil som retning, ikke kun som pynt.'],
      'flydende':['FLYDENDE','Du tilpasser dig hurtigt omgivelserne. Det kan gøre dig socialt stærk. Men det kan også gøre det svært at vide, hvad der faktisk er dit eget.'],
      'skjult':['SKJULT','Du viser ikke alt med det samme. Du holder noget tilbage. Det kan beskytte dig. Men det kan også gøre det svært for andre at møde dig rigtigt.'],
      'performativ':['PERFORMATIV','Du tænker meget over hvordan andre ser dig. Du bruger sandsynligvis mere energi på at passe ind end på at mærke efter hvad du selv vil.']
    }
  },
  arv: {
    title:'ARV', subtitle:'Det vi deler',
    states:{
      'dominerende':['STÆRK ARV','Dine svar tyder på, at dine fællesskaber, din kultur eller de sociale normer påvirker dig relativt stærkt. Det betyder ikke, at dine valg ikke er ægte. Men nogle af dem er måske blevet så normale, at de føles naturlige.'],
      'forhandlet':['FORHANDLET','Du står mellem dig selv og de fællesskaber, du kommer fra. Du afviser ikke alt. Du overtager heller ikke alt. Du prøver at vælge, hvad du vil bære videre.'],
      'afvisende':['AFVISENDE','Du virker skeptisk over for normer, traditioner og faste roller. Det kan give frihed. Det kan også gøre det svært at høre til nogen steder uden at føle sig fanget.'],
      'ubevidst':['USYNLIG ARV','Dine svar tyder på, at nogle normer påvirker dig uden at fylde meget i dine tanker. Det farlige ved normer er ikke altid, at de føles stærke. Det er, at de føles normale.']
    }
  },
  krop: {
    title:'KROP', subtitle:'Det vi alle har brug for',
    states:{
      'tryg':['TRYGHED','Du søger ro, sikkerhed og forudsigelighed. Det er menneskeligt. Men tryghed kan også blive et bur, hvis den altid vinder over frihed.'],
      'sanselig':['SANSELIG','Du virker tæt på kroppen, stemningen og lysten. Du mærker, hvad der føles rigtigt. Det kan være en styrke i en verden, hvor mange mest mærker regler.'],
      'beskyttende':['BESKYTTENDE','Du tænker meget over hvordan andre ser dig. Der er sandsynligvis sider af dig selv, som du holder tilbage for at undgå kritik, skam eller konflikter. Det kan beskytte dig. Men det kan også gøre det svært at føle sig helt fri.'],
      'frakoblet':['FRAKOBLET','Du tilpasser dig ofte før du mærker efter. Mange lærer det tidligt. Problemet er, at man kan blive så god til at fungere, at man glemmer hvad man føler.']
    }
  },
  intention: {
    title:'INTENTION', subtitle:'Det du rækker efter',
    states:{
      'bevægelse':['I BEVÆGELSE','Du virker ikke færdig med dig selv. Noget er ved at flytte sig. Det kan være rodet. Men det kan også være begyndelsen på mere frihed.'],
      'ambitiøs':['AMBITIØS','Retning betyder meget for dig. Du vil fremad. Det kan give kraft. Men spørgsmålet er, om målet faktisk er dit, eller om du har arvet det.'],
      'søgende':['SØGENDE','Du har flere spørgsmål end svar. Det kan føles ustabilt. Men tvivl er ikke altid svaghed. Nogle gange er det første tegn på ærlighed.'],
      'opgørende':['OPGØRENDE','Du virker træt af gamle roller, regler eller forventninger. Du vil væk fra noget. Det kan blive frihed. Det kan også blive en ny måde at være styret på.']
    }
  }
};

let index = 0;
let history = [];
let scores = {signatur:{}, arv:{}, krop:{}, intention:{}};

function addScore(obj){Object.entries(obj).forEach(([cat,state])=>{scores[cat][state]=(scores[cat][state]||0)+1;});}
function resetScores(){scores={signatur:{}, arv:{}, krop:{}, intention:{}}; history.forEach(h=>addScore(h));}
function best(cat){const entries=Object.entries(scores[cat]); if(!entries.length) return Object.keys(resultTexts[cat].states)[0]; return entries.sort((a,b)=>b[1]-a[1])[0][0];}

function showQuestion(){
  const item = questions[index];
  document.getElementById('questionCount').textContent = `${String(index+1).padStart(2,'0')} / ${questions.length}`;
  document.getElementById('layerName').textContent = item.layer;
  document.getElementById('layerIntro').textContent = layers[item.layer];
  document.getElementById('questionText').textContent = item.q;
  const answers = document.getElementById('answers'); answers.innerHTML='';
  item.a.forEach(([label,score])=>{
    const btn=document.createElement('button'); btn.className='answer-btn'; btn.textContent=label;
    btn.onclick=()=>{history[index]=score; index++; if(index>=questions.length) showResult(); else showQuestion();};
    answers.appendChild(btn);
  });
  document.getElementById('backBtn').style.visibility = index === 0 ? 'hidden' : 'visible';
}

function showResult(){
  resetScores();
  document.getElementById('quiz').classList.add('hidden');
  document.getElementById('result').classList.remove('hidden');
  const wardrobe = document.getElementById('wardrobe'); wardrobe.innerHTML='';
  ['signatur','arv','krop','intention'].forEach(cat=>{
    const st = best(cat); const data = resultTexts[cat]; const txt = data.states[st];
    const div=document.createElement('div'); div.className='wardrobe-module';
    div.innerHTML = `<h3>${data.title}</h3><p class="quiz-kicker">${data.subtitle}</p><p class="state">${txt[0]}</p><p class="result-text">${txt[1]}</p>`;
    wardrobe.appendChild(div);
  });
}

document.getElementById('startBtn').onclick=()=>{document.getElementById('intro').classList.add('hidden');document.getElementById('quiz').classList.remove('hidden');showQuestion();};
document.getElementById('backBtn').onclick=()=>{if(index>0){index--; showQuestion();}};
document.getElementById('restartBtn').onclick=()=>{index=0;history=[];document.getElementById('result').classList.add('hidden');document.getElementById('intro').classList.remove('hidden');};
