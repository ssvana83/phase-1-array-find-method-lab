const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    { year: "2012", result: "N/A"}
]

function superbowlWin(array) {
    for(let item of array) {
        if(item.result === "W") {
            return item.year;
        }
    }
}

// const sadReality = array.find(element => element === "W");

// function superbowlWin(record) {
//     if (record = sadReality) {
//         return record.year;
//     } else return undefined;
// }

// function superbowlWin(win) {
// let year = win.year;
// if (win.result === "W") {
//     return year;
// } else {
//     return undefined;
// }
// }

// const finder = record.find(superbowlWin);



