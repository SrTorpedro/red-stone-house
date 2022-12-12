let deletes = document.getElementsByClassName("delete");
for (var delet of deletes) {
    delet.addEventListener("click", remover);
}
let list = document.getElementById("list");
let addButton = document.getElementById("addButton");
let div = document.getElementById("addDiv");
let comodos = document.getElementsByClassName("comodo");
for (var comodo of comodos) {
    comodo.addEventListener("click", showInfo)
}


addButton.addEventListener("click", showAddDiv);

function remover(event) {
    let item = event.target.parentElement.parentElement;
    item.remove();
    let item2 = event.target.parentElement;
    let graphic = document.getElementById("graphic");
    
    

    if(item2.firstChild.innerText == "Cozinha" && graphic.style.backgroundImage == 'url("../images/cozinhaenergy.jpg")'){
        graphic.style.backgroundImage = "none";
    }
    else if(item2.firstChild.innerText == "Sala de Estar" && graphic.style.backgroundImage == 'url("../images/saladeestarenergy.jpg")'){
        graphic.style.backgroundImage = "none";
    }
    else if(item2.firstChild.innerText == "Quarto 1" && graphic.style.backgroundImage == 'url("../images/quartoenergy.jpg")'){
        graphic.style.backgroundImage = "none";
    }
    else if(item2.firstChild.innerText != "Cozinha" && item2.firstChild.innerText != "Quarto 1" && item2.firstChild.innerText != "Sala de Estar" && graphic.style.backgroundImage == 'url("../images/nodata.jpg")'){
        graphic.style.backgroundImage = "none";
    }
    
}

function showAddDiv() {
    div.style.display = "flex";
    let addButton2 = document.getElementById("addButton2");
    addButton2.addEventListener("click", adicionar);
}


function adicionar() {

    let nome = document.getElementById("inputName");

    if (nome.value == "") {
        return;
    }

    list.innerHTML += `<li class="optionComodo">
        <div class="comodo">`+ nome.value + `<img src="./images/lixeira.png" alt="lixeira" class="delete"></div>
        <div class="info">
            <p style="text-align: center; color: grey;">Não há aparelhos adicionados a esse cômodo, por favor, vá na opção "Aparelhos" do menu superior para adicionar</p>
        </div>
    </li>`;

    let deletes = document.getElementsByClassName("delete");
    for (var delet of deletes) {
        delet.addEventListener("click", remover);
    }

    let comodos = document.getElementsByClassName("comodo");
    for (var comodo of comodos) {
        comodo.addEventListener("click", showInfo)
    }


    nome.value = "";

    div.style.display = "none";
}

function showInfo(event) {

    let item = event.target;

    let graphic = document.getElementById("graphic");

    if(item.nextElementSibling.classList.contains("show")){
        item.nextElementSibling.classList.remove("show");
        graphic.style.backgroundImage = "none";
        return;
    }
    else{
        for (var comodo of comodos) {
            comodo.nextElementSibling.classList.remove("show");
        }
        item.nextElementSibling.classList.add("show")
    }





    if(item.firstChild.innerText == "Cozinha"){
        graphic.style.backgroundImage = "url(./images/cozinhaenergy.jpg)";
        console.log('1')
    }
    else if(item.firstChild.innerText == "Sala de Estar"){
        graphic.style.backgroundImage = "url(./images/saladeestarenergy.jpg)";
    }
    else if(item.firstChild.innerText == "Quarto 1"){
        graphic.style.backgroundImage = "url(./images/quartoenergy.jpg)";
    }
    else{
        graphic.style.backgroundImage = "url(./images/nodata.jpg)";
    }


}

