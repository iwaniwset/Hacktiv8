for (i = 1; i<=100; i+=3){
    if(i % 2 !== 0){
        console.log(i + ' ganjil');
    } else if(i % 2 === 0 ){
        console.log(i + ' genap');
    }
} 

for (i = 50; i<=200; i+=5){
    if(i % 3 === 0){
        console.log(i + ' faktor dari 3')
    } else if(i % 3 !== 0){
        console.log(i + ' tidak bisa dibagi 3');
    }

}

for (i = 100; i <= 200; i+=7){
    if(i % 8 === 0){
        console.log(i);
    }
}