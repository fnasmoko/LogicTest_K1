// Soal No1 Fizzbuzz
function fizzbuzz(batas){
    for (let i=0; i<batas; i++){
     if (i%2==0) console.log('FIZZ')
     else console.log('BUZZ')
    }
}
fizzbuzz(5)

// Soal No2 palindrome
function palindrome(kata) {
return (
  kata.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase() ===
  kata.split('').reverse().join('')
  .replace(/[^a-zA-Z0-9]/gi, '').toLowerCase()
);
}
console.log(palindrome('cek'))