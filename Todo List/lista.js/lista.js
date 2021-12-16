var enterbutton = document.getElementById("botao");
var input = document.getElementById("userinput");
var ul = document.getElementById("ul");
var intem = document.getElementsByTagName("li");

function obterTamanhoDoTexto(){
    return input.value.length;
}

function criarListaDeTarefa(){
    var li = document.createElement("li");

    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";


    function crossout(){
        li.classList.toggle("done");
    }

    li.addEventListener("click",crossout);
    li.id=new Date()
    var dbtn = document.createElement("button");
    dbtn.type = "button";
    dbtn.classList.add('botao-css')
    dbtn.appendChild(document.createTextNode("Excluir"));
    li.appendChild(dbtn);
    dbtn.addEventListener("click", deletelistitem);
    
   
    function deletelistitem(event){
        li.classList.add("delete");
        console.log(event.target.parentElement.id)
        document.getElementById(event.target.parentElement.id).remove()
    }


    
}



enterbutton.addEventListener("click",addlistafterclick );
input.addEventListener('keydown', event => {
    console.log(event.key, event.code);
    if(event.key ==="Enter") {
        addlistafterclick(event)
    }
})

function addlistafterclick(){
    if (obterTamanhoDoTexto()>0) {
        criarListaDeTarefa();
    }
}
