let button = document.querySelectorAll('button')
let visibility = false
let btn_decon = document.querySelector('#btn-decon')
let s = document.querySelector('#s')
let vv = true
let affiche_div = document.querySelector('p')
let btn_one = document.querySelector('.yy')
let r = []
let light = false
let t,table = []
let indice = null
let operation_add = null
let valeur_finale  = null
let valeur_restant = null
let va  = null
let secondNombre = parseFloat(r.join(''))
let opertionss = String
let btnFocus;
// fonction chiffre  pour agire sur les btn
const chiffre = (params)=>{
    console.log(button[params].innerHTML)
    if (button[params].innerHTML == ','){let c= '.' ; r.push(c)}else{r.push(button[params].innerHTML) }
    // r.push(button[params].innerHTML)    
    affiche_div.textContent = r.join('')
    // condition au niveau du tableau 
    if (r.length >  9){
        console.log('supperieur a 7')
        // on va essayer de desactiver les btn 
        button[4].disabled = true
        button[5].disabled = true
        button[6].disabled = true
        button[8].disabled = true
        button[9].disabled = true
        button[10].disabled = true
        button[12].disabled = true
        button[13].disabled = true
        button[14].disabled = true
        button[16].disabled = true
        button[17].disabled = true
    
    }else{
        console.log('non supperieur a 7 ')
    }
}

// fontion executer pour les operations 
const executer = (params)=>{
    // console.log(button[params].innerHTML)
    
    switch (button[params].innerHTML) {
        case "AC":
            light = false
            valeur_restant = null
            // remise a zero
            for(let i = 0 ; i<= r.length-1 ; i++){
                r.splice(i,r.length)
            }
            affiche_div.textContent = 0
            r.length = null 
            console.log(r)
            button[4].disabled = false
            button[5].disabled = false
            button[6].disabled = false
            button[8].disabled = false
            button[9].disabled = false
            button[10].disabled = false
            button[12].disabled = false
            button[13].disabled = false
            button[14].disabled = false
            button[16].disabled = false
            button[17].disabled = false

            // au niveau de la couleur des btn 
            button[7].style.backgroundColor = 'rgb(255, 175, 25)'
            button[18].style.backgroundColor = 'rgb(255, 175, 25)'
            button[15].style.backgroundColor = 'rgb(255, 175, 25)'
            button[11].style.backgroundColor = 'rgb(255, 175, 25)'
            button[11].style.color = ''
            button[15].style.color = ''
            button[18].style.color = ''
            button[7].style.color = ''
            break;
        case "+/-":
            // let dest = r.join('')
            // console.log(affiche_div.textContent)
            let dest = parseFloat(affiche_div.textContent)
            r.length = null
            r.push(-dest)
            console.log(r)
            affiche_div.textContent = r
            break;
        case "%":
            // console.log(true + "%")
            // logiquement cst le resulta l'ecran dans la div
            affiche_div.textContent = (parseFloat(affiche_div.textContent))/100
            // r.length = null
            break;
        case "DIV":
            console.log(true +"div")
        default:
            break;
    }
}

// operation
const operateur = (param) =>{
    // utilisation des operateurs 
    console.log(button[param].innerHTML)
    indice = param
    // un focus de couleur sur le btn 
    // operation avec les valeurs 
    switch (button[param].innerHTML) {
        case "x":
            console.log('une operation de valeur')
            // on va faire un truc pour voir 
            // afficher le nombre entré
            let n = light = !light
            listen_forcolor(param,n)
            operation_add = "x"
            let y = r.join('')
            let nbr = parseFloat(y)
             va = nbr
            // console.log(table)
            affiche_div.textContent = 0
            r.length = null
            break;
        case "-":
            console.log('une soustration de valeur ')
             // on va faire un truc pour voir 
              let b = light = !light
             listen_forcolor(param,b)
             operation_add = "-"
             let x = r.join('')
             let nombre = parseFloat(x)
             va = nombre
             console.log(nombre)
            //  console
             affiche_div.textContent = 0
             r.length = null
            break;
        case '+':
            console.log('addition de valeur')
             // on va faire un truc pour voir 
              let k = light = !light
             listen_forcolor(param,k)
             operation_add = "+"
             let w = r.join('')
             let nombres = parseFloat(w)
             va = nombres 
             console.log(va)
            //  console
             affiche_div.textContent = 0
             r.length = null
            break;

        default:
            break;
    }
}

// fonction
const listen_forcolor = (params,c)=>{
    if ( c == true){
            console.log(true)
            button[params].style.color ='rgb(255, 175, 25)'
            button[params].style.backgroundColor = 'white'
            table.length = 0
    }else{
           console.log(false)
           table.push(params)
            button[params].style.color ='black'
            button[params].style.backgroundColor = 'rgb(255, 175, 25)'
    }
    // return b
}

// ecouter seulement le egale = 
const valeur_calculee = (params) =>{
    // on se base seulment sur une table showTime
    light = false
    listen_forcolor(indice,light)
    // va = parseFloat(affiche_div.textContent)
    // r.push(parseFloat(affiche_div.textContent))
     
    switch (operation_add) {
        case '+':
            // addition
            if (r.length == 0){
                affiche_div.textContent = valeurOnegaleSursommme(valeur_finale)
            }else{
                console.log(va)
            let cc =parseFloat(r.join(''))
            valeur_restant = cc
            valeur_finale = va+(cc)
            affiche_div.textContent = valeur_finale
            r.length = null
            cc = 0
            console.log(r,cc)
            }
            break;
        case 'x':
            // multiplication
           if(r.length == 0){
                affiche_div.textContent = valeurOnegale(valeur_finale)
           }else{
            console.log(va)
            let cc =parseFloat(r.join(''))
            valeur_restant = cc
            valeur_finale = va*(cc)
            affiche_div.textContent = valeur_finale
            r.length = null
            cc = 0
            console.log(r,cc)
           }
            break;
        case '-':
            // soustration
            if(r.length == 0){
                affiche_div.textContent = valeurOnegaleSursoustration(valeur_finale)
           }else{
            console.log(va)
            let cc =parseFloat(r.join(''))
            valeur_restant = cc
            valeur_finale = va-(cc)
            affiche_div.textContent = valeur_finale
            r.length = null
            cc = 0
            console.log(r,cc)
           }
            break;
        default:
            break;
    }
    r.push(parseFloat(affiche_div.textContent))
}
// verification
const valeurOnegale = (params)=>{
    params = valeur_finale = valeur_finale*valeur_restant
    return params
}
const valeurOnegaleSursommme = (params)=>{
    params = valeur_finale = valeur_finale+valeur_restant
    return params
}
const valeurOnegaleSursoustration = (params)=>{
    params = valeur_finale = valeur_finale-valeur_restant
    return params
}

// lors de la deconnection
btn_decon.addEventListener('click',() => {

    if (visibility = !visibility){
        s.style.visibility = 'visible'
    }else{
        s.style.visibility ='hidden'
    }
})