function login(){
    let name = document.getElementById('user')
    let pass = document.getElementById('pass_log')
    let link = document.getElementById('link_log')

    let tst_pass = true
    let tst_name = true


    if(name.value == "" ){
        document.getElementById('error_name_log').innerText = ('Informe o usuário')
        tst_name = false
    }
    else{
        document.getElementById('error_name_log').innerText = ('')
        tst_name = true
    }



    if(pass.value == ""){
        document.getElementById('error_pass_log').innerText = ('Informe a senha')
        tst_pass = false
    }
    else{
        document.getElementById('error_pass_log').innerText = ('')
        tst_pass = true
    }

    if(tst_name == true && tst_pass == true){
        link.href = "home/home.html"
    }
    else{
        link.href = "#"
    }
}