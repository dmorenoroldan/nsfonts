/* ============ REDONDEAR 6 DECIMALES ============ */
function roundTo(num) {
  return +(Math.round(num + "e+6")  + "e-6");
}

function roundTo2(num) {
  return +(Math.round(num + "e+2")  + "e-2");
}

/* ============ REM A PIXEL ============ */
function rem2px(rem) {
    var _valorfont = $("#fontsize").val();
    var fontsize = parseInt(_valorfont);
    return rem * fontsize;
}

/* ============ ADD H ============ */
function addH(name,nivel) {
  var _valorfont = $("#fontsize").val();
  var fontsize = parseInt(_valorfont);
  var escala = $("#escala").val();
  var mrem = Math.pow(escala,nivel);
  var pixel = rem2px(mrem);

  $("#resultado").append("<div><span>"+roundTo(mrem)+"rem / "+roundTo2(pixel)+"px</span><p style='font-size:"+pixel+"px;'>"+name+"</p><hr></div>");
}


/* ============ GET PIXELS ============ */
function getPx(nivel) {
  var _valorfont = $("#fontsize").val();
  var fontsize = parseInt(_valorfont);
  var escala = $("#escala").val();
  var mrem = Math.pow(escala,nivel);
  var pixel = rem2px(mrem);

  return pixel;
}


/* ============ HACER CALCULO ============ */
$('#calc').click(function() {
  var _valorfont = $("#fontsize").val();
  var fontsize = parseInt(_valorfont);

  var _valoresc = $("#escala").val();
  var escala = parseInt(_valoresc);

  var fuente = $("#fuente").val();

  if (fontsize>0 && escala>0) {
    $("#resultado").remove();
    $("#form").after("<div id='resultado'></div>");

    addH("Heading H1",5);
    addH("Heading H2",4);
    addH("Heading H3",3);
    addH("Heading H4",2);
    addH("Heading H5",1);
    addH("Heading H6",0);
    addH("Cuerpo de texto",0);
    addH("Small 1",-1);
    addH("Small 2",-2);
    addH("Small 3",-3);

    $("#ejemplo").remove();

    $("#resultado").after("<div id='ejemplo'></div>");
    $('#ejemplo').css('background-image','url("http://basehold.it/i/' + (getPx(0)*1.5) + '")');
    $('#ejemplo').css('background-size','4px '+ (getPx(0)*1.5) +'px');
    $("#ejemplo").append("<p style='font-size:"+getPx(0)+"px;line-height:1.5;margin-top:"+(getPx(0)*1.5)+"px;margin-bottom:"+(getPx(0)*1.5)+"px;opacity:.8;'>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p><p style='font-size:"+getPx(0)+"px;line-height:1.5;margin-bottom:"+(getPx(0)*1.5)+"px;opacity:.8;'>The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.</p>");

    fontSwitcher(fuente+"#G","p");

  }
  else {
    console.log("error");
  }
});
