const elements = [

    {number:1,symbol:"H",name:"Hydrogen",category:"nonmetal",mass:"1.008",config:"1s¹",period:1,group:1},
    {number:2,symbol:"He",name:"Helium",category:"noble",mass:"4.003",config:"1s²",period:1,group:18},

    {number:3,symbol:"Li",name:"Lithium",category:"metal",mass:"6.94",config:"1s² 2s¹",period:2,group:1},
    {number:4,symbol:"Be",name:"Beryllium",category:"metal",mass:"9.012",config:"1s² 2s²",period:2,group:2},
    {number:5,symbol:"B",name:"Boron",category:"metalloid",mass:"10.81",config:"1s² 2s² 2p¹",period:2,group:13},
    {number:6,symbol:"C",name:"Carbon",category:"nonmetal",mass:"12.011",config:"1s² 2s² 2p²",period:2,group:14},
    {number:7,symbol:"N",name:"Nitrogen",category:"nonmetal",mass:"14.007",config:"1s² 2s² 2p³",period:2,group:15},
    {number:8,symbol:"O",name:"Oxygen",category:"nonmetal",mass:"15.999",config:"1s² 2s² 2p⁴",period:2,group:16},
    {number:9,symbol:"F",name:"Fluorine",category:"nonmetal",mass:"18.998",config:"1s² 2s² 2p⁵",period:2,group:17},
    {number:10,symbol:"Ne",name:"Neon",category:"noble",mass:"20.180",config:"1s² 2s² 2p⁶",period:2,group:18},

    {number:11,symbol:"Na",name:"Sodium",category:"metal",mass:"22.990",config:"1s² 2s² 2p⁶ 3s¹",period:3,group:1},
    {number:12,symbol:"Mg",name:"Magnesium",category:"metal",mass:"24.305",config:"1s² 2s² 2p⁶ 3s²",period:3,group:2},
    {number:13,symbol:"Al",name:"Aluminium",category:"metal",mass:"26.982",config:"1s² 2s² 2p⁶ 3s² 3p¹",period:3,group:13},
    {number:14,symbol:"Si",name:"Silicon",category:"metalloid",mass:"28.085",config:"1s² 2s² 2p⁶ 3s² 3p²",period:3,group:14},
    {number:15,symbol:"P",name:"Phosphorus",category:"nonmetal",mass:"30.974",config:"1s² 2s² 2p⁶ 3s² 3p³",period:3,group:15},
    {number:16,symbol:"S",name:"Sulfur",category:"nonmetal",mass:"32.06",config:"1s² 2s² 2p⁶ 3s² 3p⁴",period:3,group:16},
    {number:17,symbol:"Cl",name:"Chlorine",category:"nonmetal",mass:"35.45",config:"1s² 2s² 2p⁶ 3s² 3p⁵",period:3,group:17},
    {number:18,symbol:"Ar",name:"Argon",category:"noble",mass:"39.948",config:"1s² 2s² 2p⁶ 3s² 3p⁶",period:3,group:18},

    {number:19,symbol:"K",name:"Potassium",category:"metal",mass:"39.098",config:"[Ar] 4s¹",period:4,group:1},
    {number:20,symbol:"Ca",name:"Calcium",category:"metal",mass:"40.078",config:"[Ar] 4s²",period:4,group:2},

    {number:21,symbol:"Sc",name:"Scandium",category:"metal",mass:"44.956",config:"[Ar] 3d¹ 4s²",period:4,group:3},
    {number:22,symbol:"Ti",name:"Titanium",category:"metal",mass:"47.867",config:"[Ar] 3d² 4s²",period:4,group:4},
    {number:23,symbol:"V",name:"Vanadium",category:"metal",mass:"50.942",config:"[Ar] 3d³ 4s²",period:4,group:5},
    {number:24,symbol:"Cr",name:"Chromium",category:"metal",mass:"52.00",config:"[Ar] 3d⁵ 4s¹",period:4,group:6},
    {number:25,symbol:"Mn",name:"Manganese",category:"metal",mass:"54.938",config:"[Ar] 3d⁵ 4s²",period:4,group:7},
    {number:26,symbol:"Fe",name:"Iron",category:"metal",mass:"55.845",config:"[Ar] 3d⁶ 4s²",period:4,group:8},
    {number:27,symbol:"Co",name:"Cobalt",category:"metal",mass:"58.933",config:"[Ar] 3d⁷ 4s²",period:4,group:9},
    {number:28,symbol:"Ni",name:"Nickel",category:"metal",mass:"58.693",config:"[Ar] 3d⁸ 4s²",period:4,group:10},
    {number:29,symbol:"Cu",name:"Copper",category:"metal",mass:"63.546",config:"[Ar] 3d¹⁰ 4s¹",period:4,group:11},
    {number:30,symbol:"Zn",name:"Zinc",category:"metal",mass:"65.38",config:"[Ar] 3d¹⁰ 4s²",period:4,group:12},

    {number:31,symbol:"Ga",name:"Gallium",category:"metal",mass:"69.723",config:"[Ar] 3d¹⁰ 4s² 4p¹",period:4,group:13},
    {number:32,symbol:"Ge",name:"Germanium",category:"metalloid",mass:"72.630",config:"[Ar] 3d¹⁰ 4s² 4p²",period:4,group:14},
    {number:33,symbol:"As",name:"Arsenic",category:"metalloid",mass:"74.922",config:"[Ar] 3d¹⁰ 4s² 4p³",period:4,group:15},
    {number:34,symbol:"Se",name:"Selenium",category:"nonmetal",mass:"78.971",config:"[Ar] 3d¹⁰ 4s² 4p⁴",period:4,group:16},
    {number:35,symbol:"Br",name:"Bromine",category:"nonmetal",mass:"79.904",config:"[Ar] 3d¹⁰ 4s² 4p⁵",period:4,group:17},
    {number:36,symbol:"Kr",name:"Krypton",category:"noble",mass:"83.798",config:"[Ar] 3d¹⁰ 4s² 4p⁶",period:4,group:18},

    {number:37,symbol:"Rb",name:"Rubidium",category:"metal",mass:"85.468",config:"[Kr] 5s¹",period:5,group:1},
    {number:38,symbol:"Sr",name:"Strontium",category:"metal",mass:"87.62",config:"[Kr] 5s²",period:5,group:2},
    {number:39,symbol:"Y",name:"Yttrium",category:"metal",mass:"88.906",config:"[Kr] 4d¹ 5s²",period:5,group:3},
    {number:40,symbol:"Zr",name:"Zirconium",category:"metal",mass:"91.224",config:"[Kr] 4d² 5s²",period:5,group:4},
    {number:41,symbol:"Nb",name:"Niobium",category:"metal",mass:"92.906",config:"[Kr] 4d⁴ 5s¹",period:5,group:5},
    {number:42,symbol:"Mo",name:"Molybdenum",category:"metal",mass:"95.95",config:"[Kr] 4d⁵ 5s¹",period:5,group:6},
    {number:43,symbol:"Tc",name:"Technetium",category:"metal",mass:"98",config:"[Kr] 4d⁵ 5s²",period:5,group:7},
    {number:44,symbol:"Ru",name:"Ruthenium",category:"metal",mass:"101.07",config:"[Kr] 4d⁷ 5s¹",period:5,group:8},
    {number:45,symbol:"Rh",name:"Rhodium",category:"metal",mass:"102.91",config:"[Kr] 4d⁸ 5s¹",period:5,group:9},
    {number:46,symbol:"Pd",name:"Palladium",category:"metal",mass:"106.42",config:"[Kr] 4d¹⁰",period:5,group:10},
    {number:47,symbol:"Ag",name:"Silver",category:"metal",mass:"107.87",config:"[Kr] 4d¹⁰ 5s¹",period:5,group:11},
    {number:48,symbol:"Cd",name:"Cadmium",category:"metal",mass:"112.41",config:"[Kr] 4d¹⁰ 5s²",period:5,group:12},
    {number:49,symbol:"In",name:"Indium",category:"metal",mass:"114.82",config:"[Kr] 4d¹⁰ 5s² 5p¹",period:5,group:13},
    {number:50,symbol:"Sn",name:"Tin",category:"metal",mass:"118.71",config:"[Kr] 4d¹⁰ 5s² 5p²",period:5,group:14},
    {number:51,symbol:"Sb",name:"Antimony",category:"metalloid",mass:"121.76",config:"[Kr] 4d¹⁰ 5s² 5p³",period:5,group:15},
    {number:52,symbol:"Te",name:"Tellurium",category:"metalloid",mass:"127.60",config:"[Kr] 4d¹⁰ 5s² 5p⁴",period:5,group:16},
    {number:53,symbol:"I",name:"Iodine",category:"nonmetal",mass:"126.90",config:"[Kr] 4d¹⁰ 5s² 5p⁵",period:5,group:17},
    {number:54,symbol:"Xe",name:"Xenon",category:"noble",mass:"131.29",config:"[Kr] 4d¹⁰ 5s² 5p⁶",period:5,group:18},

    {number:55,symbol:"Cs",name:"Cesium",category:"metal",mass:"132.91",config:"[Xe] 6s¹",period:6,group:1},
    {number:56,symbol:"Ba",name:"Barium",category:"metal",mass:"137.33",config:"[Xe] 6s²",period:6,group:2},

    {number:57,symbol:"La",name:"Lanthanum",category:"metal",mass:"138.91",config:"[Xe] 5d¹ 6s²",period:6,group:3},
    {number:58,symbol:"Ce",name:"Cerium",category:"metal",mass:"140.12",config:"[Xe] 4f¹ 5d¹ 6s²",period:6,group:4},
    {number:59,symbol:"Pr",name:"Praseodymium",category:"metal",mass:"140.91",config:"[Xe] 4f³ 6s²",period:6,group:5},
    {number:60,symbol:"Nd",name:"Neodymium",category:"metal",mass:"144.24",config:"[Xe] 4f⁴ 6s²",period:6,group:6},

    {number:61,symbol:"Pm",name:"Promethium",category:"metal",mass:"145",config:"[Xe] 4f⁵ 6s²",period:6,group:7},
    {number:62,symbol:"Sm",name:"Samarium",category:"metal",mass:"150.36",config:"[Xe] 4f⁶ 6s²",period:6,group:8},
    {number:63,symbol:"Eu",name:"Europium",category:"metal",mass:"151.96",config:"[Xe] 4f⁷ 6s²",period:6,group:9},
    {number:64,symbol:"Gd",name:"Gadolinium",category:"metal",mass:"157.25",config:"[Xe] 4f⁷ 5d¹ 6s²",period:6,group:10},
    {number:65,symbol:"Tb",name:"Terbium",category:"metal",mass:"158.93",config:"[Xe] 4f⁹ 6s²",period:6,group:11},
    {number:66,symbol:"Dy",name:"Dysprosium",category:"metal",mass:"162.50",config:"[Xe] 4f¹⁰ 6s²",period:6,group:12},
    {number:67,symbol:"Ho",name:"Holmium",category:"metal",mass:"164.93",config:"[Xe] 4f¹¹ 6s²",period:6,group:13},
    {number:68,symbol:"Er",name:"Erbium",category:"metal",mass:"167.26",config:"[Xe] 4f¹² 6s²",period:6,group:14},
    {number:69,symbol:"Tm",name:"Thulium",category:"metal",mass:"168.93",config:"[Xe] 4f¹³ 6s²",period:6,group:15},
    {number:70,symbol:"Yb",name:"Ytterbium",category:"metal",mass:"173.05",config:"[Xe] 4f¹⁴ 6s²",period:6,group:16},
    {number:71,symbol:"Lu",name:"Lutetium",category:"metal",mass:"174.97",config:"[Xe] 4f¹⁴ 5d¹ 6s²",period:6,group:17},

    {number:72,symbol:"Hf",name:"Hafnium",category:"metal",mass:"178.49",config:"[Xe] 4f¹⁴ 5d² 6s²",period:6,group:4},
    {number:73,symbol:"Ta",name:"Tantalum",category:"metal",mass:"180.95",config:"[Xe] 4f¹⁴ 5d³ 6s²",period:6,group:5},
    {number:74,symbol:"W",name:"Tungsten",category:"metal",mass:"183.84",config:"[Xe] 4f¹⁴ 5d⁴ 6s²",period:6,group:6},
    {number:75,symbol:"Re",name:"Rhenium",category:"metal",mass:"186.21",config:"[Xe] 4f¹⁴ 5d⁵ 6s²",period:6,group:7},
    {number:76,symbol:"Os",name:"Osmium",category:"metal",mass:"190.23",config:"[Xe] 4f¹⁴ 5d⁶ 6s²",period:6,group:8},
    {number:77,symbol:"Ir",name:"Iridium",category:"metal",mass:"192.22",config:"[Xe] 4f¹⁴ 5d⁷ 6s²",period:6,group:9},
    {number:78,symbol:"Pt",name:"Platinum",category:"metal",mass:"195.08",config:"[Xe] 4f¹⁴ 5d⁹ 6s¹",period:6,group:10},
    {number:79,symbol:"Au",name:"Gold",category:"metal",mass:"196.97",config:"[Xe] 4f¹⁴ 5d¹⁰ 6s¹",period:6,group:11},
    {number:80,symbol:"Hg",name:"Mercury",category:"metal",mass:"200.59",config:"[Xe] 4f¹⁴ 5d¹⁰ 6s²",period:6,group:12},
    {number:81,symbol:"Tl",name:"Thallium",category:"metal",mass:"204.38",config:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹",period:6,group:13},
    {number:82,symbol:"Pb",name:"Lead",category:"metal",mass:"207.2",config:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²",period:6,group:14},
    {number:83,symbol:"Bi",name:"Bismuth",category:"metal",mass:"208.98",config:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³",period:6,group:15},
    {number:84,symbol:"Po",name:"Polonium",category:"metalloid",mass:"209",config:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴",period:6,group:16},
    {number:85,symbol:"At",name:"Astatine",category:"metalloid",mass:"210",config:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵",period:6,group:17},
    {number:86,symbol:"Rn",name:"Radon",category:"noble",mass:"222",config:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶",period:6,group:18},

    {number:87,symbol:"Fr",name:"Francium",category:"metal",mass:"223",config:"[Rn] 7s¹",period:7,group:1},
    {number:88,symbol:"Ra",name:"Radium",category:"metal",mass:"226",config:"[Rn] 7s²",period:7,group:2},

    {number:89,symbol:"Ac",name:"Actinium",category:"metal",mass:"227",config:"[Rn] 6d¹ 7s²",period:7,group:3},
    {number:90,symbol:"Th",name:"Thorium",category:"metal",mass:"232.04",config:"[Rn] 6d² 7s²",period:7,group:4},
    {number:91,symbol:"Pa",name:"Protactinium",category:"metal",mass:"231.04",config:"[Rn] 5f² 6d¹ 7s²",period:7,group:5},
    {number:92,symbol:"U",name:"Uranium",category:"metal",mass:"238.03",config:"[Rn] 5f³ 6d¹ 7s²",period:7,group:6},
    {number:93,symbol:"Np",name:"Neptunium",category:"metal",mass:"237",config:"[Rn] 5f⁴ 6d¹ 7s²",period:7,group:7},
    {number:94,symbol:"Pu",name:"Plutonium",category:"metal",mass:"244",config:"[Rn] 5f⁶ 7s²",period:7,group:8},
    {number:95,symbol:"Am",name:"Americium",category:"metal",mass:"243",config:"[Rn] 5f⁷ 7s²",period:7,group:9},
    {number:96,symbol:"Cm",name:"Curium",category:"metal",mass:"247",config:"[Rn] 5f⁷ 6d¹ 7s²",period:7,group:10},
    {number:97,symbol:"Bk",name:"Berkelium",category:"metal",mass:"247",config:"[Rn] 5f⁹ 7s²",period:7,group:11},
    {number:98,symbol:"Cf",name:"Californium",category:"metal",mass:"251",config:"[Rn] 5f¹⁰ 7s²",period:7,group:12},
    {number:99,symbol:"Es",name:"Einsteinium",category:"metal",mass:"252",config:"[Rn] 5f¹¹ 7s²",period:7,group:13},
    {number:100,symbol:"Fm",name:"Fermium",category:"metal",mass:"257",config:"[Rn] 5f¹² 7s²",period:7,group:14},
    {number:101,symbol:"Md",name:"Mendelevium",category:"metal",mass:"258",config:"[Rn] 5f¹³ 7s²",period:7,group:15},
    {number:102,symbol:"No",name:"Nobelium",category:"metal",mass:"259",config:"[Rn] 5f¹⁴ 7s²",period:7,group:16},
    {number:103,symbol:"Lr",name:"Lawrencium",category:"metal",mass:"266",config:"[Rn] 5f¹⁴ 7s² 7p¹",period:7,group:17},

    {number:104,symbol:"Rf",name:"Rutherfordium",category:"metal",mass:"267",config:"[Rn] 5f¹⁴ 6d² 7s²",period:7,group:4},
    {number:105,symbol:"Db",name:"Dubnium",category:"metal",mass:"268",config:"[Rn] 5f¹⁴ 6d³ 7s²",period:7,group:5},
    {number:106,symbol:"Sg",name:"Seaborgium",category:"metal",mass:"269",config:"[Rn] 5f¹⁴ 6d⁴ 7s²",period:7,group:6},
    {number:107,symbol:"Bh",name:"Bohrium",category:"metal",mass:"270",config:"[Rn] 5f¹⁴ 6d⁵ 7s²",period:7,group:7},
    {number:108,symbol:"Hs",name:"Hassium",category:"metal",mass:"277",config:"[Rn] 5f¹⁴ 6d⁶ 7s²",period:7,group:8},
    {number:109,symbol:"Mt",name:"Meitnerium",category:"metal",mass:"278",config:"[Rn] 5f¹⁴ 6d⁷ 7s²",period:7,group:9},
    {number:110,symbol:"Ds",name:"Darmstadtium",category:"metal",mass:"281",config:"[Rn] 5f¹⁴ 6d⁹ 7s¹",period:7,group:10},
    {number:111,symbol:"Rg",name:"Roentgenium",category:"metal",mass:"282",config:"[Rn] 5f¹⁴ 6d¹⁰ 7s¹",period:7,group:11},
    {number:112,symbol:"Cn",name:"Copernicium",category:"metal",mass:"285",config:"[Rn] 5f¹⁴ 6d¹⁰ 7s²",period:7,group:12},
    {number:113,symbol:"Nh",name:"Nihonium",category:"metal",mass:"286",config:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹",period:7,group:13},
    {number:114,symbol:"Fl",name:"Flerovium",category:"metal",mass:"289",config:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²",period:7,group:14},
    {number:115,symbol:"Mc",name:"Moscovium",category:"metal",mass:"290",config:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³",period:7,group:15},
    {number:116,symbol:"Lv",name:"Livermorium",category:"metal",mass:"293",config:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴",period:7,group:16},
    {number:117,symbol:"Ts",name:"Tennessine",category:"nonmetal",mass:"294",config:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵",period:7,group:17},
    {number:118,symbol:"Og",name:"Oganesson",category:"noble",mass:"294",config:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶",period:7,group:18}

];


const quizQuestions = [

    {
        question: `
            An atom contains
            <strong>3 protons</strong>,
            <strong>3 neutrons</strong> and
            <strong>3 electrons</strong>.<br><br>
            Which element is it?
        `,
        answers: ["Lithium","Carbon","Helium","Oxygen"],
        correct: "Lithium",
        explanation:
            "3 protons means atomic number 3. Atomic number 3 is Lithium."
    },

    {
        question: `
            Oxygen has atomic number <strong>8</strong>.
            What is its electron configuration?
        `,
        answers: [
            "1s² 2s² 2p⁴",
            "1s² 2s⁶",
            "1s² 2p⁶",
            "1s² 2s² 2p⁶"
        ],
        correct: "1s² 2s² 2p⁴",
        explanation:
            "Oxygen has 8 electrons: 2 fill 1s, 2 fill 2s, and the remaining 4 enter 2p."
    },

    {
        question: `
            Which element has atomic number
            <strong>17</strong>?
        `,
        answers: [
            "Argon",
            "Chlorine",
            "Sulfur",
            "Fluorine"
        ],
        correct: "Chlorine",
        explanation:
            "Atomic number 17 corresponds to chlorine (Cl)."
    },

    {
        question: `
            A neutral atom has <strong>12 electrons</strong>.
            How many protons does it have?
        `,
        answers: [
            "6",
            "10",
            "12",
            "24"
        ],
        correct: "12",
        explanation:
            "A neutral atom has equal numbers of protons and electrons."
    },

    {
        question: `
            Which element has the configuration
            <strong>1s² 2s² 2p⁶ 3s¹</strong>?
        `,
        answers: [
            "Magnesium",
            "Sodium",
            "Neon",
            "Potassium"
        ],
        correct: "Sodium",
        explanation:
            "That configuration contains 11 electrons, so the element is sodium."
    },

    {
        question: `
            What does an element's
            <strong>atomic number</strong> tell you?
        `,
        answers: [
            "Its neutrons",
            "Its protons",
            "Its shells",
            "Its mass only"
        ],
        correct: "Its protons",
        explanation:
            "Atomic number is defined by the number of protons in the nucleus."
    },

    {
        question: `
            Which particle has a
            <strong>negative charge</strong>?
        `,
        answers: [
            "Proton",
            "Neutron",
            "Electron",
            "Nucleus"
        ],
        correct: "Electron",
        explanation:
            "Electrons carry negative electric charge."
    },

    {
        question: `
            Which element has
            <strong>2 electrons</strong>?
        `,
        answers: [
            "Hydrogen",
            "Helium",
            "Lithium",
            "Beryllium"
        ],
        correct: "Helium",
        explanation:
            "Helium has atomic number 2, meaning a neutral helium atom has two electrons."
    }

];


let currentQuestion = 0;
let score = 0;
let streak = 0;
let answered = false;


function loadQuestion() {

    const q = quizQuestions[currentQuestion];

    const question =
        document.getElementById("questionText");

    const answers =
        document.getElementById("answers");

    const number =
        document.getElementById("questionNumber");

    if (!question || !answers) return;

    answered = false;

    question.innerHTML = q.question;

    number.textContent =
        `${String(currentQuestion + 1).padStart(2,"0")} / ${quizQuestions.length}`;

    answers.innerHTML = "";

    q.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.className = "answer";

        button.dataset.answer = answer;

        button.innerHTML = `
            <span>${String.fromCharCode(65 + index)}</span>
            ${answer}
        `;

        button.addEventListener(
            "click",
            () => chooseAnswer(button)
        );

        answers.appendChild(button);

    });

}


function chooseAnswer(button) {

    if (answered) return;

    answered = true;

    const selected =
        button.dataset.answer;

    const question =
        quizQuestions[currentQuestion];

    const feedback =
        document.getElementById("feedback");

    const title =
        document.getElementById("feedbackTitle");

    const text =
        document.getElementById("feedbackText");

    const icon =
        document.getElementById("feedbackIcon");

    const allAnswers =
        document.querySelectorAll(".answer");

    allAnswers.forEach(btn => {

        if (btn.dataset.answer === question.correct) {
            btn.classList.add("correct");
        }

        btn.disabled = true;

    });


    if (selected === question.correct) {

        button.classList.add("correct");

        score += 100;
        streak++;

        icon.textContent = "🔓";
        title.textContent = "VAULT CRACKED!";
        text.textContent = question.explanation;

        feedback.classList.add("success");

        const lock =
            document.getElementById("vaultLock");

        if (lock) {
            lock.classList.add("unlock");
            lock.textContent = "🔓";
        }

    } else {

        button.classList.add("wrong");

        streak = 0;

        icon.textContent = "🚨";
        title.textContent = "ACCESS DENIED";
        text.textContent =
            `Correct answer: ${question.correct}. ${question.explanation}`;

        feedback.classList.add("failure");

    }


    document.getElementById("score").textContent = score;
    document.getElementById("vaultScore").textContent = score;
    document.getElementById("streak").textContent = streak;

}


function nextQuestion() {

    currentQuestion++;

    if (currentQuestion >= quizQuestions.length) {

        currentQuestion = 0;

        completeMission(2);

        alert(
            `MISSION COMPLETE!\n\nFinal Score: ${score}`
        );

        score = 0;
        streak = 0;

    }

    const feedback =
        document.getElementById("feedback");

    feedback.classList.remove(
        "success",
        "failure"
    );

    const lock =
        document.getElementById("vaultLock");

    if (lock) {
        lock.classList.remove("unlock");
        lock.textContent = "🔐";
    }

    loadQuestion();

}


document.addEventListener("DOMContentLoaded", () => {

    loadQuestion();

    const next =
        document.getElementById("nextQuestion");

    if (next) {
        next.addEventListener(
            "click",
            nextQuestion
        );
    }

    createPeriodicTable();

    const search =
        document.getElementById("elementSearch");

    if (search) {

        search.addEventListener(
            "input",
            () => filterElements(search.value)
        );

    }

});


function createPeriodicTable() {
    const table = document.getElementById("periodicTable");
    if (!table) return;

    table.innerHTML = "";

    // Main periodic table:
    // Keep only the elements that actually occupy the
    // 18-column × 7-row main table.
    elements.forEach(element => {

        // Lanthanides: 57–71
        // Actinides: 89–103
        // These belong in the separate f-block below.
        if (
            (element.number >= 57 && element.number <= 71) ||
            (element.number >= 89 && element.number <= 103)
        ) {
            return;
        }

        const tile = document.createElement("button");

        tile.className =
            `element ${element.category}`;

        tile.style.gridColumn =
            element.group;

        tile.style.gridRow =
            element.period;

        tile.innerHTML = `
            <small>${element.number}</small>
            <strong>${element.symbol}</strong>
            <span>${element.name}</span>
        `;

        tile.addEventListener(
            "click",
            () => inspectElement(element)
        );

        table.appendChild(tile);
    });

    // Add placeholders for the f-block positions
    // in the main periodic table.
    createFBlock();
}


function inspectElement(element) {

    const inspector =
        document.getElementById("elementInspector");

    if (!inspector) return;

    inspector.innerHTML = `

        <div class="inspector-content">

            <div class="big-element ${element.category}">
                <small>${element.number}</small>
                <strong>${element.symbol}</strong>
                <span>${element.name}</span>
            </div>

            <div class="element-heading">
                <span>ELEMENT PROFILE</span>
                <h2>${element.name}</h2>
                <p>${element.symbol}</p>
            </div>

            <div class="element-stats">

                <div>
                    <span>ATOMIC NUMBER</span>
                    <strong>${element.number}</strong>
                </div>

                <div>
                    <span>PROTONS</span>
                    <strong>${element.number}</strong>
                </div>

                <div>
                    <span>ELECTRONS</span>
                    <strong>${element.number}</strong>
                </div>

                <div>
                    <span>ATOMIC MASS</span>
                    <strong>${element.mass}</strong>
                </div>

            </div>

            <div class="config-box">
                <span>ELECTRON CONFIGURATION</span>
                <strong>${element.config}</strong>
            </div>

            <div class="mini-atom">

                ${Array.from(
                    {length: Math.min(element.number, 18)},
                    (_, i) =>
                        `<i style="--i:${i}"></i>`
                ).join("")}

                <b>${element.symbol}</b>

            </div>

        </div>
    `;

}


function filterElements(value) {

    const search =
        value.trim().toLowerCase();

    document
        .querySelectorAll(".element")
        .forEach(tile => {

            const number =
                tile.querySelector("small").textContent;

            const symbol =
                tile.querySelector("strong").textContent;

            const name =
                tile.querySelector("span").textContent;

            const matches =
                !search ||
                number === search ||
                symbol.toLowerCase().includes(search) ||
                name.toLowerCase().includes(search);

            tile.classList.toggle(
                "hidden-element",
                !matches
            );

        });

}

function createFBlock() {
    const table = document.getElementById("periodicTable");
    if (!table) return;

    // Prevent duplicate f-blocks if the table is recreated.
    const oldBlock = document.getElementById("fBlock");
    if (oldBlock) oldBlock.remove();

    const wrapper = document.createElement("div");
    wrapper.id = "fBlock";
    wrapper.className = "f-block";

    const lanthanides = elements.filter(
        element =>
            element.number >= 57 &&
            element.number <= 71
    );

    const actinides = elements.filter(
        element =>
            element.number >= 89 &&
            element.number <= 103
    );

    wrapper.innerHTML = `
        <div class="f-block-label">
            <span>57–71</span>
            <strong>Lanthanides</strong>
        </div>

        <div class="f-row">
            ${lanthanides.map(element => `
                <button
                    class="element ${element.category}"
                    data-number="${element.number}"
                >
                    <small>${element.number}</small>
                    <strong>${element.symbol}</strong>
                    <span>${element.name}</span>
                </button>
            `).join("")}
        </div>

        <div class="f-block-label">
            <span>89–103</span>
            <strong>Actinides</strong>
        </div>

        <div class="f-row">
            ${actinides.map(element => `
                <button
                    class="element ${element.category}"
                    data-number="${element.number}"
                >
                    <small>${element.number}</small>
                    <strong>${element.symbol}</strong>
                    <span>${element.name}</span>
                </button>
            `).join("")}
        </div>
    `;

    // Put the f-block AFTER the main periodic table.
    table.parentNode.insertBefore(
        wrapper,
        table.nextSibling
    );

    // Make the f-block elements clickable.
    wrapper.querySelectorAll(".element").forEach(tile => {
        const number = Number(tile.dataset.number);

        const element = elements.find(
            item => item.number === number
        );

        if (element) {
            tile.addEventListener(
                "click",
                () => inspectElement(element)
            );
        }
    });
}