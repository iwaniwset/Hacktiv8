let rows = 5
let column = 5

console.log(`========= SOAL NOMER 1==========`);
for (let i = 0; i < column; i++){
    console.log("*");
}

console.log(`========= SOAL NOMER 2==========`);
for (let i = 0; i < column; i++){
    let lineColumn = ""
    for(let j=0; j<rows; j++){
        lineColumn += "*"
    }
    console.log(lineColumn);
}

console.log(`========= SOAL NOMER 3==========`);
for (let i = column; i> 0; i--){
    let lineColumn = ""
    for (let j = rows; j>=i; j--){
        lineColumn += "*"
    }
    console.log(lineColumn);
}

console.log(`========= SOAL NOMER 3==========`);
for (let i = column; i> 0; i--){
    let lineColumn = ""
    for (let j = 1; j<=i; j++){
        lineColumn += "*"
    }
    console.log(lineColumn);
}



