document.addEventListener("DOMContentLoaded", function(){
    const sessaoConteudo = document.querySelector(".sessao-conteudo");
    const url = "https://jsonplaceholder.typicode.com/posts";

    document.querySelector("#form-postar").addEventListener("submit", (event) => {
        event.preventDefault();

        const titulo = document.querySelector("#titulo");
        const conteudo =  document.querySelector("#conteudo");

        const postagem = {
            userId: 20,
            title: titulo.value.trim(),
            body: conteudo.value.trim()
        }

        fetch(url, {
            method: "POST",
            body: JSON.stringify(postagem),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });

        titulo.value = "";
        conteudo.value = "";

        listarPost();
    })

    function listarPost(){
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                data.forEach(element => {
                    const titulo = document.querySelector("#titulo");
                    const conteudo =  document.querySelector("#conteudo");
                    const article = document.createElement("article");
                    const h3 = document.createElement("h3");
                    const p = document.createElement("p");
                    article.classList.add("mensagem");

                    h3.textContent = element.title;
                    p.textContent = element.body;

                    article.appendChild(h3);
                    article.appendChild(p);

                    sessaoConteudo.insertAdjacentElement("beforeend", article);
                   
                });
            })
    }


    listarPost();
})