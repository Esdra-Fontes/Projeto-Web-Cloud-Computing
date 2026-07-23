// ================================
// Configuração de idioma Firebase
// ================================

firebase.auth().languageCode = "pt-BR";


// ================================
// Login / Cadastro
// ================================

authForm.onsubmit = function (event) {

    event.preventDefault();

    showItem(loading);
    hideItem(app);


    if (submitAuthForm.innerHTML === "Acessar") {

        firebase.auth()
            .signInWithEmailAndPassword(
                emailInput.value,
                passwordInput.value
            )
            .catch(function (error) {

                showError(
                    "Falha no acesso: ",
                    error
                );

            });


    } else {

        firebase.auth()
            .createUserWithEmailAndPassword(
                emailInput.value,
                passwordInput.value
            )
            .catch(function (error) {

                showError(
                    "Falha no cadastro: ",
                    error
                );

            });
    }
};


// ================================
// Controle de autenticação
// ================================

firebase.auth().onAuthStateChanged(function (user) {

    hideItem(loading);


    if (user) {

        showUserContent(user);

    } else {

        showAuth();

    }

});


// ================================
// Logout
// ================================

function signOut() {

    firebase.auth()
        .signOut()
        .catch(function (error) {

            showError(
                "Falha ao sair da conta: ",
                error
            );

        });

}


// ================================
// Verificação de e-mail
// ================================

function sendEmailVerification() {

    showItem(loading);

    const user = firebase.auth().currentUser;


    user.sendEmailVerification(actionCodeSettings)

        .then(function () {

            alert(
                "E-mail de verificação enviado para "
                + user.email
                + ". Verifique sua caixa de entrada."
            );

        })

        .catch(function (error) {

            showError(
                "Falha ao enviar verificação de e-mail: ",
                error
            );

        })

        .finally(function () {

            hideItem(loading);

        });

}


// ================================
// Recuperação de senha
// ================================

function sendPasswordResetEmail() {


    const email = prompt(
        "Informe o e-mail para redefinir a senha:",
        emailInput.value
    );


    if (!email) {

        alert(
            "É necessário informar um e-mail."
        );

        return;

    }


    showItem(loading);


    firebase.auth()

        .sendPasswordResetEmail(
            email,
            actionCodeSettings
        )

        .then(function () {

            alert(
                "E-mail de redefinição enviado para "
                + email
            );

        })

        .catch(function (error) {

            showError(
                "Falha ao redefinir senha: ",
                error
            );

        })

        .finally(function () {

            hideItem(loading);

        });

}


// ================================
// Login Google
// ================================

function signInWithGoogle() {

    showItem(loading);
    hideItem(app);


    firebase.auth()

        .signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
        )

        .catch(function(error){

            showError(
                "Falha ao autenticar com Google: ",
                error
            );

        });

}


// ================================
// Login GitHub
// ================================

function signInWithGitHub() {

    showItem(loading);


    firebase.auth()

        .signInWithPopup(
            new firebase.auth.GithubAuthProvider()
        )

        .catch(function(error){

            showError(
                "Falha ao autenticar com GitHub: ",
                error
            );

        });

}


// ================================
// Login Facebook
// ================================

function signInWithFacebook() {

    showItem(loading);


    firebase.auth()

        .signInWithPopup(
            new firebase.auth.FacebookAuthProvider()
        )

        .catch(function(error){

            showError(
                "Falha ao autenticar com Facebook: ",
                error
            );

        });

}


// ================================
// Atualizar nome
// ================================

function updateUserName() {


    const newUserName = prompt(
        "Informe um novo nome:",
        userName.innerHTML
    );


    if (!newUserName) {

        alert(
            "O nome não pode ser vazio."
        );

        return;

    }


    showItem(loading);


    firebase.auth()
        .currentUser
        .updateProfile({

            displayName: newUserName

        })

        .then(function(){

            userName.innerHTML = newUserName;

        })

        .catch(function(error){

            showError(
                "Falha ao atualizar nome: ",
                error
            );

        })

        .finally(function(){

            hideItem(loading);

        });

}


// ================================
// Excluir conta
// ================================

function deleteUserAccount() {


    const confirmation = confirm(
        "Realmente deseja excluir sua conta?"
    );


    if (!confirmation) return;


    showItem(loading);


    firebase.auth()
        .currentUser
        .delete()

        .then(function(){

            alert(
                "Conta removida com sucesso."
            );

        })

        .catch(function(error){

            showError(
                "Falha ao remover conta: ",
                error
            );

        })

        .finally(function(){

            hideItem(loading);

        });

}
