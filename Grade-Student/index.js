let nama = 'Upi'
let nilai = '34'

if(nilai >=80 && nilai<=100){
    console.log(nama + ' Kamu mendapatkan Nilai A');
} else if(nilai >=65 && nilai<=79){
    console.log(nama + ' Kamu mendapatkan Nilai B');
} else if(nilai >=50 && nilai<=64){
    console.log(nama + ' Kamu mendapatkan Nilai C');
} else if(nilai >=35 && nilai<=49){
    console.log(nama + ' Kamu mendapatkan Nilai D');
} else if(nilai >=0 && nilai<=34){
    console.log(nama + ' Kamu mendapatkan Nilai E');
} else {
    console.log('nilai invalid');
}