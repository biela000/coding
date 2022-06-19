const questionData = [
    {
        id: 1,
        question:
            'Zaznacz poprawną odmianę przymiotnika "tani" w języku niemieckim.',
        answerA: "billig - billger - am billsten",
        answerB: "dunkel - dunkler - am dunkelsten",
        answerC: "billig - billiger - am billigsten",
        answerD: "dunkel - dunkeler - am dunkelsten",
        correctAnswer: "C",
        questionType: "closedSingle",
        questionTime: 20,
    },
    {
        id: 2,
        question:
            'Które z poniższych jest poprawną formą wyższą przymiotnika "wysoki" w języku niemieckim?',
        answerA: "höcher",
        answerB: "hocher",
        answerC: "großer",
        answerD: "größer",
        correctAnswer: "D",
        questionType: "closedSingle",
        questionTime: 20,
    },
    {
        id: 3,
        question:
            'Uzupełnij podane zdanie stopniami przysłówka "mało" w kolejności od równego do najwyższego:\n"Geschischte interessiert mich _____(1). Polnisch interessiert mich _____(2). Chemie interessiert mich _____(3)."',
        answerA: "wenig",
        answerB: "am wenigsten",
        answerC: "wenigsten",
        answerD: "weniger",
        correctAnswer: "ADB",
        questionType: "closedOrder",
        questionTime: 30,
    },
    {
        id: 4,
        question:
            'Uzupełnij podane zdanie stopniami przysłówka "prędko" w kolejności od równego do najwyższego.',
        answerA: "am ehersten",
        answerB: "eher",
        answerC: "balder",
        answerD: "bald",
        correctAnswer: "DBA",
        questionType: "closedOrder",
        questionTime: 30,
    },
    {
        id: 5,
        question:
            'Podaj przymiotnik "teuer" w formie wyższej w języku niemieckim:',
        correctAnswer: "teurer",
        questionType: "open",
        questionTime: 30,
    },
    {
        id: 6,
        question:
            'Podaj przymiotnik "viel" w formie najwyższej w języku niemieckim:',
        correctAnswer: "am meisten",
        questionType: "open",
        questionTime: 30,
    },
    {
        id: 7,
        question:
            'Uzupełnij podane zdanie przymiotnikiem "schnell" w stopniu najwyższym:\n"Wie heißt das _____ Tier?"',
        correctAnswer: "schnellste",
        questionType: "open",
        questionTime: 30,
    },
    {
        id: 8,
        question:
            'Uzupełnij podane zdanie przymiotnikiem "tief" w stopniu najwyższym:\n"Wie heißt der _____ See Polens?"',
        correctAnswer: "tiefste",
        questionType: "open",
        questionTime: 30,
    },
    {
        id: 9,
        question:
            'Zaznacz wyrazy stanowiące poprawne stopnie przymiotnika "oft".',
        answerA: "öfter",
        answerB: "öftesten",
        answerC: "häufiger",
        answerD: "häufigsten",
        correctAnswer: "ABCD",
        questionType: "closedMultiple",
        questionTime: 20,
    },
    {
        id: 10,
        question:
            'Zaznacz wyrazy stanowiące poprawne stopnie przymiotnika "alt".',
        answerA: "älterest",
        answerB: "ältest",
        answerC: "ältesten",
        answerD: "älter",
        correctAnswer: "CD",
        questionType: "closedMultiple",
        questionTime: 20,
    },
    {
        id: 11,
        question:
            'Uzupełnij czasownikiem "kommen" dla 2. osoby liczby pojedynczej: "_____ mit mir!".',
        answerA: "Komm du",
        answerB: "Kommst du",
        answerC: "Komm",
        answerD: "Kommst",
        correctAnswer: "C",
        questionType: "closedSingle",
        questionTime: 20,
    },
    {
        id: 12,
        question:
            'Uzupełnij czasownikiem "kommen" dla 2. osoby liczby mnogiej: "_____ mit mir!".',
        answerA: "Komm ihr",
        answerB: "Kommt ihr",
        answerC: "Komm",
        answerD: "Kommt",
        correctAnswer: "D",
        questionType: "closedSingle",
        questionTime: 20,
    },
    {
        id: 13,
        question:
            'Zaznacz formy czasownika "arbeit" w trybie rozkazującym w kolejności "du, ihr, wir"',
        answerA: "arbeitet",
        answerB: "arbeit",
        answerC: "arbeitest",
        answerD: "arbeiten",
        correctAnswer: "BAD",
        questionType: "closedOrder",
        questionTime: 25,
    },
    {
        id: 14,
        question:
            "Zaznacz podane odpowiedzi w odpowiedniej kolejności, aby utworzyć poprawne zdanie w trybie rozkazującym (wielkość liter nie ma znaczenia):",
        answerA: "auf",
        answerB: "rufen",
        answerC: "Sie",
        answerD: "den Freund",
        correctAnswer: "BCDA",
        questionType: "closedOrder",
        questionTime: 30,
    },
    {
        id: 15,
        question:
            'Przekształć podane zdanie na tryb rozkazujący: "Du liest den Text noch einmal."',
        correctAnswer: "Lies den Text noch einmal!",
        questionType: "open",
        questionTime: 60,
    },
    {
        id: 16,
        question:
            'Przekształć podane zdanie na tryb rozkazujący: "Ihr schreibt eure Telefonnummer auf."',
        correctAnswer: "Schreibt eure Telefonnummer auf!",
        questionType: "open",
        questionTime: 60,
    },
    {
        id: 17,
        question:
            'Używając podanych słów w odpowiedniej formie i kolejności, napisz zdanie w trybie rozkazującym dla 1. osoby liczby mnogiej: "wir / suchen / ein / Job"',
        correctAnswer: "Suchen wir einen Job!",
        questionType: "open",
        questionTime: 60,
    },
    {
        id: 18,
        question:
            'Używając podanych słów w odpowiedniej formie i kolejności, napisz zdanie w trybie rozkazującym dla 3. osoby liczby mnogiej: "Sie / anziehen / sich / warm"',
        correctAnswer: "Ziehen Sie sich warm an!",
        questionType: "open",
        questionTime: 60,
    },
    {
        id: 19,
        question:
            "Dla jakich osób gramatycznych w języku niemieckim można stworzyć zdanie w trybie rozkazującym?",
        answerA: "du",
        answerB: "Sie",
        answerC: "er, sie, es",
        answerD: "ich",
        correctAnswer: "AB",
        questionType: "closedMultiple",
        questionTime: 20,
    },
    {
        id: 20,
        question: "Zaznacz poprawne zdania w trybie rozkazującym.",
        answerA: "Raum im Zimmer auf!",
        answerB: "Trink einen Beruhigungstee!",
        answerC: "Steigen in diesen Bus ein!",
        answerD: "Geben Sie den Computer zur Reparatir ab!",
        correctAnswer: "ABD",
        questionType: "closedMultiple",
        questionTime: 45,
    },
];

export default questionData;
