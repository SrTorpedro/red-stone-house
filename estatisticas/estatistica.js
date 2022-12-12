function energy(){
    var type = document.getElementById('category')


    if(type.value.toUpperCase() == "GASTO MENSAL GERAL"){
        document.getElementById('img_grafico').src = './energy/gastoGenergy.png'
    }

    else if(type.value.toUpperCase() == "GASTO MENSAL P/DIA"){
        document.getElementById('img_grafico').src = './energy/gastoGenergy-d.png'
    }

    else if(type.value.toUpperCase() == "GASTO CÔMODOS GERAL"){
        document.getElementById('img_grafico').src = './energy/gastoCenergy.png'
    }

    else if(type.value.toUpperCase() == "GASTO CÔMODOS P/DIA"){
        document.getElementById('img_grafico').src = './energy/gastoCenergy-d.png'
    }



    document.getElementById('category').value = ''

}



function water(){
    var type = document.getElementById('category')


    console.log(type.value.toUpperCase())

    if(type.value.toUpperCase() == "GASTO MENSAL GERAL"){
        document.getElementById('img_grafico').src = './water/gastoGwater.jpg'
    }

    else if(type.value.toUpperCase() == "GASTO MENSAL P/DIA"){
        document.getElementById('img_grafico').src = './water/gastoGwater-d.jpg'
    }

    else if(type.value.toUpperCase() == "GASTO CÔMODOS GERAL"){
        document.getElementById('img_grafico').src = './water/gastoCwater.png'
    }

    else if(type.value.toUpperCase() == "GASTO CÔMODOS P/DIA"){
        document.getElementById('img_grafico').src = './water/gastoCwater-d.png'
    }


    document.getElementById('category').value = ''

}