// javascript file
// import {readButton} from "./sudokuReadButton.js"

let sudokuField = {}

//-----------------------
// Main Functions
function initializeField() {
    for (let x = 0; x < 81; x++) {
        if (x < 3) {
            sudokuField[`cell${x}`] = {}
            sudokuField[`cell${x}`]["values"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x}`]["block"] = 1;
        }
        if (x < 6 && x > 2) {
            sudokuField[`cell${x}`] = {}
            sudokuField[`cell${x}`]["values"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x}`]["block"] = 2;
        }
        if (x < 9 && x > 5) {
            sudokuField[`cell${x}`] = {}
            sudokuField[`cell${x}`]["values"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x}`]["block"] = 3;
        }
        if (x < 12 && x > 8) {
            sudokuField[`cell${x}`] = {}
            sudokuField[`cell${x}`]["values"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x}`]["block"] = 1;
        }
        if (x < 15 && x > 11) {
            sudokuField[`cell${x}`] = {}
            sudokuField[`cell${x}`]["values"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x}`]["block"] = 2;
        }
        if (x < 18 && x > 14) {
            sudokuField[`cell${x}`] = {}
            sudokuField[`cell${x}`]["values"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x}`]["block"] = 3;
        }
        if (x < 21 && x > 17) {
            sudokuField[`cell${x}`] = {}
            sudokuField[`cell${x}`]["values"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x}`]["block"] = 1;
        }
        if (x < 24 && x > 20) {
            sudokuField[`cell${x}`] = {}
            sudokuField[`cell${x}`]["values"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x}`]["block"] = 2;
        }
        if (x < 27 && x > 23) {
            sudokuField[`cell${x}`] = {}
            sudokuField[`cell${x}`]["values"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x}`]["block"] = 3; 
        }
        if (x < 30 && x > 26) {
            sudokuField[`cell${x}`] = {}
            sudokuField[`cell${x}`]["values"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x}`]["block"] = 4;
        }
        if (x < 33 && x > 29) {
            sudokuField[`cell${x}`] = {}
            sudokuField[`cell${x}`]["values"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x}`]["block"] = 5;
        }
        if (x < 36 && x > 32) {
            sudokuField[`cell${x}`] = {}
            sudokuField[`cell${x}`]["values"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x}`]["block"] = 6;
        }
        if (x < 39 && x > 35) {
            sudokuField[`cell${x}`] = {}
            sudokuField[`cell${x}`]["values"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x}`]["block"] = 4;
        }
        if (x < 42 && x > 38) {
            sudokuField[`cell${x}`] = {}
            sudokuField[`cell${x}`]["values"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x}`]["block"] = 5;
        }
        if (x < 45 && x > 41) {
            sudokuField[`cell${x}`] = {}
            sudokuField[`cell${x}`]["values"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x}`]["block"] = 6;
        }
        if (x < 48 && x > 44) {
            sudokuField[`cell${x}`] = {}
            sudokuField[`cell${x}`]["values"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x}`]["block"] = 4;
        }
        if (x < 51 && x > 47) {
            sudokuField[`cell${x}`] = {}
            sudokuField[`cell${x}`]["values"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x}`]["block"] = 5;
        }
        if (x < 54 && x > 50) {
            sudokuField[`cell${x}`] = {}
            sudokuField[`cell${x}`]["values"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x}`]["block"] = 6;
        }
        if (x < 57 && x > 53) {
            sudokuField[`cell${x}`] = {}
            sudokuField[`cell${x}`]["values"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x}`]["block"] = 7;
        }
        if (x < 60 && x > 56) {
            sudokuField[`cell${x}`] = {}
            sudokuField[`cell${x}`]["values"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x}`]["block"] = 8;
        }
        if (x < 63 && x > 59) {
            sudokuField[`cell${x}`] = {}
            sudokuField[`cell${x}`]["values"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x}`]["block"] = 9;
        }
        if (x < 66 && x > 62) {
            sudokuField[`cell${x}`] = {}
            sudokuField[`cell${x}`]["values"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x}`]["block"] = 7;
        }
        if (x < 69 && x > 65) {
            sudokuField[`cell${x}`] = {}
            sudokuField[`cell${x}`]["values"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x}`]["block"] = 8;
        }
        if (x < 72 && x > 68) {
            sudokuField[`cell${x}`] = {}
            sudokuField[`cell${x}`]["values"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x}`]["block"] = 9;
        }
        if (x < 75 && x > 71) {
            sudokuField[`cell${x}`] = {}
            sudokuField[`cell${x}`]["values"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x}`]["block"] = 7;
        }
        if (x < 78 && x > 74) {
            sudokuField[`cell${x}`] = {}
            sudokuField[`cell${x}`]["values"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x}`]["block"] = 8;
        }
        if (x < 81 && x > 77) {
            sudokuField[`cell${x}`] = {}
            sudokuField[`cell${x}`]["values"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x}`]["block"] = 9;
        }
        if (x < 9) {
            sudokuField[`cell${x}`]["row"] = 1;
        }
        if (x < 18 && x > 8) {
            sudokuField[`cell${x}`]["row"] = 2;
        }
        if (x < 27 && x > 17) {
            sudokuField[`cell${x}`]["row"] = 3;
        }
        if (x < 36 && x > 26) {
            sudokuField[`cell${x}`]["row"] = 4;
        }
        if (x < 45 && x > 35) {
            sudokuField[`cell${x}`]["row"] = 5;
        }
        if (x < 54 && x > 44) {
            sudokuField[`cell${x}`]["row"] = 6;
        }
        if (x < 63 && x > 53) {
            sudokuField[`cell${x}`]["row"] = 7;
        }
        if (x < 72 && x > 62) {
            sudokuField[`cell${x}`]["row"] = 8;
        }
        if (x < 81 && x > 71) {
            sudokuField[`cell${x}`]["row"] = 9;
        }
        if (x == 0 || x == 0 + 1 * 9 || x == 0 + 2 * 9 || x == 0 + 3 * 9 || x == 0 + 4 * 9 || x == 0 + 5 * 9 || x == 0 + 6 * 9 || x == 0 + 7 * 9 || x == 0 + 8 * 9) {
            sudokuField[`cell${x}`]["column"] = 1;
        }
        if (x == 1 || x == 1 + 1 * 9 || x == 1 + 2 * 9 || x == 1 + 3 * 9 || x == 1 + 4 * 9 || x == 1 + 5 * 9 || x == 1 + 6 * 9 || x == 1 + 7 * 9 || x == 1 + 8 * 9) {
            sudokuField[`cell${x}`]["column"] = 2;
        }
        if (x == 2 || x == 2 + 1 * 9 || x == 2 + 2 * 9 || x == 2 + 3 * 9 || x == 2 + 4 * 9 || x == 2 + 5 * 9 || x == 2 + 6 * 9 || x == 2 + 7 * 9 || x == 2 + 8 * 9) {
            sudokuField[`cell${x}`]["column"] = 3;
        }
        if (x == 3 || x == 3 + 1 * 9 || x == 3 + 2 * 9 || x == 3 + 3 * 9 || x == 3 + 4 * 9 || x == 3 + 5 * 9 || x == 3 + 6 * 9 || x == 3 + 7 * 9 || x == 3 + 8 * 9) {
            sudokuField[`cell${x}`]["column"] = 4;
        }
        if (x == 4 || x == 4 + 1 * 9 || x == 4 + 2 * 9 || x == 4 + 3 * 9 || x == 4 + 4 * 9 || x == 4 + 5 * 9 || x == 4 + 6 * 9 || x == 4 + 7 * 9 || x == 4 + 8 * 9) {
            sudokuField[`cell${x}`]["column"] = 5;
        }
        if (x == 5 || x == 5 + 1 * 9 || x == 5 + 2 * 9 || x == 5 + 3 * 9 || x == 5 + 4 * 9 || x == 5 + 5 * 9 || x == 5 + 6 * 9 || x == 5 + 7 * 9 || x == 5 + 8 * 9) {
            sudokuField[`cell${x}`]["column"] = 6;
        }
        if (x == 6 || x == 6 + 1 * 9 || x == 6 + 2 * 9 || x == 6 + 3 * 9 || x == 6 + 4 * 9 || x == 6 + 5 * 9 || x == 6 + 6 * 9 || x == 6 + 7 * 9 || x == 6 + 8 * 9) {
            sudokuField[`cell${x}`]["column"] = 7;
        }
        if (x == 7 || x == 7 + 1 * 9 || x == 7 + 2 * 9 || x == 7 + 3 * 9 || x == 7 + 4 * 9 || x == 7 + 5 * 9 || x == 7 + 6 * 9 || x == 7 + 7 * 9 || x == 7 + 8 * 9) {
            sudokuField[`cell${x}`]["column"] = 8;
        }
        if (x == 8 || x == 8 + 1 * 9 || x == 8 + 2 * 9 || x == 8 + 3 * 9 || x == 8 + 4 * 9 || x == 8 + 5 * 9 || x == 8 + 6 * 9 || x == 8 + 7 * 9 || x == 8 + 8 * 9) {
            sudokuField[`cell${x}`]["column"] = 9;
        }
    }

    let field = document.getElementById('field')
    let aElements = field.querySelectorAll('a')

    aElements.forEach((element) => {
        let intPosition = cellLocator(2, `${element.id}`)
        element.addEventListener('click', (e) => {
            rowEL = document.getElementById("row")
            columnEL = document.getElementById("column")

            rowEL.value = sudokuField[`cell${intPosition}`]["row"]
            console.log(`select row ${sudokuField[`cell${intPosition}`]["row"]}`)
            columnEL.value = sudokuField[`cell${intPosition}`]["column"]
            console.log(`select column ${sudokuField[`cell${intPosition}`]["column"]}`)
        })
    })
}

function readButton() {
    // using global variable sudokuField

    // console.log(sudokuField)

    let field = document.getElementById('field')
    let aElements = field.querySelectorAll('a')

    aElements.forEach((element) => {
        let intPosition = cellLocator(2, `${element.id}`)
        if (element.innerText != "0") {
            sudokuField[`cell${intPosition}`]["values"] = [parseInt(element.innerText)]
            console.log(`cell${intPosition} now reads ${element.innerText}`)
        } else if (element.innerText == "0") {
            sudokuField[`cell${intPosition}`]["values"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            // console.log(`array${intPosition} now reads a full array.`)
        } else {
            console.log("something went wrong reading sudoku into memory")
        }  
    })

    console.log("Reading Succesful")
}

function runButton() {
    // Ik moet nu met de run button aan de slag. Read is ook al uitgewerkt. Run is wat nou nog overblijft.

    // Hij moet grofweg twee dingen doen. Al ingevulde cijfers afgaan en de overigen wegstrepen.
    // En dan moet ie nog nagaan of in het veld al enkelen overgebleven zijn die ook aan het rijtje toegevoegd kunnen worden.

    // Is dat niet een hele goede aanpak??

    // Hij moet met de nummering werken. Per arraynummer. Als coördinaten.

    let run = startAlgo();
    if (run == "exit") {
        console.log("Sudoku is solved")
    } else {
        console.log("Sudoku is not yet solved, maybe click once more?")
    }
}

function setValueCell() {

    let inputValue = document.getElementById("cellAllocator").value
    
    let locationColumn = document.getElementById("column").value
    let locationRow = document.getElementById("row").value

    let stringLocation = cellLocator(1, [locationColumn, locationRow])

    let cellElement = document.getElementById(`${stringLocation}`)
    cellElement.innerText = inputValue
    // refresh page...?
}

function cellLocator(mode, coördinates) {
    if (mode == 1) {
        let locationColumn = coördinates[0]
        let locationRow = coördinates[1]

        let wholes1 = parseInt(locationColumn / 3) 
        let rest1 = locationColumn % 3

        // console.log(`wholes1 = ${wholes1}`)
        // console.log(`rest1 = ${rest1}`)

        let wholes2 = parseInt(locationRow / 3)
        let rest2 = locationRow % 3
         
        // console.log(`wholes2 = ${wholes2}`)
        // console.log(`rest2 = ${rest2}`)

        let digit1 = ""
        let digit2 = ""
        let digit3 = ""
        let digit4 = ""

        if (wholes1 == 0) {
            if (rest1 == 0) {
                digit1 = "cannot have nul"
                digit3 = "cannot have nul"
            } else if (rest1 == 1) {
                digit1 = "L"
                digit3 = "L"  
            } else if (rest1 == 2) {
                digit1 = "L"
                digit3 = "M"
            }
        } else if (wholes1 == 1) {
            if (rest1 == 0) {
                digit1 = "L"
                digit3 = "R"
            } else if (rest1 == 1) {
                digit1 = "M"
                digit3 = "L"
            } else if (rest1 == 2) {
                digit1 = "M"
                digit3 = "M"
            }
        } else if (wholes1 == 2) {
            if (rest1 == 0) {
                digit1 = "M"
                digit3 = "R"
            } else if (rest1 == 1) {
                digit1 = "R"
                digit3 = "L"
            } else if (rest1 == 2) {
                digit1 = "R"
                digit3 = "M"
            }
        } else if (wholes1 == 3) {
                digit1 = "R"
                digit3 = "R"
            }

        if (wholes2 == 0) {
            if (rest2 == 0) {
                digit2 = "cannot have nul"
                digit4 = "cannot have nul"
            } else if (rest2 == 1) {
                digit2 = "T"
                digit4 = "T"
            } else if (rest2 == 2) {
                digit2 = "T"
                digit4 = "M"
            }
        } else if (wholes2 == 1) {
            if (rest2 == 0) {
                digit2 = "T"
                digit4 = "B"
            } else if (rest2 == 1) {
                digit2 = "M"
                digit4 = "T"
            } else if (rest2 == 2) {
                digit2 = "M"
                digit4 = "M"
            }
        } else if (wholes2 == 2) {
            if (rest2 == 0) {
                digit2 = "M"
                digit4 = "B"
            } else if (rest2 == 1) {
                digit2 = "B"
                digit4 = "T"
            } else if (rest2 == 2) {
                digit2 = "B"
                digit4 = "M"
            }
        } else if (wholes2 == 3) {
            digit2 = "B"
            digit4 = "B"
        }

        let resultString = digit1 + digit2 + "_" + digit3 + digit4
        
        return resultString

    } else if (mode == 2) {
        // console.log("only 1 mode currently (cellLocator)")
        let idPosition = coördinates

        // deze gaat vanaf 1 tot 81...
        switch(idPosition) {
            case "LT_LT":
                return 0
            case "LT_MT":
                return 1
            case "LT_RT":
                return 2
            case "MT_LT":
                return 3
            case "MT_MT":
                return 4
            case "MT_RT":
                return 5
            case "RT_LT":
                return 6
            case "RT_MT":
                return 7
            case "RT_RT":
                return 8
            case "LT_LM":
                return 9
            case "LT_MM":
                return 10
            case "LT_RM":
                return 11
            case "MT_LM":
                return 12
            case "MT_MM":
                return 13
            case "MT_RM":
                return 14
            case "RT_LM":
                return 15
            case "RT_MM":
                return 16
            case "RT_RM":
                return 17
            case "LT_LB":
                return 18
            case "LT_MB":
                return 19
            case "LT_RB":
                return 20
            case "MT_LB":
                return 21
            case "MT_MB":
                return 22
            case "MT_RB":
                return 23
            case "RT_LB":
                return 24
            case "RT_MB":
                return 25
            case "RT_RB":
                return 26
            case "LM_LT":
                return 27
            case "LM_MT":
                return 28
            case "LM_RT":
                return 29
            case "MM_LT":
                return 30
            case "MM_MT":
                return 31
            case "MM_RT":
                return 32
            case "RM_LT":
                return 33
            case "RM_MT":
                return 34
            case "RM_RT":
                return 35
            case "LM_LM":
                return 36
            case "LM_MM":
                return 37
            case "LM_RM":
                return 38
            case "MM_LM":
                return 39
            case "MM_MM":
                return 40
            case "MM_RM":
                return 41
            case "RM_LM":
                return 42
            case "RM_MM":
                return 43
            case "RM_RM":
                return 44
            case "LM_LB":
                return 45
            case "LM_MB":
                return 46
            case "LM_RB":
                return 47
            case "MM_LB":
                return 48
            case "MM_MB":
                return 49
            case "MM_RB":
                return 50
            case "RM_LB":
                return 51
            case "RM_MB":
                return 52
            case "RM_RB":
                return 53
            case "LB_LT":
                return 54
            case "LB_MT":
                return 55
            case "LB_RT":
                return 56
            case "MB_LT":
                return 57
            case "MB_MT":
                return 58
            case "MB_RT":
                return 59
            case "RB_LT":
                return 60
            case "RB_MT":
                return 61
            case "RB_RT":
                return 62
            case "LB_LM":
                return 63
            case "LB_MM":
                return 64
            case "LB_RM":
                return 65
            case "MB_LM":
                return 66
            case "MB_MM":
                return 67
            case "MB_RM":
                return 68
            case "RB_LM":
                return 69
            case "RB_MM":
                return 70
            case "RB_RM":
                return 71
            case "LB_LB":
                return 72
            case "LB_MB":
                return 73
            case "LB_RB":
                return 74
            case "MB_LB":
                return 75
            case "MB_MB":
                return 76
            case "MB_RB":
                return 77
            case "RB_LB":
                return 78
            case "RB_MB":
                return 79
            case "RB_RB":
                return 80
            default:
                return "error string location (switch)"
        }
    }
}

function showValue(x) {
    let rowNR = sudokuField[`cell${x}`]["row"];
    let columnNR = sudokuField[`cell${x}`]["column"];

    // Let op, column en row volgorde draait om vanaf nu.
    let coördinatesARRAY = [columnNR, rowNR];
    let stringLocation = cellLocator(1, coördinatesARRAY);

    let value = "N"

    if (sudokuField[`cell${x}`]["values"].length == 1) {
        value = sudokuField[`cell${x}`]["values"][0];
    }
    
    let cellElement = document.getElementById(`${stringLocation}`);
    cellElement.innerText = value; 
}

function removeOtherValues(x, a) {
    let valueToBeSpliced = sudokuField[`cell${x}`]["values"][0];

    if (sudokuField[`cell${x}`]["block"] == sudokuField[`cell${a}`]["block"]) {
        let index = sudokuField[`cell${a}`]["values"].indexOf(valueToBeSpliced);
        if (index > -1) {
            let spliced = sudokuField[`cell${a}`]["values"].splice(index, 1);
            console.log(spliced + " has been spliced");
        }
    }
    if (sudokuField[`cell${x}`]["row"] == sudokuField[`cell${a}`]["row"]) {
        let index = sudokuField[`cell${a}`]["values"].indexOf(valueToBeSpliced);
        if (index > -1) {
            let spliced = sudokuField[`cell${a}`]["values"].splice(index, 1);
            console.log(spliced + " has been spliced");
        }
    }
    if (sudokuField[`cell${x}`]["column"] == sudokuField[`cell${a}`]["column"]) {
        let index = sudokuField[`cell${a}`]["values"].indexOf(valueToBeSpliced);
        if (index > -1) {
            let spliced = sudokuField[`cell${a}`]["values"].splice(index, 1);
            console.log(spliced + " has been spliced");
        }
    }
}

function startAlgo() {
    let shownValue = 0

    // En nu weer 1 tot 81...
    for (let x = 0; x < 81; x++) {
        if (sudokuField[`cell${x}`]["values"].length > 1) {
            console.log("Arrays not yet on single value")
            continue
        } else if (sudokuField[`cell${x}`]["values"].length == 1) {
            showValue(x);
            shownValue += 1;
            for (let a = 0; a < 81; a++) {
                if (a == x) {
                    continue
                }
                removeOtherValues(x, a);
            }
        } else {
            console.log("Arrays of length < 1 present, apparently...");
            break
        }
    }

    if (shownValue == 81) {
        return "exit"
    }
}

// ------------------------
// Event Handlers

let button1 = document.getElementById("cellAllButton")

button1.addEventListener('click', (e) => {

    setValueCell();
})

let button2 = document.getElementById("readButton");

button2.addEventListener('click', (e) => {
    
    readButton();
})

let button3 = document.getElementById("runButton");

button3.addEventListener('click', (e) => {
    
    runButton();
})

initializeField();