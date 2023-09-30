
    document.addEventListener("DOMContentLoaded", function () {
        const loginForm = document.getElementById("card-login");
        const registerForm = document.getElementById("card-register");
        const linkCadastro = document.querySelector(".link-cadastro a");

        linkCadastro.addEventListener("click", function (e) {
            e.preventDefault(); // Evita que o link redirecione

            loginForm.style.display = "none"; // Esconde a div de login
            registerForm.style.display = "block"; // Exibe a div de registro
        });
    });

