if (window.innerWidth < 500) {
    document.getElementById("titleForm").style.fontSize = "2em";
} else {
    document.getElementById("titleForm").style.fontSize = "5em";
}



var btnSubmit = document.getElementById("btnSubmit");

btnSubmit.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.getElementById("form");

    let produto = {
        nm_produto: form.nome.value,
        ds_produto: form.descricao.value,
        dt_fabricacao: form.dataFabr.value,
        vl_produto: Number(form.preco.value)
    };

    console.log('====================================');
    console.log(produto);
    console.log('====================================');

    const ENDPOINT_URL = "http://localhost:3000/produtos";
    const API_HEADERS = {
        "Content-Type": "application/json"
    };
    axios.post(ENDPOINT_URL, produto, API_HEADERS)
        .then((response) => {
            Swal.fire({
                title: "Produto cadastrado!", 
                icon: "success"
            }).then(function(){
             var teste = window.location.href.replace("form.html", "consulta.html"); 
             window.location.href = teste;   
            });
            
        })
        .catch((error) => {''
        Swal.fire({
            icon: 'error',
            title: 'Ops...',
            text: 'Falha ao cadastrar o produto.',
          })
        });

    form.reset();
    form.nome.focus();

});

