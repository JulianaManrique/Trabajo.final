window.onload = function() {
    const nomDiv = div => document.getElementById(div);
    const cantidad = () => {
        let C = nomDiv("Celsius-a-Fahrenheit").value;
        let K = nomDiv("Kelvin").value;
        let F = nomDiv("Fahrenheit").value;
        if ("Ingrese el valor a convertir " === 0 ) {
            alert("porfavor complete los campos ");
        }else if ( "fahrenheit-a-Celsius") {
            F = document.getElementById("cantidad").value;
            C = (F-32)*5/9;
            nomDiv("respuesta").innerHTML = "Celsius" + Celsius;
        }else if ("fahrenheit-a-Kelvin") {
            K = document.getElementById("cantidad").value;
            K = (F-32)*5/9 +273;
            nomDiv("respuesta").innerHTML = "Kelvin" + Kelvin;
        }else if ("Celsius-a-Farenheit") {
            C = document.getElementById("cantidad").value;
            F =C*9/5+32;
            nomDiv("Respuesta").innerHTML = "Fahrenheit" + Fahrenheit;
        }else if ("Celsius-a-Kelvin") {
            C = document.getElementById("cantidad").value;
            K=C+273;
            nomDiv("Respuesta").innerHTML = "Celsius" + Kelvin;
        }else if ("Kelvin-a-Fahrenheit") {
             K = document.getElementById("cantidad").value;
             F= (K-273)*9/5+32;
             nomDiv("Respuesta").innerHTML = "Fahrenheit" + Farenheit;
        } else if ("Kelvin-a-Celsius") {
             K = document.getElementById("cantidad").value;
             C=K-273;
            nomDiv("Respuesta").innerHTML = "Celsius: " + Celsius;
        }
        nomDiv(
            "Respuesta"
        ).innerHTML = ' la respuesta es... '
    }};

    nomdiv("Kelvin-a-Fahrenheit").addEventListener(click, event => {
        convertir();
    })