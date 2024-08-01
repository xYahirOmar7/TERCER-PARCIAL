let  sumar = document.getElementById("sumar").addEventListener("click",()=>{ 
    let n1 = document.getElementById("n1").value 
    let n2 = document.getElementById("n2").value
    resultado = parseInt(n1)+parseInt(n2)

    
    let texto = document.getElementById("h1")
      texto.innerHTML= resultado
})

let  restar = document.getElementById("restar").addEventListener("click",()=>{ 
    let n1 = document.getElementById("n1").value 
    let n2 = document.getElementById("n2").value
    resultado = parseInt(n1)-parseInt(n2)

    
    let texto = document.getElementById("h1")
      texto.innerHTML= resultado
})

let  multiplicar = document.getElementById("multiplicar").addEventListener("click",()=>{ 
    let n1 = document.getElementById("n1").value 
    let n2 = document.getElementById("n2").value
    resultado = parseInt(n1)*parseInt(n2)

    
    let texto = document.getElementById("h1")
      texto.innerHTML= resultado
})

let  dividir = document.getElementById("dividir").addEventListener("click",()=>{ 
    let n1 = document.getElementById("n1").value 
    let n2 = document.getElementById("n2").value
    resultado = parseInt(n1)/parseInt(n2)

    
    let texto = document.getElementById("h1")
      texto.innerHTML= resultado
})
