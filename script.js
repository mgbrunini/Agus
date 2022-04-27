function clickHome(){
    document.getElementById("home_form").style.display="block";
    document.getElementById("any_form").style.display="none";
    document.getElementById("gaseosa_form").style.display="none";    
}

function clickAny(){
    document.getElementById("home_form").style.display="none";
    document.getElementById("any_form").style.display="block";
    document.getElementById("gaseosa_form").style.display="none";
}

function resultadoAny(){
    let costovar = parseInt(document.getElementById("costo").value);
    let ivavar = parseInt(document.getElementById("iva").value);
    let gananciavar = parseInt(document.getElementById("ganancia").value);
    let result = costovar + (costovar*(ivavar/100)); 41.14
    let reResult = result + (result*(gananciavar/100)); 57.59
    let respuesta = "El precio final es $" + reResult.toFixed(2);
    document.getElementById("resultado").innerHTML = respuesta;
}

function clickGaseosa(){
    document.getElementById("home_form").style.display="none";
    document.getElementById("any_form").style.display="none";
    document.getElementById("gaseosa_form").style.display="block";
}

function resultadoGaseosa(){
    let costovar = parseInt(document.getElementById("costoG").value);
    let impIntvar = parseInt(document.getElementById("impInt").value);
    let ivavar = ((parseInt(document.getElementById("iva").value))/100)+1;
    let unidadesvar = parseInt(document.getElementById("unidades").value);
    let result = (costovar - impIntvar)*ivavar;
    let reResult = result / unidadesvar;
    let respuesta = "El precio final por unidad es $" + reResult.toFixed(2);
    document.getElementById("resultadoG").innerHTML = respuesta;
}
