let detik = 135

let seconds = detik % 60
// console.log(seconds);
let minutes = Math.floor(detik/60)
// console.log(minutes);

if (detik < 60){
    console.log(`0:${detik} detik`);
} else {
    console.log(`${minutes}:${seconds}`);
}