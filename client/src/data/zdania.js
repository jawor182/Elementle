const zdania = [
    {
        zdanie: 'Słońce zachodziło nad horyzontem, malując niebo odcieniami pomarańczy. Ptaki cichły, ustępując miejsca nocnym istotom.',
		odpowiedz: ['H', 'Na', 'K', 'Ca', 'Ra', 'Sc', 'Y', 'Ac', 'Ta', 'Ni', 'Pt', 'Cn', 'B', 'Al', 'C', 'N', 'P', 'O', 'S', 'Te', 'Po', 'I', 'Ar', 'Ce', 'U', 'Pu', 'Am', 'Ho', 'No', 'Lu']
	},
    {
        zdanie: "Stary zegar na ścianie wybijał dwunastą, a ulice cichły w miasteczku. Tylko wiatr szeptał między drzewami.",
		odpowiedz: ['H', 'Li', 'Na', 'K', 'Y', 'Ta', 'W', 'Ni', 'Pt', 'B', 'Ga', 'C', 'N', 'P', 'As', 'Bi', 'O', 'S', 'Te', 'I', 'At', 'Ar', 'Ce', 'U', 'Am', 'Yb'],
    },
    {
        zdanie: "Na plaży szum fal mieszał się z radosnym śmiechem dzieci. Z każdą chwilą słońce chowało się za horyzontem.",
		odpowiedz: ['H', 'Na', 'K', 'Ra', 'Y', 'La', 'W', 'Os', 'Al', 'C', 'Si', 'Sn', 'N', 'P', 'O', 'S', 'Te', 'F', 'I', 'He', 'Ce', 'U', 'Ho', 'Es'],
    },
    {
        zdanie: "Księżyc wznosił się na nieboskłonie, rzucając blady blask na spokojne ulice miasteczka. Senny pies mruczał na progu domu.",
		odpowiedz: ['Li', 'Na', 'K', 'Ca', 'Y', 'La', 'W', 'Ru', 'Os', 'Ni', 'Zn', 'B', 'C', 'Si', 'N', 'P', 'As', 'O', 'S', 'Se', 'Te', 'Po', 'I', 'Ne', 'Og', 'Ce', 'Pr', 'U', 'Dy', 'Es', 'No'],
    },
    {
        zdanie: "W górach szlak prowadził przez gęsty las, gdzie światło ledwo przenikało przez gałęzie. Odgłosy dzikich zwierząt rozbrzmiewały w oddali.",
		odpowiedz: ['H', 'Li', 'K', 'Ra', 'Y', 'La', 'Ac', 'W', 'Os', 'Ni', 'B', 'Al', 'Ga', 'C', 'N', 'P', 'As', 'O', 'S', 'Br', 'I', 'At', 'Pr', 'Gd', 'Er'],
    },
    {
        zdanie: "Na polu trawy kołysały się w rytmie delikatnego wiatru. Słońce grzało, tworząc złote plamy na ziemi.",
		odpowiedz: ['Li', 'Na', 'K', 'Ra', 'Y', 'La', 'W', 'Ru', 'C', 'Si', 'N', 'P', 'O', 'S', 'Te', 'Po', 'I', 'At', 'Ne', 'Ce', 'U', 'Am', 'Tm', 'Lu'],
    },
    {
        zdanie: "Na festiwalu ludzie tańczyli do pulsującej muzyki, wzbijając pyłki w powietrze. Światła migotały, malując nocne niebo.",
		odpowiedz: ['Li', 'Na', 'K', 'Y', 'Ti', 'Ta', 'W', 'Fe', 'Ni', 'Cn', 'B', 'Al', 'C', 'N', 'P', 'Bi', 'O', 'S', 'Po', 'F', 'I', 'At', 'Ne', 'Ce', 'U', 'Pu', 'Es', 'No', 'Lu'],
    },
    {
        zdanie: "W kawiarni zapach świeżo parzonej kawy mieszał się z dźwiękiem szumu rozmów. Na regale leżały zapomniane książki.",
		odpowiedz: ['H', 'Na', 'K', 'Y', 'Ac', 'W', 'Mn', 'Re', 'Ni', 'Al', 'Ga', 'C', 'Si', 'N', 'P', 'O', 'S', 'Po', 'I', 'Ne', 'Ar', 'Rn', 'Pa', 'U', 'Es'],
    },
    {
        zdanie: "W bibliotece cisza była złotem, a strony książek szeptały tajemnice. Lampy rozświetlały półki, kusząc do odkrywania historii.",
		odpowiedz: ['H', 'Li', 'K', 'Y', 'La', 'Ta', 'W', 'Mn', 'Ni', 'Pt', 'B', 'Tl', 'C', 'Si', 'N', 'P', 'Bi', 'O', 'S', 'Te', 'I', 'Kr', 'Ce', 'U', 'Am'],
    },
    {
        zdanie: "Na polu bitwy odgłosy walki cichły, zostawiając po sobie jedynie ślady zniszczenia. Wiatr niesiony zapachem krwi muskał spalone trawy.",
		odpowiedz: ['H', 'Na', 'K', 'Ra', 'Y', 'La', 'Ac', 'Ta', 'W', 'Os', 'Ni', 'Zn', 'B', 'Al', 'C', 'Si', 'N', 'P', 'Bi', 'O', 'S', 'Po', 'I', 'At', 'He', 'Ne', 'Kr', 'Pa', 'U', 'Dy', 'Es', 'Lu']
    },
    {
        zdanie: "W lesie strumyk szemrał między kamieniami, a ptaki śpiewały na gałęziach drzew. Promienie słońca przebijające się przez liście tworzyły grę świateł.",
		odpowiedz: ['H', 'Li', 'Na', 'K', 'Ca', 'Ra', 'Y', 'Ac', 'Ta', 'W', 'Ru', 'Ni', 'Pt', 'B', 'Ga', 'C', 'Si', 'N', 'P', 'Bi', 'O', 'S', 'Te', 'I', 'At', 'Ce', 'Pr', 'U', 'Am', 'Es'],
    },
    {
        zdanie: "Na dachu budynku siedział gołąb, rozglądając się z ciekawością. Miasto roztaczało się wokół, tętniąc życiem.",
		odpowiedz: ['H', 'Na', 'K', 'Y', 'Ac', 'Ta', 'W', 'Ni', 'B', 'C', 'Si', 'N', 'As', 'O', 'S', 'I', 'U', 'Dy'],
    },
    {
        zdanie: "Na polanie wśród drzew piknikowicze cieszyli się dniem, delektując się smakiem grillowanych potraw. Dzieci biegały po trawie, śmiejąc się i łapiąc motyle.",
		odpowiedz: ['H', 'Li', 'Na', 'K', 'Ra', 'Y', 'La', 'Mo', 'W', 'Ni', 'B', 'Ga', 'C', 'Si', 'N', 'P', 'Bi', 'O', 'S', 'Po', 'I', 'U', 'Sm', 'Es'],
    },
    {
        zdanie: "W muzeum obrazy wisiały na ścianach, opowiadając historie dawnych czasów. Ludzie spacerowali po salach, podziwiając dzieła sztuki.",
		odpowiedz: ['H', 'Li', 'Na', 'K', 'Ra', 'Y', 'La', 'Ac', 'W', 'B', 'Al', 'C', 'Si', 'N', 'P', 'As', 'O', 'S', 'Po', 'Br', 'I', 'Ce', 'Pa', 'U', 'Eu', 'Er', 'Lu'],
    },
    {
        zdanie: "Na farmie kury gadały do siebie, a słońce grzało od rana. Rolnicy pracowali w polu, dbając o plony.",
		odpowiedz: ['Li', 'Na', 'K', 'Ba', 'Ra', 'Y', 'Ac', 'Db', 'W', 'Co', 'Ni', 'B', 'Al', 'Ga', 'C', 'Si', 'N', 'P', 'Bi', 'O', 'S', 'Po', 'F', 'I', 'Ar', 'Ce', 'Pr', 'U', 'Lu']
    },
    {
        zdanie: "Na kempingu ognisko rzucało ciepłe światło na twarze ludzi. Gwiazdy migotały na niebie, tworząc niezapomniany widok.",
		odpowiedz: ['Na', 'K', 'Ca', 'Y', 'Ta', 'W', 'Mn', 'Ni', 'B', 'In', 'C', 'N', 'P', 'Bi', 'O', 'S', 'Po', 'I', 'At', 'Ar', 'Og', 'U', 'Dy', 'Lu'],
    },
    {
        zdanie: "Na stacji kolejowej pociąg zatrzymał się, wydając charakterystyczny dźwięk hamowania. Pasażerowie wysiadali, gotowi do nowej przygody.",
		odpowiedz: ['H', 'Li', 'Na', 'K', 'Ra', 'Y', 'Ac', 'Ta', 'Mo', 'W', 'Ni', 'Zn', 'Al', 'C', 'Si', 'N', 'P', 'As', 'O', 'S', 'Te', 'Po', 'I', 'At', 'Ar', 'Pr', 'Pa', 'Am', 'Dy', 'Er', 'No'],
    },
    {
        zdanie: "W kościele organy grały dźwięki, napełniając przestrzeń majestatem. Ludzie modlili się w skupieniu, szukając spokoju wewnętrznego.",
		odpowiedz: ['Li', 'Na', 'K', 'Ra', 'Y', 'Ta', 'Mo', 'W', 'Ni', 'Rg', 'Zn', 'Ga', 'C', 'Si', 'N', 'P', 'O', 'S', 'Te', 'Po', 'I', 'At', 'Ne', 'Pr', 'U', 'Es', 'Lu'],
    },
    {
        zdanie: "Na wybrzeżu fale uderzały o skały, tworząc białe piany. Wiatr niosący sól morska rozczesywał włosy spacerowiczom.",
		odpowiedz: ['Na', 'K', 'Y', 'Ac', 'Mo', 'W', 'Os', 'Ni', 'B', 'Al', 'C', 'N', 'P', 'Bi', 'O', 'S', 'F', 'Br', 'I', 'At', 'Ce', 'Pa', 'U', 'Es', 'Er', 'Yb'],
    },
    {
        zdanie: "W parku dzieci bawiły się na huśtawkach, krzycząc z radości. Rodzice siedzieli na ławce, obserwując ich z uśmiechem na twarzy.",
		odpowiedz: ['H', 'Li', 'Na', 'K', 'Ba', 'Ra', 'Y', 'Ac', 'Ta', 'W', 'B', 'C', 'Si', 'N', 'P', 'O', 'S', 'Se', 'I', 'He', 'Ar', 'Kr', 'Ce', 'Pa', 'U', 'Er'],
    },
   
];

export default zdania;