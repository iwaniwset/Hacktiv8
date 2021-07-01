 var num = 3
 for (var i = num; i > 0; i--) {
     output = ''
     for (var j = 1; j <= i; j++) {
         output += ' ';
         // console.log(output, `<<<<< output pertama`);
     }
     for (var k = 0; k <= ((num - i) * 2); k++) {
         if (k % 2 === 0) {
             output += 'x';
         } else {
             output += 'o';
         }
     }
     for (var l = 1; l <= i - 1; l++) {
         output += ' ';
     }
     console.log(output);
 }