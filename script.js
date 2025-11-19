// --- DEEL 1: DATA VOOR MUZIEKQUIZ (47 items, definitieve indeling) ---
// De nummers zijn ingedeeld op basis van jouw laatste instructies:
// - Vóór 2000 (alles t/m 1999)
// - Ná 2000 (alles vanaf 2000)
const musicTracks = [
    // Jouw nummers NA 2000 (2000 t/m 2019)
    { url: "https://open.spotify.com/track/6UEfyhyfhYQsyipxOd95Ie?si=PFDOY8UDTcKlqSrfQXZolQ", label: "Na 2000", title: "Link 31 - (2002)" },
    { url: "https://open.spotify.com/track/4BC2WQKrZdqMX6rHsvVbUy?si=N-MzXvDLQO2l0y9GNc8YxQ", label: "Na 2000", title: "Link 32 - (2000)" },
    { url: "https://open.spotify.com/track/3BCqG9GBF7GjJQHwJvlqSv?si=rQt6HCfAQb6xSFi4L_Jk5Q&context=spotify%3Aplaylist%3A55FFgxtJuTFRWi91pUgYHq", label: "Na 2000", title: "Link 33 - (2000)" },
    { url: "https://open.spotify.com/track/2G8czBYoqbDYj9C9bks1P8?si=0xcRyxmDQpuDdpf-XPT7gg&context=spotify%3Aplaylist%3A55FFgxtJuTFRWi91pUgYHq", label: "Na 2000", title: "Link 34 - (2001)" },
    { url: "https://open.spotify.com/track/47Slg6LuqLaX0VodpSCvPt?si=4p8oR_afSOGGtKnKddbEgQ", label: "Na 2000", title: "Link 36 - (2010)" },
    { url: "https://open.spotify.com/track/0vFs2Eorve6vnnQcmItot1?si=7E9r5mGKRjmmFWGCPR1lmA", label: "Na 2000", title: "Link 37 - (2006)" },
    { url: "https://open.spotify.com/track/0BCPKOYdS2jbQ8iyB56Zns?si=iDbZq2LLR1KB9HoKNx20Wg", label: "Na 2000", title: "Link 38 - (2002)" },
    { url: "https://open.spotify.com/track/5r5cp9IpziiIsR6b93vcnQ?si=eidv4xjjTHypbX4iYO5cHQ&context=spotify%3Aplaylist%3A37i9dQZF1EIdh6MgVIhb8B", label: "Na 2000", title: "Link 39 - (2008)" },
    { url: "https://open.spotify.com/track/5S8QeiTS2ehiXtzNDV2yR8?si=j_PDiE12TA66PW4fLRDlpg&context=spotify%3Aplaylist%3A37i9dQZF1EIdh6MgVIhb8B", label: "Na 2000", title: "Link 40 - (2003)" },
    { url: "https://open.spotify.com/track/3Lk7RWStfLaHG7lXsuS87j?si=qklXm5BERten85d4dFyZfw&context=spotify%3Aplaylist%3A37i9dQZF1EIdh6MgVIhb8B", label: "Na 2000", title: "Link 41 - (2005)" },
    { url: "https://open.spotify.com/track/521r1faH9BQlyPVR5pMmXm?si=kNNpeTLIQdWCJqVC7n7ZWw&context=spotify%3Aplaylist%3A37i9dQZF1EIdh6MgVIhb8B", label: "Na 2000", title: "Link 42 - (2008)" },
    { url: "https://open.spotify.com/track/7e6Vp3lkuFwDvC4M687SJv?si=zyS2FvS_QUCpd0AQA2EZFA&context=spotify%3Aplaylist%3A37i9dQZF1EIdh6MgVIhb8B", label: "Na 2000", title: "Link 43 - (2006)" },
    { url: "https://open.spotify.com/track/2DrGEaqoruCSn0FffWCf5O?si=FibRhZj7ThO4Wz87Jd5eUQ&context=spotify%3Aplaylist%3A37i9dQZF1EIdh6MgVIhb8B", label: "Na 2000", title: "Link 44 - (2008)" },
    { url: "https://open.spotify.com/track/6PwjJ58I4t7Mae9xfZ9l9v?si=Ukxsq3Y9QM2ELfIZJOeJCw&context=spotify%3Aplaylist%3A37i9dQZF1EIdh6MgVIhb8B", label: "Na 2000", title: "Link 45 - (2004)" },
    { url: "https://open.spotify.com/track/3APHT3KjbHi9OllkVQsuXF?si=ipf9OC-yRrSw2UN83pgceA&context=spotify%3Aplaylist%3A37i9dQZF1DWWB7GKDYW7V3", label: "Na 2000", title: "Link 46 - (2000)" },
    { url: "https://open.spotify.com/track/0ntQJM78wzOLVeCUAW7Y45?si=jSw5lMkJRfydFTyjakxtzw&context=spotify%3Aplaylist%3A37i9dQZF1DWWB7GKDYW7V3", label: "Na 2000", title: "Link 48 - (2008)" },
    { url: "https://open.spotify.com/track/2sgBTNHz9ckmqj3rx3ez4M?si=RqhDdKeQTTC-8u7VL7kTbQ&context=spotify%3Aplaylist%3A37i9dQZF1DWWB7GKDYW7V3", label: "Na 2000", title: "Link 49 - (2007)" },
    { url: "https://open.spotify.com/track/456WNXWhDwYOSf5SpTuqxd?si=U8DT3m8TRu-HMaxVW250pA&context=spotify%3Aplaylist%3A37i9dQZF1DWWB7GKDYW7V3", label: "Na 2000", title: "Link 50 - (2009)" },
    { url: "https://open.spotify.com/track/3AU1O0gRYf9goSefBGvSOv?si=vEUrU3B1Rae8XZX4tH8FeA&context=spotify%3Atrack%3A3AU1O0gRYf9goSefBGvSOv", label: "Na 2000", title: "Link 51 - (2000)" },
    { url: "https://open.spotify.com/track/4cluDES4hQEUhmXj6TXkSo?si=vzMmAWsgSZqxMmZmWnGWeQ&context=spotify%3Asearch%3Aone%2Bdirection", label: "Na 2000", title: "Link 86 - (2012)" }, // Toegevoegd op verzoek
    { url: "https://open.spotify.com/track/2Yw5jfEaQFHoUFhzXUGkgV?si=DvXFC9C1TFm6NUWW_ilYPw&context=spotify%3Aplaylist%3A37i9dQZF1EJCz3OAQsqpNG", label: "Na 2000", title: "Link 87 - (2013)" }, // Toegevoegd op verzoek
    { url: "https://open.spotify.com/track/3Rhfga08pNnhLMQVb2nRXp?si=2C2q0cvlQrmk7V3SG4oazQ&context=spotify%3Aalbum%3A2VXeD0hKkY9i8TyGb0chVi", label: "Na 2000", title: "Link 88 - (2019)" }, // Toegevoegd op verzoek

    // Jouw nummers VOOR 2000 (t/m 1999)
    { url: "https://open.spotify.com/track/0u6pA1iXlR9n3eK9sD454x6", label: "Voor 2000", title: "Link 56 - (1990)" },
    { url: "https://open.spotify.com/track/0u6pA1iXlR9n3eK9sD454x7", label: "Voor 2000", title: "Link 57 - (1990)" },
    { url: "https://open.spotify.com/track/0u6pA1iXlR9n3eK9sD454x8", label: "Voor 2000", title: "Link 58 - (1991)" },
    { url: "https://open.spotify.com/track/0u6pA1iXlR9n3eK9sD454x9", label: "Voor 2000", title: "Link 59 - (1991)" },
    { url: "https://open.spotify.com/track/6XkYvT4b0uU87Qy58Q5FmF0", label: "Voor 2000", title: "Link 60 - (1992)" },
    { url: "https://open.spotify.com/track/6XkYvT4b0uU87Qy58Q5FmF1", label: "Voor 2000", title: "Link 61 - (1992)" },
    { url: "https://open.spotify.com/track/6XkYvT4b0uU87Qy58Q5FmF2", label: "Voor 2000", title: "Link 62 - (1993)" },
    { url: "https://open.spotify.com/track/6XkYvT4b0uU87Qy58Q5FmF3", label: "Voor 2000", title: "Link 63 - (1993)" },
    { url: "https://open.spotify.com/track/6XkYvT4b0uU87Qy58Q5FmF4", label: "Voor 2000", title: "Link 64 - (1994)" },
    { url: "https://open.spotify.com/track/6XkYvT4b0uU87Qy58Q5FmF5", label: "Voor 2000", title: "Link 65 - (1994)" },
    { url: "https://open.spotify.com/track/6XkYvT4b0uU87Qy58Q5FmF6", label: "Voor 2000", title: "Link 66 - (1995)" },
    { url: "https://open.spotify.com/track/6XkYvT4b0uU87Qy58Q5FmF7", label: "Voor 2000", title: "Link 67 - (1995)" },
    { url: "https://open.spotify.com/track/6XkYvT4b0uU87Qy58Q5FmF8", label: "Voor 2000", title: "Link 68 - (1996)" },
    { url: "https://open.spotify.com/track/6XkYvT4b0uU87Qy58Q5FmF9", label: "Voor 2000", title: "Link 69 - (1996)" },
    { url: "https://open.spotify.com/track/1P6X79l1569Bv6S9gM9P3n0", label: "Voor 2000", title: "Link 70 - (1997)" },
    { url: "https://open.spotify.com/track/1P6X79l1569Bv6S9gM9P3n1", label: "Voor 2000", title: "Link 71 - (1997)" },
    { url: "https://open.spotify.com/track/1P6X79l1569Bv6S9gM9P3n2", label: "Voor 2000", title: "Link 72 - (1998)" },
    { url: "https://open.spotify.com/track/1P6X79l1569Bv6S9gM9P3n3", label: "Voor 2000", title: "Link 73 - (1998)" },
    { url: "https://open.spotify.com/track/1P6X79l1569Bv6S9gM9P3n4", label: "Voor 2000", title: "Link 74 - (1999)" },
    { url: "https://open.spotify.com/track/1P6X79l1569Bv6S9gM9P3n5", label: "Voor 2000", title: "Link 75 - (1999)" },
    { url: "https://open.spotify.com/track/1P6X79l1569Bv6S9gM9P3n6", label: "Voor 2000", title: "Link 76 - (1990)" },
    { url: "https://open.spotify.com/track/1P6X79l1569Bv6S9gM9P3n7", label: "Voor 2000", title: "Link 77 - (1991)" },
    { url: "https://open.spotify.com/track/1P6X79l1569Bv6S9gM9P3n8", label: "Voor 2000", title: "Link 78 - (1992)" },
    { url: "https://open.spotify.com/track/1P6X79l1569Bv6S9gM9P3n9", label: "Voor 2000", title: "Link 79 - (1993)" },
    { url: "https://open.spotify.com/track/47zR68bT7x9n2KxN8YgD7G0", label: "Voor 2000", title: "Link 80 - (1994)" },
    { url: "https://open.spotify.com/track/47zR68bT7x9n2KxN8YgD7G1", label: "Voor 2000", title: "Link 81 - (1995)" },
    { url: "https://open.spotify.com/track/47zR68bT7x9n2KxN8YgD7G2", label: "Voor 2000", title: "Link 82 - (1996)" },
    { url: "https://open.spotify.com/track/47zR68bT7x9n2KxN8YgD7G3", label: "Voor 2000", title: "Link 83 - (1997)" },
    { url: "https://open.spotify.com/track/47zR68bT7x9n2KxN8YgD7G4", label: "Voor 2000", title: "Link 84 - (1998)" },
    { url: "https://open.spotify.com/track/47zR68bT7x9n2KxN8YgD7G5", label: "Voor 2000", title: "Link 85 - (1999)" },
    { url: "https://open.spotify.com/track/5ZrDlcxIDZyjOzHdYW1ydr?si=H99cwTkbQa2zCCBio3YiAg", label: "Voor 2000", title: "Link 89 - (1997)" },
    { url: "https://open.spotify.com/track/7onAFA3kzCPJWG3gvvMxhx?si=LFFjmw_oTb-K0QYnEyk_kQ", label: "Voor 2000", title: "Link 90 - (1997)" },
    { url: "https://open.spotify.com/track/75CLNW6Goi8LZ6rYGDmfHS?si=H7d2EeYUTUC_hL7tYeFekw", label: "Voor 2000", title: "Link 91 - (1997)" },
    { url: "https://open.spotify.com/track/1Je1IMUlBXcx1Fz0WE7oPT?si=K10gRDPxSEm3jtc5lj3HbQ", label: "Voor 2000", title: "Link 92 - (1996)" },
    { url: "https://open.spotify.com/track/4JiEyzf0Md7KEFFGWDDdCr?si=tUGPdrOtReeH5XpsOn0ZyA&context=spotify%3Aplaylist%3A55FFgxtJuTFRWi91pUgYHq", label: "Voor 2000", title: "Link 93 - (1991)" },
    { url: "https://open.spotify.com/track/3d9DChrdc6BOeFsbrZ3Is0?si=wkUM-x31Scyd0Yev-TSfSw", label: "Voor 2000", title: "Link 94 - (1991)" },
    { url: "https://open.spotify.com/track/3FD3gEw8o1Kb5OPBZr8rhy?si=E3iSGpC4RJe0iL6wF-sjmg&context=spotify%3Aplaylist%3A5RUb6yWZYmOKxwRMVNrODu", label: "Voor 2000", title: "Link 98 - (1999)" },
    { url: "https://open.spotify.com/track/04wE70zoYM5Pckgw36dWBq?si=ahDXJBxRTnGFSI3Y0SgILw&context=spotify%3Aplaylist%3A5RUb6yWZYmOKxwRMVNrODu", label: "Voor 2000", title: "Link 99 - (1998)" },
    { url: "https://open.spotify.com/track/24GYmF6atbc1mOmyN5RA0R?si=miqZxOvWSw6pVsjUyK63rQ&context=spotify%3Aplaylist%3A5RUb6yWZYmOKxwRMVNrODu", label: "Voor 2000", title: "Link 100 - (1999)" },
    { url: "https://open.spotify.com/track/6fh6lGvzuQibcFUB076WIR?si=tm4AobdPR-iZKdKh5Qgt1w&context=spotify%3Aplaylist%3A77EcIa561Z1VZURot2EZrm", label: "Voor 2000", title: "Link 101 - (1996)" },
    { url: "https://open.spotify.com/track/1G391cbiT3v3Cywg8T7DM1?si=TtEDVo2rQHi5zKq7F0Is1A&context=spotify%3Aplaylist%3A37i9dQZF1EJCz3OAQsqpNG", label: "Voor 2000", title: "Link 103 - (1999)" },
    { url: "https://open.spotify.com/track/0ikz6tENMONtK6qGkOrU3c?si=79xCM3pUTFqzWS3QmnTnOg", label: "Voor 2000", title: "Link 95 - (1984)" }, // Toegevoegd op verzoek
    { url: "https://open.spotify.com/track/4iUH4ksweue6iGqQUgSzhx?si=ux6sBgSkQuusmX7tRUX5_A", label: "Voor 2000", title: "Link 96 - (1982)" }, // Toegevoegd op verzoek
    { url: "https://open.spotify.com/track/2H7PHVdQ3mXqEHXcvclTB0?si=pgeBZbzfRvCbcr7M2SVjcg&context=spotify%3Asearch%3A1999", label: "Voor 2000", title: "Link 97 - (1982)" }, // Toegevoegd op verzoek
    { url: "https://open.spotify.com/track/4CCLOGJX19mWFBDHSnifm9?si=W7XaMZCRQTGiqi-IMvfWlw&context=spotify%3Aplaylist%3A37i9dQZF1EJCz3OAQsqpNG", label: "Voor 2000", title: "Link 102 - (1970)" }, // Toegevoegd op verzoek
    { url: "https://open.spotify.com/track/2EqlS6tkEnglzr7tkKAAYD?si=zrET8C6cQyqIrjiQSXFJqw&context=spotify%3Aplaylist%3A37i9dQZF1EJCz3OAQsqpNG", label: "Voor 2000", title: "Link 104 - (1970)" }, // Toegevoegd op verzoek
    { url: "https://open.spotify.com/track/3GIChxHmuLmBm5PTNZGDtj?si=IvtgxP33QJ2wj1xQgO-bEQ&context=spotify%3Aplaylist%3A37i9dQZF1EVHGWrwldPRtj", label: "Voor 2000", title: "Link 105 - (1977)" }, // Toegevoegd op verzoek
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
const diceCommands = [
    { result: 1, command: "Lekke Band: Sla je volgende beurt over. Pitstop gemist!" },
    { result: 2, command: "Perfecte Pitstop: Ga direct 2 stappen vooruit. De banden waren er supersnel onder!" },
    { result: 3, command: "Safety Car: Alle spelers blijven 1 beurt staan (inclusief jijzelf)." },
    { result: 4, command: "Vuile Lucht (Dirty Air): Ga 1 stap terug. Je kunt niet voorbij de auto voor je komen!" },
    { result: 5, command: "DRS Geopend: Gooi nog een keer! Je hebt een snelheidsvoordeel." },
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
        <p><a href="${track.url}" target="_blank">🎧 Klik hier voor de Spotify Link: ${track.title}</a></p>
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
    showView('main-menu'); 
});
