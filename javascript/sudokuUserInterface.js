// javascript file
// import {readButton} from "./sudokuReadButton.js"

let sudokuField = {}

//-----------------------
// Main Functions

function readButton() {
    // using global variable sudokuField

    for (let x = 0; x < 81; x++) {
        if (x < 3) {
            sudokuField[`cell${x + 1}`]["value"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x + 1}`]["block"] = 1;
        }
        if (x < 6 && x > 2) {
            sudokuField[`cell${x + 1}`]["value"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x + 1}`]["block"] = 2;
        }
        if (x < 9 && x > 5) {
            sudokuField[`cell${x + 1}`]["value"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x + 1}`]["block"] = 3;
        }
        if (x < 12 && x > 8) {
            sudokuField[`cell${x + 1}`]["value"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x + 1}`]["block"] = 1;
        }
        if (x < 15 && x > 11) {
            sudokuField[`cell${x + 1}`]["value"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x + 1}`]["block"] = 2;
        }
        if (x < 18 && x > 14) {
            sudokuField[`cell${x + 1}`]["value"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x + 1}`]["block"] = 3;
        }
        if (x < 21 && x > 17) {
            sudokuField[`cell${x + 1}`]["value"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x + 1}`]["block"] = 1;
        }
        if (x < 24 && x > 20) {
            sudokuField[`cell${x + 1}`]["value"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x + 1}`]["block"] = 2;
        }
        if (x < 27 && x > 23) {
            sudokuField[`cell${x + 1}`]["value"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x + 1}`]["block"] = 3; 
        }
        if (x < 30 && x > 26) {
            sudokuField[`cell${x + 1}`]["value"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x + 1}`]["block"] = 4;
        }
        if (x < 33 && x > 29) {
            sudokuField[`cell${x + 1}`]["value"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x + 1}`]["block"] = 5;
        }
        if (x < 36 && x > 32) {
            sudokuField[`cell${x + 1}`]["value"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x + 1}`]["block"] = 6;
        }
        if (x < 39 && x > 35) {
            sudokuField[`cell${x + 1}`]["value"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x + 1}`]["block"] = 4;
        }
        if (x < 42 && x > 38) {
            sudokuField[`cell${x + 1}`]["value"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x + 1}`]["block"] = 5;
        }
        if (x < 45 && x > 41) {
            sudokuField[`cell${x + 1}`]["value"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x + 1}`]["block"] = 6;
        }
        if (x < 48 && x > 44) {
            sudokuField[`cell${x + 1}`]["value"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x + 1}`]["block"] = 4;
        }
        if (x < 51 && x > 47) {
            sudokuField[`cell${x + 1}`]["value"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x + 1}`]["block"] = 5;
        }
        if (x < 54 && x > 50) {
            sudokuField[`cell${x + 1}`]["value"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x + 1}`]["block"] = 6;
        }
        if (x < 57 && x > 53) {
            sudokuField[`cell${x + 1}`]["value"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x + 1}`]["block"] = 7;
        }
        if (x < 60 && x > 56) {
            sudokuField[`cell${x + 1}`]["value"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x + 1}`]["block"] = 8;
        }
        if (x < 63 && x > 59) {
            sudokuField[`cell${x + 1}`]["value"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x + 1}`]["block"] = 9;
        }
        if (x < 66 && x > 62) {
            sudokuField[`cell${x + 1}`]["value"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x + 1}`]["block"] = 7;
        }
        if (x < 69 && x > 65) {
            sudokuField[`cell${x + 1}`]["value"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x + 1}`]["block"] = 8;
        }
        if (x < 72 && x > 68) {
            sudokuField[`cell${x + 1}`]["value"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x + 1}`]["block"] = 9;
        }
        if (x < 75 && x > 71) {
            sudokuField[`cell${x + 1}`]["value"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x + 1}`]["block"] = 7;
        }
        if (x < 78 && x > 74) {
            sudokuField[`cell${x + 1}`]["value"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x + 1}`]["block"] = 8;
        }
        if (x < 81 && x > 77) {
            sudokuField[`cell${x + 1}`]["value"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            sudokuField[`cell${x + 1}`]["block"] = 9;
        }
        if (x < 9) {
            sudokuField[`cell${x + 1}`]["row"] = 1;
        }
        if (x < 18 && x > 8) {
            sudokuField[`cell${x + 1}`]["row"] = 2;
        }
        if (x < 27 && x > 17) {
            sudokuField[`cell${x + 1}`]["row"] = 3;
        }
        if (x < 36 && x > 26) {
            sudokuField[`cell${x + 1}`]["row"] = 4;
        }
        if (x < 45 && x > 35) {
            sudokuField[`cell${x + 1}`]["row"] = 5;
        }
        if (x < 54 && x > 44) {
            sudokuField[`cell${x + 1}`]["row"] = 6;
        }
        if (x < 63 && x > 53) {
            sudokuField[`cell${x + 1}`]["row"] = 7;
        }
        if (x < 72 && x > 62) {
            sudokuField[`cell${x + 1}`]["row"] = 8;
        }
        if (x < 81 && x > 71) {
            sudokuField[`cell${x + 1}`]["row"] = 9;
        }
        if (x == 0 || x == 0 + 1 * 9 || x == 0 + 2 * 9 || x == 0 + 3 * 9 || x == 0 + 4 * 9 || x == 0 + 5 * 9 || x == 0 + 6 * 9 || x == 0 + 7 * 9 || x == 0 + 8 * 9) {
            sudokuField[`cell${x + 1}`]["column"] = 1;
        }
        if (x == 1 || x == 1 + 1 * 9 || x == 1 + 2 * 9 || x == 1 + 3 * 9 || x == 1 + 4 * 9 || x == 1 + 5 * 9 || x == 1 + 6 * 9 || x == 1 + 7 * 9 || x == 1 + 8 * 9) {
            sudokuField[`cell${x + 1}`]["column"] = 2;
        }
        if (x == 2 || x == 2 + 1 * 9 || x == 2 + 2 * 9 || x == 2 + 3 * 9 || x == 2 + 4 * 9 || x == 2 + 5 * 9 || x == 2 + 6 * 9 || x == 2 + 7 * 9 || x == 2 + 8 * 9) {
            sudokuField[`cell${x + 1}`]["column"] = 3;
        }
        if (x == 3 || x == 3 + 1 * 9 || x == 3 + 2 * 9 || x == 3 + 3 * 9 || x == 3 + 4 * 9 || x == 3 + 5 * 9 || x == 3 + 6 * 9 || x == 3 + 7 * 9 || x == 3 + 8 * 9) {
            sudokuField[`cell${x + 1}`]["column"] = 4;
        }
        if (x == 4 || x == 4 + 1 * 9 || x == 4 + 2 * 9 || x == 4 + 3 * 9 || x == 4 + 4 * 9 || x == 4 + 5 * 9 || x == 4 + 6 * 9 || x == 4 + 7 * 9 || x == 4 + 8 * 9) {
            sudokuField[`cell${x + 1}`]["column"] = 5;
        }
        if (x == 5 || x == 5 + 1 * 9 || x == 5 + 2 * 9 || x == 5 + 3 * 9 || x == 5 + 4 * 9 || x == 5 + 5 * 9 || x == 5 + 6 * 9 || x == 5 + 7 * 9 || x == 5 + 8 * 9) {
            sudokuField[`cell${x + 1}`]["column"] = 6;
        }
        if (x == 6 || x == 6 + 1 * 9 || x == 6 + 2 * 9 || x == 6 + 3 * 9 || x == 6 + 4 * 9 || x == 6 + 5 * 9 || x == 6 + 6 * 9 || x == 6 + 7 * 9 || x == 6 + 8 * 9) {
            sudokuField[`cell${x + 1}`]["column"] = 7;
        }
        if (x == 7 || x == 7 + 1 * 9 || x == 7 + 2 * 9 || x == 7 + 3 * 9 || x == 7 + 4 * 9 || x == 7 + 5 * 9 || x == 7 + 6 * 9 || x == 7 + 7 * 9 || x == 7 + 8 * 9) {
            sudokuField[`cell${x + 1}`]["column"] = 8;
        }
        if (x == 8 || x == 8 + 1 * 9 || x == 8 + 2 * 9 || x == 8 + 3 * 9 || x == 8 + 4 * 9 || x == 8 + 5 * 9 || x == 8 + 6 * 9 || x == 8 + 7 * 9 || x == 8 + 8 * 9) {
            sudokuField[`cell${x + 1}`]["column"] = 9;
        }
    }

    // console.log(sudokuField)

    let field = document.getElementById('field')
    let aElements = field.querySelectorAll('a')

    aElements.forEach((element) => {
        let intPosition = cellLocator(2, `${element.id}`)
        if (element.innerText != "0") {
            sudokuField[`cell${intPosition}`]["value"] = [parseInt(element.innerText)]
            console.log(`cell${intPosition} now reads ${element.innerText}`)
        } else if (element.innerText == "0") {
            sudokuField[`cell${intPosition}`]["value"] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
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

    while (startAlgo() != "exit") {
        startAlgo()
    }

    console.log("Complete?")
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

        switch(idPosition) {
            case "LT_LT":
                return 1
            case "LT_MT":
                return 2
            case "LT_RT":
                return 3
            case "MT_LT":
                return 4
            case "MT_MT":
                return 5
            case "MT_RT":
                return 6
            case "RT_LT":
                return 7
            case "RT_MT":
                return 8
            case "RT_RT":
                return 9
            case "LT_LM":
                return 10
            case "LT_MM":
                return 11
            case "LT_RM":
                return 12
            case "MT_LM":
                return 13
            case "MT_MM":
                return 14
            case "MT_RM":
                return 15
            case "RT_LM":
                return 16
            case "RT_MM":
                return 17
            case "RT_RM":
                return 18
            case "LT_LB":
                return 19
            case "LT_MB":
                return 20
            case "LT_RB":
                return 21
            case "MT_LB":
                return 22
            case "MT_MB":
                return 23
            case "MT_RB":
                return 24
            case "RT_LB":
                return 25
            case "RT_MB":
                return 26
            case "RT_RB":
                return 27
            case "LM_LT":
                return 28
            case "LM_MT":
                return 29
            case "LM_RT":
                return 30
            case "MM_LT":
                return 31
            case "MM_MT":
                return 32
            case "MM_RT":
                return 33
            case "RM_LT":
                return 34
            case "RM_MT":
                return 35
            case "RM_RT":
                return 36
            case "LM_LM":
                return 37
            case "LM_MM":
                return 38
            case "LM_RM":
                return 39
            case "MM_LM":
                return 40
            case "MM_MM":
                return 41
            case "MM_RM":
                return 42
            case "RM_LM":
                return 43
            case "RM_MM":
                return 44
            case "RM_RM":
                return 45
            case "LM_LB":
                return 46
            case "LM_MB":
                return 47
            case "LM_RB":
                return 48
            case "MM_LB":
                return 49
            case "MM_MB":
                return 50
            case "MM_RB":
                return 51
            case "RM_LB":
                return 52
            case "RM_MB":
                return 53
            case "RM_RB":
                return 54
            case "LB_LT":
                return 55
            case "LB_MT":
                return 56
            case "LB_RT":
                return 57
            case "MB_LT":
                return 58
            case "MB_MT":
                return 59
            case "MB_RT":
                return 60
            case "RB_LT":
                return 61
            case "RB_MT":
                return 62
            case "RB_RT":
                return 63
            case "LB_LM":
                return 64
            case "LB_MM":
                return 65
            case "LB_RM":
                return 66
            case "MB_LM":
                return 67
            case "MB_MM":
                return 68
            case "MB_RM":
                return 69
            case "RB_LM":
                return 70
            case "RB_MM":
                return 71
            case "RB_RM":
                return 72
            case "LB_LB":
                return 73
            case "LB_MB":
                return 74
            case "LB_RB":
                return 75
            case "MB_LB":
                return 76
            case "MB_MB":
                return 77
            case "MB_RB":
                return 78
            case "RB_LB":
                return 79
            case "RB_MB":
                return 80
            case "RB_RB":
                return 81
            default:
                return "error string location (switch)"
        }
    }
}

function startAlgo() {
    for (let x = 0; x < 81; x++) {
        let shownValue = 0
        if (sudokuField[`cell${x + 1}`]["value"].length > 1) {
            continue
        } else if (sudokuField[`cell${x + 1}`]["value"].length == 1) {
            showValue(x + 1);
            showValue += 1;
            for (let a = 0; a < 81; a++) {
                if (a == x) {
                    continue
                }
                removeOtherValues(x + 1, a + 1);
            }
        } else {
            console.log("Arrays of length < 1 present, apparently...");
            break
        }
        if (shownValue == 81) {
            return "exit"
        }
    }
}

function showValue(x) {
    let rowNR = sudokuField[`cell${x}`]["row"];
    let columnNR = sudokuField[`cell${x}`]["column"];

    // Let op, column en row volgorde draait om vanaf nu.
    let coördinatesARRAY = [columnNR, rowNR];
    stringLocation = cellLocator(1, coördinatesARRAY);

    let value = sudokuField[`cell${x}`]["value"];

    let cellElement = document.getElementById(`${stringLocation}`);
    cellElement.innerText = value; 
}

function removeOtherValues(x, a) {
    if (sudokuField[`cell${x}`]["block"] == sudokuField[`cell${a}`]["block"]) {
        sudokuField[`cell${a}`]["value"].splice(sudokuField[`cell${x}`]["value"][0])
    }
    if (sudokuField[`cell${x}`]["row"] == sudokuField[`cell${a}`]["row"]) {
        sudokuField[`cell${a}`]["value"].splice(sudokuField[`cell${x}`]["value"][0])
    }
    if (sudokuField[`cell${x}`]["column"] == sudokuField[`cell${a}`]["column"]) {
        sudokuField[`cell${a}`]["value"].splice(sudokuField[`cell${x}`]["value"][0])
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