function register(){
    let name_reg = document.getElementById('name')
    let email = document.getElementById('email')
    let pass_reg = document.getElementById('pass_reg')
    let conpass = document.getElementById('conpass')
    let check = document.getElementById('check')
    let link = document.getElementById('cad')

    console.log(link)

    let tst_name = true
    let tst_email = true
    let tst_pass = true
    let tst_conpass = true
    let tst_check = true

    
    if(name_reg.value == ""){
        document.getElementById('error_name_reg').innerText = ('Informe o seu nome')
        tst_name=false
    }
    else{
        document.getElementById('error_name_reg').innerText = ('')
        tst_name=true
    }


    if(email.value == ""){
        document.getElementById('error_email_reg').innerText = ('Informe o seu Email')
        tst_email=false
    }
    else{

        let em = email.value
        if((em.includes('@') == false) || (em.includes('/') == true) || (em.length < 3)){
            document.getElementById('error_email_reg').innerText = ('Informe um email válido')
        }

        else{
            document.getElementById('error_email_reg').innerText = ('')
            tst_email=true
        }
    }


    if(pass_reg.value == ""){
        document.getElementById('error_pass_reg').innerText = ('Informe a senha')
        tst_pass=false
    }
    else{
        document.getElementById('error_pass_reg').innerText = ('')
        tst_pass=true
    }


    if(conpass.value == ""){
        document.getElementById('error_conpass_reg').innerText = ('Informe a confirmação de senha')
        tst_conpass=false
    }
    else{
        document.getElementById('error_conpass_reg').innerText = ('')
        tst_conpass=true
    }


    if(check.checked){
        tst_check = true
        document.getElementById('error_term_reg').innerText = ('')
    }
    else{
        tst_check = false
        document.getElementById('error_term_reg').innerText = ('Preencha o campo')
    }


    if(tst_name == true && tst_email == true && tst_pass == true && tst_conpass == true && tst_check == true){
        link.href = "../home/home.html"
        console.log(link)
    }
    else{
        link.href = "#"
    }
}

let tst = 0

function show(){
    if(tst == 0){
        document.getElementById('pass_reg').type = ('text')

        tst = 1
    }

    else{
        document.getElementById('pass_reg').type = ('password')

        tst = 0
    }
    
}