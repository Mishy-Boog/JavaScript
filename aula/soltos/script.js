const formulario = document.getElementById("formulario");
const nome_usuarioEntrada = document.getElementById("nome_usuario");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    const nome_usuario = nome_usuarioEntrada.value;
    if(username) {
        if(/^[a-zA-Z][a-zA-Z0-9_-]{4,14}$/.test(nome_usuario) && nome_usuario.length >= 5 && nome_usuario.length <= 15){
            mensagem.textContent = "Nome de usuario valido!";
            mensagem.style.color = "green";
        } else {
            mensagem.textContent = "Nome de usuario invalido. Por favor, siga as regras.";
            mensagem.style.color = "red";
        }
    }else {
        mensagem.textContent = "Por favor, insira um nome de usuário.";
        mensagem.style.color = "red";
    }
});