function clickHome(){
    document.getElementById("home_form").style.display="block";
    document.getElementById("comestibles_form").style.display="none";
    document.getElementById("gaseosa_form").style.display="none";    
}

function clickComestibles(){
    document.getElementById("home_form").style.display="none";
    document.getElementById("comestibles_form").style.display="block";
    document.getElementById("gaseosa_form").style.display="none";
}

function resultadoComestibles(){
    let costovar = parseFloat(document.getElementById("costo").value);
    let ivavar = parseFloat(document.getElementById("iva").value);
    let gananciavar = parseFloat(document.getElementById("ganancia").value);
    let result = costovar + (costovar*(ivavar/100)); 41.14
    let reResult = result + (result*(gananciavar/100)); 57.59
    let respuesta = "El precio final es $" + reResult.toFixed(5);
    document.getElementById("resultado").innerHTML = respuesta;
    document.getElementById("costo").value = "";
    document.getElementById("iva").value = "21";
    document.getElementById("ganancia").value = "40";
}

function clickGaseosa(){
    document.getElementById("home_form").style.display="none";
    document.getElementById("comestibles_form").style.display="none";
    document.getElementById("gaseosa_form").style.display="block";
}

function resultadoGaseosa(){
    let costovar = parseFloat(document.getElementById("costoG").value);
    let impIntvar = parseFloat(document.getElementById("impInt").value);
    let unidadesvar = parseFloat(document.getElementById("unidades").value);
    let resta = (costovar - impIntvar);
    let result = resta / 1.21;
    let reResult = result / unidadesvar;
    let respuesta = "El precio final por unidad es $" + reResult.toFixed(5);
    document.getElementById("resultadoG").innerHTML = respuesta;
    document.getElementById("costoG").value = "";
    document.getElementById("impInt").value = "0";
    document.getElementById("unidades").value = "";
}

// Responsive para celulares

