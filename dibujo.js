var texto = document.getElementById("txt_lineas");
var boton = document.getElementById("botoncitul");
boton.addEventListener("click", dibujoPorClick );

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  // var xxx = parseInt(texto.value);
  // var lineas = 60;
  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var colorcito = "#FAA";
  var espacio = ancho / lineas;

  // while(l < lineas)
  // {
  //   yi = 10 * l;
  //   xf = 10 *(l + 1);
  //   dibujarLinea(colorcito, 0, yi, xf, 300);
  //   console.log("Linea " + l);
  //   l = l + 1;
  //   l++
  // }
  for(l = 0; l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio *(l + 1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
    dibujarLinea(colorcito, yi, 0, 300, xf);
    console.log("Linea " + l);
  }

  // dibujarLinea("#AFA", 0,0,0,300); antialazing
  dibujarLinea(colorcito, 1,1,1,300);
  dibujarLinea(colorcito, 1,299,299,299);
}
