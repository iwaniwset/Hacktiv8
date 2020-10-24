nama = 'Upi'
umur = 10
uang = 50000
anggur = 300000
juice = 50000

if(!nama){
    console.log('Anda tidak boleh masuk');
} else {
    if(umur < 17){
        console.log('kamu hanya bisa memesan juice');
        if (uang >= juice){
            console.log('kamu boleh memesan minuman');
        } else{
            console.log('uang kamu tidak cukup mas bro');
        }
    } else {
        console.log('kamu boleh memesan anggur');
        if (uang > juice){
            console.log('kamu boleh memesan minuman');
        } else{
            console.log('uang kamu tidak cukup mas bro');
        }
    }
}