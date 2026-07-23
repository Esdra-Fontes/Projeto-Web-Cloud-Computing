// Definindo referências para elementos da página
var app = document.getElementById("app");
var loading = document.getElementById("loading");

var authDiv = document.getElementById("auth");
var userContent = document.getElementById("userContent");

var authForm = document.getElementById("authForm");
var authFormTitle = document.getElementById("authFormTitle");
var submitAuthForm = document.getElementById("submitAuthForm");

var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");

var register = document.getElementById("register");
var access = document.getElementById("access");
var passwordReset = document.getElementById("passwordReset");

var userName = document.getElementById("userName");
var userEmail = document.getElementById("userEmail");
var userImg = document.getElementById("userImg");

var emailVerified = document.getElementById("emailVerified");
var sendEmailVerificationDiv = document.getElementById("sendEmailVerificationDiv");

var todoForm = document.getElementById("todoForm");
var todoName = document.getElementById("name");

var todoList = document.getElementById("todoList");
var todoCount = document.getElementById("todoCount");
var ulTodoList = document.getElementById("ulTodoList");

var addTarefa = document.getElementById("addTarefa");
var search = document.getElementById("search");

//Firebase
var database = firebase.database();
var dbRefUsers = database.ref("users");

// Alterar o formulário de autenticação para o cadastro de novas contas
function toggleToRegister() {
  submitAuthForm.innerHTML = 'Cadastrar conta'
  authFormTitle.innerHTML = 'Insira seus dados para se cadastrar'
  hideItem(register) // Esconder atalho para cadastrar conta
  hideItem(passwordReset) // Esconder a opção de redefinição de senha
  showItem(access) // Mostrar atalho para acessar conta
  hideItem(todoList)
  hideItem(addTarefa)
}

// Alterar o formulário de autenticação para o acesso de contas já existentes
function toggleToAccess() {
  submitAuthForm.innerHTML = 'Acessar'
  authFormTitle.innerHTML = 'Acesse a sua conta para continuar'
  hideItem(access) // Esconder atalho para acessar conta
  showItem(passwordReset) // Mostrar a opção de redefinição de senha
  showItem(register) // Mostrar atalho para cadastrar conta
  hideItem(todoList)
  hideItem(addTarefa)

}

// Simplifica a exibição de elementos da página
function showItem(element) {
  element.style.display = 'block'
}

// Simplifica a remoção de elementos da página
function hideItem(element) {
  element.style.display = 'none'
}

// Mostrar conteúdo para usuários autenticados
function showUserContent(user) {
  console.log(user)
  if (user.providerData[0].providerId != 'password') {
    emailVerified.innerHTML = 'Autenticação por provedor confiável, não é necessário verificar e-mail'
    hideItem(sendEmailVerificationDiv)
  } else {
    if (user.emailVerified) {
      emailVerified.innerHTML = 'E-mail verificado'
      hideItem(sendEmailVerificationDiv)
    } else {
      emailVerified.innerHTML = 'E-mail não verificado'
      showItem(sendEmailVerificationDiv)
    }
  }
  
  userImg.src = user.photoURL ? user.photoURL : 'img/unknownUser.png'
  userName.innerHTML = user.displayName
  userEmail.innerHTML = user.email
  hideItem(authDiv)

  getDefaultTodoList()
  search.onkeyup = function() {
    if (search.value != '') {
      var searchText = search.value.toLowerCase()
      dbRefUsers.child(user.uid)
      .orderByChild('nameLowerCase') // Ordena as tarefas pelo nome da tarefa
      .startAt(searchText).endAt(searchText + '\uf8ff') // Delimita os resultados de pesquisa
      .once('value').then(function (dataSnapshot) { // Busca tarefas filtradas somente uma vez (once)
        fillTodoList(dataSnapshot)
      })
    } else {
      getDefaultTodoList()
    }
  }

  showItem(userContent)
}

// Busca tarefas em tempo real (listagem padrão usando o on)
function getDefaultTodoList() {
  dbRefUsers.child(firebase.auth().currentUser.uid)
  .orderByChild('name') // Ordena as tarefas pelo nome da tarefa
  .on('value', function (dataSnapshot) {
    fillTodoList(dataSnapshot)
  })
}

// Mostrar conteúdo para usuários não autenticados
function showAuth() {
  emailInput.value = ''
  passwordInput.value = ''
  hideItem(userContent)
  showItem(authDiv)
  hideItem(todoList)
  hideItem(addTarefa)
}

// Trata os erros dos formulários de autenticação e cadastro
function showError(prefix, error) {
  console.log(error.code)
  showItem(loading)
  hideItem(app)

  switch (error.code) {
    case 'auth/invalid-email': alert(prefix + ' ' + 'E-mail inválido!')
    break;
    case 'auth/wrong-password': alert(prefix + ' ' + 'Senha inválida!')
    break;
    case 'auth/weak-password': alert(prefix + ' ' + 'Senha deve ter ao menos 6 caracteres!')
    break;
    case 'auth/email-already-in-use': alert(prefix + ' ' + 'E-mail já está em uso por outra conta!')
    break;
    case 'auth/popup-closed-by-user': alert(prefix + ' ' + 'O popup de autenticação foi fechado antes da operação ser concluída!')
    break;   
  
    default: alert(prefix + ' ' + error.message)
  }
  return stateDefaultIten()
}

function stateDefaultIten(){
  showItem(app)
  hideItem(loading)
}

// Atributos extras de configuração de e-mail
const actionCodeSettings = {
    url: window.location.origin
}
