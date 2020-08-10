const api = 'https://cep.awesomeapi.com.br/json/'

const botao = document.querySelector('#fetch')
var busca = document.querySelector('#busca')

//* CAMPOS


botao.addEventListener('click', function buscarcep(){
        if(busca.value.length == 8){
            fetch(`${api}${busca.value}`)
            .then((Response =>{
                return Response.json()
            }))
            .then((data =>{
                console.log(data)
                document.querySelector('#ruaH').innerHTML = data.address;

                document.querySelector('#bairroH').innerHTML = data.district;

                document.querySelector('#cidadeH').innerHTML = data.city;

                document.querySelector('#ufH').innerHTML = data.state;

                document.querySelector('#cepH').innerHTML = data.cep;
            }))
        }
        else{
            console.log("insira 8 dígitos")
        }
})