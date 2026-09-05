document.addEventListener("DOMContentLoaded", () => {

    setupElectron();
    setupFactory();

});


/* =====================================================
   ELECTRON ARCADE
===================================================== */

function setupElectron() {

    const electron =
        document.getElementById("simElectron");

    const energize =
        document.getElementById("energizeBtn");

    const release =
        document.getElementById("releaseBtn");

    const reset =
        document.getElementById("resetElectron");

    if (!electron || !energize) return;

    let level = 1;
    let excited = false;


    function updateStatus() {

        const state =
            document.getElementById("electronState");

        const levelText =
            document.getElementById("electronLevel");

        const energy =
            document.getElementById("energyFill");

        const value =
            document.getElementById("energyValue");

        if (state) {
            state.textContent =
                excited
                    ? "EXCITED STATE"
                    : "GROUND STATE";
        }

        if (levelText) {
            levelText.textContent = `E${level}`;
        }

        if (energy) {
            energy.style.width =
                `${level === 1 ? 20 : level === 2 ? 55 : 90}%`;
        }

        if (value) {
            value.textContent =
                level === 1
                    ? "LOW"
                    : level === 2
                        ? "MEDIUM"
                        : "HIGH";
        }

    }


    energize.addEventListener("click", () => {

        if (level >= 3) return;

        excited = true;
        level++;

        electron.classList.remove(
            "electron-level-1",
            "electron-level-2",
            "electron-level-3"
        );

        electron.classList.add(
            `electron-level-${level}`,
            "electron-excited"
        );

        const message =
            document.getElementById("excitedMessage");

        if (message) {
            message.classList.add("show");

            setTimeout(() => {
                message.classList.remove("show");
            }, 2200);
        }

        const atom =
            document.getElementById("atomSimulation");

        burst(atom, 15);

        updateStatus();

    });


    release.addEventListener("click", () => {

        if (!excited) return;

        const photon =
            document.getElementById("photon");

        const photonStatus =
            document.getElementById("photonStatus");

        photon.classList.remove("photon-fly");

        void photon.offsetWidth;

        photon.classList.add("photon-fly");

        photonStatus.textContent =
            "EMITTED ✨";

        electron.classList.remove(
            "electron-excited"
        );

        electron.classList.remove(
            `electron-level-${level}`
        );

        level = Math.max(1, level - 1);

        electron.classList.add(
            `electron-level-${level}`
        );

        excited =
            level > 1;

        updateStatus();

    });


    reset.addEventListener("click", () => {

        level = 1;
        excited = false;

        electron.className =
            "simulation-electron electron-level-1";

        const photonStatus =
            document.getElementById("photonStatus");

        photonStatus.textContent = "NONE";

        updateStatus();

    });


    updateStatus();

}


/* =====================================================
   MOLECULAR FACTORY
===================================================== */

function setupFactory() {

    const submit =
        document.getElementById("submitMolecule");

    if (!submit) return;

    let selectedAtoms = [];

    let currentOrder = 0;

    const orders = [

        {
            atoms: ["H","H","O"],
            formula: "H₂O"
        },

        {
            atoms: ["C","O","O"],
            formula: "CO₂"
        },

        {
            atoms: ["H","H","H","H","C"],
            formula: "CH₄"
        }

    ];


    document
        .querySelectorAll(".atom-buttons button")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    selectedAtoms.push(
                        button.dataset.atom
                    );

                    updateFormula();

                }
            );

        });


    function updateFormula() {

        const display =
            document.getElementById("formulaDisplay");

        if (!display) return;

        if (!selectedAtoms.length) {
            display.textContent = "?";
            return;
        }

        const counts = {};

        selectedAtoms.forEach(atom => {
            counts[atom] =
                (counts[atom] || 0) + 1;
        });

        let formula = "";

        Object.entries(counts)
            .forEach(([atom,count]) => {

                formula += atom;

                if (count > 1) {
                    formula +=
                        String(count)
                        .replace("2","₂")
                        .replace("3","₃")
                        .replace("4","₄")
                        .replace("5","₅");
                }

            });

        display.textContent = formula;

    }


    submit.addEventListener("click", () => {

        const order =
            orders[currentOrder];

        const target =
            [...order.atoms].sort().join("");

        const selected =
            [...selectedAtoms].sort().join("");

        if (selected === target) {

            moleculeSuccess(order.formula);

            currentOrder++;

            selectedAtoms = [];

            if (currentOrder >= orders.length) {

                setTimeout(() => {
                    startReactionPhase();
                }, 1800);

            } else {

                setTimeout(() => {
                    updateOrder();
                }, 1800);

            }

        } else {

            moleculeFailure();

        }

    });


    function moleculeSuccess(formula) {

        const status =
            document.getElementById("factoryStatus");

        if (status) {
            status.textContent =
                "ORDER COMPLETE ✓";
        }

        const machine =
            document.getElementById("servingMachine");

        const served =
            document.getElementById("servedMolecule");

        served.textContent = formula;

        machine.classList.remove("serve");

        void machine.offsetWidth;

        machine.classList.add("serve");

        burst(
            document.getElementById("factoryFloor"),
            20
        );

    }


    function moleculeFailure() {

        const status =
            document.getElementById("factoryStatus");

        if (status) {
            status.textContent =
                "WRONG MOLECULE";
        }

        const builder =
            document.querySelector(".molecule-builder");

        builder.classList.add("shake");

        setTimeout(() => {
            builder.classList.remove("shake");
        }, 500);

    }


    function updateOrder() {

        const order =
            orders[currentOrder];

        document.getElementById(
            "orderNumber"
        ).textContent =
            `${String(currentOrder + 1).padStart(2,"0")} / ${orders.length}`;

        document.getElementById(
            "formulaDisplay"
        ).textContent = "?";

        selectedAtoms = [];

        const requirements =
            document.getElementById(
                "atomRequirements"
            );

        const counts = {};

        order.atoms.forEach(atom => {
            counts[atom] =
                (counts[atom] || 0) + 1;
        });

        requirements.innerHTML =
            Object.entries(counts)
                .map(
                    ([atom,count]) =>
                        `<span>${atom} × ${count}</span>`
                )
                .join("");

        document.getElementById(
            "factoryStatus"
        ).textContent = "NEW ORDER";

    }


    function startReactionPhase() {

        const section =
            document.getElementById(
                "reactionSection"
            );

        if (!section) return;

        section.classList.add(
            "reaction-unlocked"
        );

        section.scrollIntoView({
            behavior: "smooth"
        });

        setupReaction();

    }


    let reactionStarted = false;

    function setupReaction() {

        if (reactionStarted) return;

        reactionStarted = true;

        const coefficients = [1,1,1];

        const equation =
            document.getElementById(
                "fixedEquation"
            );


        function updateEquation() {

            equation.textContent =
                `${coefficients[0]}H₂ + ${coefficients[1]}O₂ → ${coefficients[2]}H₂O`;

            coefficients.forEach((value,index) => {

                const display =
                    document.getElementById(
                        `coef${index}`
                    );

                display.textContent = value;

            });

        }


        document
            .querySelectorAll(".coef-plus")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        const index =
                            Number(button.dataset.index);

                        if (coefficients[index] < 9) {
                            coefficients[index]++;
                        }

                        updateEquation();

                    }
                );

            });


        document
            .querySelectorAll(".coef-minus")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        const index =
                            Number(button.dataset.index);

                        if (coefficients[index] > 1) {
                            coefficients[index]--;
                        }

                        updateEquation();

                    }
                );

            });


        document
            .getElementById("repairReaction")
            .addEventListener(
                "click",
                () => {

                    if (
                        coefficients[0] === 2 &&
                        coefficients[1] === 1 &&
                        coefficients[2] === 2
                    ) {

                        const status =
                            document.getElementById(
                                "factoryStatus"
                            );

                        status.textContent =
                            "REACTION REPAIRED ✓";

                        document
                            .querySelector(
                                ".reaction-console"
                            )
                            .classList.add(
                                "reaction-success"
                            );

                        burst(
                            document.getElementById(
                                "factoryFloor"
                            ),
                            35
                        );

                        completeMission(4);

                    } else {

                        const console =
                            document.querySelector(
                                ".reaction-console"
                            );

                        console.classList.add(
                            "shake"
                        );

                        setTimeout(() => {
                            console.classList.remove(
                                "shake"
                            );
                        }, 500);

                    }

                }
            );

    }

    updateOrder();

}