var spesa = [];

var item1 = prompt('Cosa vuoi acquistare?');
var item2 = prompt('Desideri qualcos^altro');
var item3 = prompt('Nient^altro?');

spesa.push(item1);
spesa.push(item2);
spesa.push(item3);

document.write("<ul>");

for (var i = 0; i < spesa.length; i++) {

  document.write("<li>"+spesa[i]+"</li>");

}

document.write("</ul>");
