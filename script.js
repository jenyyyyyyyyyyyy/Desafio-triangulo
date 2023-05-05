// [X] Iniciar o nosso app
// [X] Selecionar os valores do formulário
// [X] Calcular a área do triangulo
// [X] Mostrar o resultado na tela


let app = ()=>{
    let form = document.querySelector(".form");
    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        let newData = getValues(); // Fazendo a função getValues funcionar quando o usuário clica no botão. 
        if(newData.base == "" || newData.altura == ""){
            window.alert("Preencha todos os dados para calcular!")
        
        }else{
            calc(newData);
        }
    })


    let getValues = ()=>{ // Pegando valores do formulário
        let b = document.querySelector("#base");
        let h = document.querySelector("#altura");
        let data = {
            base: b.value,
            altura: h.value
        }
        return data;
    }
    let calc = (value)=>{ //Calculando área do triangulo.
        // Formula da área do tringulo é b * h / 2
        let result = (parseInt(value.base) * parseInt(value.altura)) / 2
        showResultToUser(result)
    }
    let showResultToUser = (value)=>{// Mostrando dados para o usuário
        let p = document.querySelector("#result");
        p.innerHTML = `${value}`
    }
}

app();