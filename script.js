// --- DEEL 1: DATA VOOR MUZIEKQUIZ (30 items) ---
// **BELANGRIJK:** Vervang de EXAMPLE URL's door echte Spotify-links uit de Nederlandse Top 40 (1990-2010).
const musicTracks = [
    // 15 nummers "Voor 2000" (1990-1999)
    { url: "https://open.spotify.com/track/7onAFA3kzCPJWG3gvvMxhx?si=LFFjmw_oTb-K0QYnEyk_kQ", label: "Voor 2000", title: "Voorbeeld 1993 nummer" },
    { url: "https://example.com/spotify/voor2000/2", label: "Voor 2000", title: "Voorbeeld 1996 nummer" },
    { url: "https://example.com/spotify/voor2000/3", label: "Voor 2000", title: "Voorbeeld 1991 nummer" },
    { url: "https://example.com/spotify/voor2000/4", label: "Voor 2000", title: "Voorbeeld 1997 nummer" },
    { url: "https://example.com/spotify/voor2000/5", label: "Voor 2000", title: "Voorbeeld 1994 nummer" },
    { url: "https://example.com/spotify/voor2000/6", label: "Voor 2000", title: "Voorbeeld 1992 nummer" },
    { url: "https://example.com/spotify/voor2000/7", label: "Voor 2000", title: "Voorbeeld 1998 nummer" },
    { url: "https://example.com/spotify/voor2000/8", label: "Voor 2000", title: "Voorbeeld 1995 nummer" },
    { url: "https://example.com/spotify/voor2000/9", label: "Voor 2000", title: "Voorbeeld 1990 nummer" },
    { url: "https://example.com/spotify/voor2000/10", label: "Voor 2000", title: "Voorbeeld 1999 nummer" },
    { url: "https://example.com/spotify/voor2000/11", label: "Voor 2000", title: "Voorbeeld 1993 nr 2" },
    { url: "https://example.com/spotify/voor2000/12", label: "Voor 2000", title: "Voorbeeld 1996 nr 2" },
    { url: "https://example.com/spotify/voor2000/13", label: "Voor 2000", title: "Voorbeeld 1991 nr 2" },
    { url: "https://example.com/spotify/voor2000/14", label: "Voor 2000", title: "Voorbeeld 1997 nr 2" },
    { url: "https://example.com/spotify/voor2000/15", label: "Voor 2000", title: "Voorbeeld 1994 nr 2" },

    // 15 nummers "Na 2000" (2000-2010)
    { url: "https://example.com/spotify/na2000/16", label: "Na 2000", title: "Voorbeeld 2003 nummer" },
    { url: "https://example.com/spotify/na2000/17", label: "Na 2000", title: "Voorbeeld 2007 nummer" },
    { url: "https://example.com/spotify/na2000/18", label: "Na 2000", title: "Voorbeeld 2001 nummer" },
    { url: "https://example.com/spotify/na2000/19", label: "Na 2000", title: "Voorbeeld 2005 nummer" },
    { url: "https://example.com/spotify/na2000/20", label: "Na 2000", title: "Voorbeeld 2009 nummer" },
    { url: "https://example.com/spotify/na2000/21", label: "Na 2000", title: "Voorbeeld 2004 nummer" },
    { url: "https://example.com/spotify/na2000/22", label: "Na 2000", title: "Voorbeeld 2008 nummer" },
    { url: "https://example.com/spotify/na2000/23", label: "Na 2000", title: "Voorbeeld 2002 nummer" },
    { url: "https://example.com/spotify/na2000/24", label: "Na 2000", title: "Voorbeeld 2006 nummer" },
    { url: "https://example.com/spotify/na2000/25", label: "Na 2000", title: "Voorbeeld 2010 nummer" },
    { url: "https://example.com/spotify/na2000/26", label: "Na 2000", title: "Voorbeeld 2003 nr 2" },
    { url: "https://example.com/spotify/na2000/27", label: "Na 2000", title: "Voorbeeld 2007 nr 2" },
    { url: "https://example.com/spotify/na2000/28", label: "Na 2000", title: "Voorbeeld 2001 nr 2" },
    { url: "https://example.com/spotify/na2000/29", label: "Na 2000", title: "Voorbeeld 2005 nr 2" },
    { url: "https://example.com/spotify/na2000/30", label: "Na 2000", title: "Voorbeeld 2009 nr 2" },
];

// --- DEEL 2: DATA VOOR F1 QUIZ (30 items) ---
const f1Questions = [
    // Technische Vragen
    { question: "Wat is de minimale bandenspanning die de FIA voorschrijft voor een F1-band tijdens de race? (Technisch)", answer: "Dit varieert per circuit en bandencompound, maar wordt voor elke race specifiek vastgesteld door de FIA en Pirelli." },
    { question: "Wat is de hoofdreden dat een F1-motor tegenwoordig een V6-hybride turbomotor is, in plaats van een V10 of V12? (Technisch)", answer: "Brandstofefficiëntie en relevantie voor straatauto's. De huidige regels vereisen een maximale brandstofhoeveelheid per race." },
    { question: "Wat is de functie van de MGU-H (Motor Generator Unit - Heat) in een F1-hybride systeem? (Technisch)", answer: "Het zet warmte-energie uit de uitlaatgassen om in elektrische energie, of het drijft de turbo aan om 'turbo lag' tegen te gaan." },
    { question: "Wat is het effect van 'ground effect' op een Formule 1-auto? (Technisch)", answer: "Het creëert downforce door de lucht onder de auto snel te laten stromen, waardoor de auto als het ware aan de baan wordt 'vastgezogen'." },
    { question: "Wat is de technische term voor het fenomeen waarbij de auto verticaal begint te stuiteren bij hoge snelheid? (Technisch)", answer: "Porpoising." },
    { question: "Waar staat DRS voor en wanneer mag een coureur het gebruiken? (Technisch)", answer: "Drag Reduction System. Het mag alleen gebruikt worden op vooraf bepaalde DRS-zones als de coureur binnen 1 seconde van de auto voor zich rijdt." },
    { question: "Wat is een 'flat spot' op een F1-band? (Technisch)", answer: "Een platte plek op de band veroorzaakt door het blokkeren van een wiel tijdens hard remmen." },
    { question: "Wat is de functie van de 'halo' op een moderne F1-auto? (Technisch)", answer: "Een titanium beschermingsstructuur om de coureur te beschermen tegen rondvliegende brokstukken of bij een crash." },
    { question: "Wat gebeurt er als een coureur 'blauw licht' krijgt tijdens de pitstop? (Technisch)", answer: "Dit geeft aan dat de pitstop klaar is, maar dat er een auto aankomt in de pitstraat en de coureur moet wachten (onveilige release)." },
    { question: "Hoeveel versnellingen (vooruit) heeft een moderne Formule 1-auto? (Technisch)", answer: "8 versnellingen." },
    { question: "Wat is de functie van de Barge Boards (nu vervangen)? (Technisch)", answer: "Het sturen van de luchtstroom rond de zijkanten van de auto om deze efficiënter te maken." },
    { question: "Welke vloeistof wordt gebruikt om F1-motoren te koelen? (Technisch)", answer: "Water met een koelmiddeladditief." },
    { question: "Wat is de straf die wordt gegeven voor het te vroeg loslaten van de koppeling bij de start (jump start)? (Technisch)", answer: "Een tijdstraf, meestal 5 of 10 seconden." },
    { question: "Wat is het minimale gewicht (inclusief coureur) van een moderne F1-auto in kg? (Technisch)", answer: "Rond de 798 kg (dit varieert lichtjes per seizoen)." },
    { question: "Wat is het maximale toerental (RPM) van een moderne V6 hybride F1-motor? (Technisch)", answer: "De FIA stelt een limiet van 15.000 RPM, maar in de praktijk halen ze ongeveer 12.000 RPM." },

    // Max Verstappen Vragen
    { question: "Wat is het vaste racenummer van Max Verstappen in de Formule 1 (buiten de 1)? (Max)", answer: "33." },
    { question: "In welk jaar won Max Verstappen zijn eerste Formule 1 wereldtitel? (Max)", answer: "2021." },
    { question: "Welke Grand Prix was de eerste die Max Verstappen won in 2016? (Max)", answer: "De Grand Prix van Spanje (bij zijn debuut voor Red Bull Racing)." },
    { question: "In welk land werd Max Verstappen geboren? (Max)", answer: "Nederland." },
    { question: "Wat is de volledige naam van het Formule 1-team waarvoor Max Verstappen rijdt? (Max)", answer: "Oracle Red Bull Racing." },
    { question: "Wie is de teamgenoot van Max Verstappen bij Red Bull Racing? (Max)", answer: "Sergio Pérez." },
    { question: "Wat is de naam van de race-ingenieur van Max Verstappen? (Max)", answer: "Gianpiero Lambiase." },
    { question: "Welk record brak Max Verstappen in 2023 op het gebied van gewonnen races in één seizoen? (Max)", answer: "Hij won 19 races in één seizoen (een nieuw record)." },
    { question: "Op welke leeftijd maakte Max Verstappen zijn Formule 1-debuut? (Max)", answer: "17 jaar." },
    { question: "Welke motorleverancier gebruikt Red Bull Racing, het team van Max? (Max)", answer: "Honda (onder de merknaam Red Bull Powertrains)." },

    // Lando Norris Vragen
    { question: "Wat is het vaste racenummer van Lando Norris in de Formule 1? (Norris)", answer: "4." },
    { question: "Voor welk Formule 1-team rijdt Lando Norris? (Norris)", answer: "McLaren." },
    { question: "Wat is de bijnaam van de relatie tussen Lando Norris en zijn voormalige teamgenoot Daniel Ricciardo? (Norris)", answer: "Shoey / 'bromance'." },
    { question: "In welk jaar maakte Lando Norris zijn Formule 1-debuut? (Norris)", answer: "2019." },
    { question: "Welke Grand Prix won Lando Norris voor het eerst? (Norris)", answer: "De Grand Prix van Miami (2024)." },
    { question: "In welk land werd Lando Norris geboren? (Norris)", answer: "Groot-Brittannië." },
    { question: "Wat is de naam van Lando Norris's e-sports en lifestyle merk? (Norris)", answer: "Quadrant." },
    { question: "Wat is de naam van de voormalige coureur die nu de CEO is van McLaren? (Norris)", answer: "Zak Brown." },
    { question: "In welke raceklasse heeft Lando Norris gereden voordat hij naar F1 kwam, waarin hij tweede werd? (Norris)", answer: "Formule 2 (in 2018)." },
    { question: "Wat is de bijnaam van de oranje kleurstelling die McLaren soms gebruikt? (Norris)", answer: "Papaya." },
];

// --- DEEL 3: DATA VOOR BORDSPEL OPDRACHTEN (1 dobbelsteen, 6 opties) ---
// De opdrachten zijn gelinkt aan de dobbelsteenworp (index 0 is worp 1, index 5 is worp 6).
const diceCommands = [
    // Index 0 (Worp 1)
    { result: 1, command: "Lekke Band: Sla je volgende beurt over. Pitstop gemist!" },
    // Index 1 (Worp 2)
    { result: 2, command: "Perfecte Pitstop: Ga direct 2 stappen vooruit. De banden waren er supersnel onder!" },
    // Index 2 (Worp 3)
    { result: 3, command: "Safety Car: Alle spelers blijven 1 beurt staan (inclusief jijzelf)." },
    // Index 3 (Worp 4)
    { result: 4, command: "Vuile Lucht (Dirty Air): Ga 1 stap terug. Je kunt niet voorbij de auto voor je komen!" },
    // Index 4 (Worp 5)
    { result: 5, command: "DRS Geopend: Gooi nog een keer! Je hebt een snelheidsvoordeel." },
    // Index 5 (Worp 6)
    { result: 6, command: "Pole Position Start: Ga direct 3 stappen vooruit. Een geweldige start!" },
];

// --- FUNCTIES VOOR DE SPELMECHANICA ---

let currentF1Question = null;

/**
 * Toont de geselecteerde view en verbergt alle andere.
 * @param {string} viewId - De ID van de view die getoond moet worden (bijv. 'main-menu').
 */
function showView(viewId) {
    const views = document.querySelectorAll('.view');
    
    views.forEach(view => {
        if (view.id === viewId) {
            view.classList.remove('hidden');
            view.classList.add('active');

            // Reset de content als we teruggaan naar het hoofdmenu
            if (viewId === 'main-menu') {
                document.getElementById('music-output').innerHTML = "Druk op 'Start Lied' om te beginnen.";
                document.getElementById('f1-output').innerHTML = "Druk op 'Nieuwe Vraag' om te starten.";
                document.getElementById('f1-answer-btn').style.display = 'none';
                document.getElementById('board-output').innerHTML = "";
            }
        } else {
            view.classList.remove('active');
            view.classList.add('hidden');
        }
    });

    window.scrollTo(0, 0);
}


/**
 * Functie voor de Muziekquiz
 */
function startMusicQuiz() {
    const outputDiv = document.getElementById('music-output');

    // Kies een willekeurig nummer
    const randomIndex = Math.floor(Math.random() * musicTracks.length);
    const track = musicTracks[randomIndex];

    // Creëer de link en de vraag
    const outputHTML = `
        <p><strong>OPDRACHT:</strong> Raad of dit nummer **${track.label}** is uitgebracht.</p>
        <p>Klik op de link en start het nummer:</p>
        <p><a href="${track.url}" target="_blank">🎧 Klik hier voor de Spotify Link</a></p>
        <p style="margin-top: 15px; font-weight: bold;">Het antwoord is: ${track.label}</p>
    `;

    outputDiv.innerHTML = outputHTML;
}

/**
 * Functie voor de F1 Quiz
 */
function startF1Quiz() {
    const outputDiv = document.getElementById('f1-output');
    const answerBtn = document.getElementById('f1-answer-btn');

    // Kies een willekeurige vraag
    const randomIndex = Math.floor(Math.random() * f1Questions.length);
    currentF1Question = f1Questions[randomIndex];

    // Haal de categorie en de vraagtekst op
    const category = currentF1Question.question.match(/\((.*?)\)/) ? currentF1Question.question.match(/\((.*?)\)/)[1] : 'Algemeen';
    const questionText = currentF1Question.question.replace(/\s*\(.*?\)\s*/g, '');

    // Toon de vraag en verberg het antwoord
    outputDiv.innerHTML = `
        <p><strong>Categorie:</strong> ${category}</p>
        <p><strong>Vraag:</strong> ${questionText}</p>
        <p id="f1-answer" style="display: none; color: #e30613; font-weight: bold; margin-top: 10px;">Antwoord: ${currentF1Question.answer}</p>
    `;

    // Toon de knop om het antwoord te onthullen
    answerBtn.style.display = 'block';
}

/**
 * Functie om het F1 Antwoord te tonen
 */
function showF1Answer() {
    const answerText = document.getElementById('f1-answer');
    const answerBtn = document.getElementById('f1-answer-btn');

    if (answerText) {
        answerText.style.display = 'block';
        answerBtn.style.display = 'none';
    }
}


/**
 * Functie voor de Bordspel Opdracht
 */
function rollDice() {
    const outputDiv = document.getElementById('board-output');

    // Simuleer een dobbelsteenworp (1 tot en met 6)
    const roll = Math.floor(Math.random() * 6) + 1;

    // Haal de bijbehorende opdracht op (array is 0-indexed, dus -1)
    const command = diceCommands[roll - 1];

    // Toon de worp en de opdracht
    outputDiv.innerHTML = `
        <p style="font-size: 30px; font-weight: bold; color: #007bff;">DOBBELSTEEN: ${roll}!</p>
        <p><strong>OPDRACHT:</strong> ${command.command}</p>
    `;
}

// Zorgt ervoor dat we bij het laden op het hoofdmenu starten en knoppen verstopt zijn
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('f1-answer-btn').style.display = 'none';
    showView('main-menu'); 
});
