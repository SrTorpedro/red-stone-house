var aparelhos = 3

function edit_energy(){
    document.getElementById('espaço_edi_energy').innerHTML = ('<p>Defina o seu limite de consumo</p>  <input type="number" id="dado_limite_energy" placeholder="Limite"> <button onclick="add_limit()">Modificar</button>')
}

function add_limit(){
    var limit_energy = document.getElementById('dado_limite_energy')

    if(limit_energy.value == ""){
        document.getElementById('dado_limite_energy').placeholder = (`Insira algo`)
        limit_energy.style.borderColor = "#ff0000"
        limit_energy.style.fontSize = "1rem"
        limit_energy.style.fontWeight = "bold"
    }

    else{
        document.getElementById('results_limit_energy').
        innerText = (`${limit_energy.value}`)

        document.getElementById('espaço_edi_energy').innerHTML = ("")

    }
}





function edit_agua(){
    document.getElementById('espaço_edi_agua').innerHTML = ('<p>Defina o seu limite de consumo</p>  <input type="number" id="dado_limite_agua" placeholder="Limite"> <button onclick="add_limit_agua()">Modificar</button>')
}

function add_limit_agua(){
    var limit_agua = document.getElementById('dado_limite_agua')

    if(limit_agua.value == ""){
        document.getElementById('dado_limite_agua').placeholder = (`Insira algo`)

        limit_agua.style.borderColor = "#ff0000"
        limit_agua.style.fontSize = "1rem"
        limit_agua.style.fontWeight = "bold"
    }

    else{
        document.getElementById('results_limit_agua').
        innerText = (`${limit_agua.value}`)
        
        document.getElementById('espaço_edi_agua').innerHTML = ("")
    }
}


function plus(){
    if(aparelhos == 4){
        document.getElementById('espaço_plus').innerHTML = ('<p>Os espaços já estão preenchidos</p> <button id="close" onclick="close_caixa()">X</button>')
    }

    else{
        document.getElementById('espaço_plus_caixa').innerHTML = ('<h3>Informe os dados</h3> <input type="text" id="aparelho" placeholder="Aparelho / Saída de água"> <input type="text" id="comodo" placeholder="Cômodo"> <button id="button_add" onclick="add()">ADD</button>')
    }
}

function close_caixa(){
    document.getElementById('espaço_plus').innerHTML = ('')
}


function add(){
    var aparelho = document.getElementById('aparelho')
    var comodo = document.getElementById('comodo')

    console.log(aparelho.value)

    if(aparelho.value==""){
        document.getElementById('aparelho').innerText += ('Insira um aprelho')
        return
    }

    else if(comodo.value==""){
        document.getElementById('comodo').innerText += ('Insira um cômodo')
        return
    }

    else if(aparelho.value=="" || comodo.value==""){
        document.getElementById('aparelho').innerText += ('Insira um aprelho')

        document.getElementById('comodo').innerText += ('Insira um cômodo')
        return
    }

    else{
        document.getElementById('gadgets').innerHTML += (`<div class="div_ap"> <p>${aparelho.value} / ${comodo.value}</p> <button id="delete" ><img src="../images/lixeira.png" alt="Lixeira" class="delete_img"></button> </div>`)

        aparelho = aparelhos + 1

        document.getElementById('espaço_plus_caixa').innerHTML = ('')
    }
}


function delet() {
    aparelhos = aparelhos - 1
    
    var del = document.getElementById('gadgets')
    console.log(del)
    del.remove();
}
