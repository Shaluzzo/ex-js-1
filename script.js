alert('Pari o Dispari?')

alert('Luca gioca pari')

alert('Stefano gioca dispari')

var luca = Math.floor(Math.random() * 5 + 1)

var stefano = Math.floor(Math.random() * 5 + 1)

alert('Luca Butta' + ' ' + luca)

alert('Stefano Butta' + ' ' + stefano)

var somma = luca + stefano

alert('Il risultato è' + ' ' + somma)

if (somma % 2 == 0) {
   alert('Luca vince')
}

else  {
   alert('Stefano vince')
}
