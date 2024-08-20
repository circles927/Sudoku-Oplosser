// javascript file
// import {readButton} from "./sudokuReadButton.js"

let sudokuField = {}

//-----------------------
// Main Functions

function readButton() {
    // using global variable sudokuField

    for (let x = 0; x < 81; x++){
        sudokuField[`array${x + 1}`] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    }

    // console.log(sudokuField)

    let field = document.getElementById('field')
    let aElements = field.querySelectorAll('a')

    aElements.forEach((element) => {
        let intPosition = cellLocator(2, `${element.id}`)
        if (element.innerText != "0") {
            sudokuField[`array${intPosition}`] = [element.innerText]
            console.log(`array${intPosition} now reads ${element.innerText}`)
        } else if (element.innerText == "0") {
            sudokuField[`array${intPosition}`] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            // console.log(`array${intPosition} now reads a full array.`)
        } else {
            console.log("something went wrong reading sudoku into memory")
        }  
    })

    console.log("Reading Succesful")
}

function runButton() {
    console.log("Calculating...")
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
    } else if (mode == 3) {
        // This must be based on locationColumn locationRow values, just like mode 1.

        // For each position, it returns the selection of positions it all has to check. The entire row, the entire column. And the same square box. Multiplying the 1 - 9 numbers times 9 for the column positions. And then manually entering the box ones. That seems the most straightforward way. Partly hardcoding, partly smart.

        console.log("not yet implemented (cellLocator)")
    } else {
        console.log("not possible (cellLocator)")
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