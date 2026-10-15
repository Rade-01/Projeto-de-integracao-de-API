/* 
Trabalho de: 
Eduardo de Oliveira Lopes - 04212964
Gabriel Silva Barbosa Germanio - 04204359
*/

async function chamarapi(cep)
{
    const URL = `https://viacep.com.br/ws/${cep}/json/`
    const resp = await fetch(URL);
    if (resp.status == 200)
    {
    const dados = await resp.json();
    console.log(dados)

    if (dados.erro == "true")
    {
        alert("CEP inválido! Este CEP não existe!")
    }

    document.getElementById("logradouro").textContent = dados.logradouro
    document.getElementById("Bairro").textContent = dados.bairro
    document.getElementById("Cidade").textContent = dados.localidade
    document.getElementById("Estado").textContent = dados.uf
    }
}

async function bora() {
    const cep_digitado = document.getElementById("CEP").value
    if (cep_digitado.length == 8)
    {
    chamarapi(cep_digitado)
    }
    else
    {
    alert("O CEP deve ter 8 digitos!")
    }
}
