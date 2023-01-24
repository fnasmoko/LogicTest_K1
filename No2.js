// Soal No2 palindrome
function palindrome(kata) {
    return (
      kata.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase() ===
      kata.split('').reverse().join('')
      .replace(/[^a-zA-Z0-9]/gi, '').toLowerCase()
    );
    }
    console.log(palindrome('cek'))