var squadra = [];

var member1 = prompt('Come ti chiami?');
var member2 = prompt('Come ti chiami?');
var member3 = prompt('Come ti chiami?');
var member4 = prompt('Come ti chiami?');
var member5 = prompt('Come ti chiami?');

squadra.push(member1);
squadra.push(member2);
squadra.push(member3);
squadra.push(member4);
squadra.push(member5);

document.write("<ol>");

for (var i = 0; i < squadra.length; i++) {

  document.write("<li>"+squadra[i]+"</li>");

}

document.write("</ol>");
