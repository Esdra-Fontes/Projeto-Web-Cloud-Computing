// ================================
// Cadastro de tarefas
// ================================

todoForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const taskName = todoName.value.trim();

    if (taskName === "") {
        alert("O nome da tarefa não pode ficar em branco.");
        return;
    }

    const data = {
        name: taskName,
        nameLowerCase: taskName.toLowerCase()
    };

    dbRefUsers
        .child(firebase.auth().currentUser.uid)
        .push(data)
        .then(function () {

            console.log("Tarefa adicionada com sucesso.");

            todoName.value = "";

        })
        .catch(function (error) {

            showError(
                "Falha ao adicionar tarefa: ",
                error
            );

        });

});


// ================================
// Preenche lista de tarefas
// ================================

function fillTodoList(dataSnapshot) {

    ulTodoList.innerHTML = "";

    const total = dataSnapshot.numChildren();

    if (total === 0) {

        todoCount.innerHTML = "Nenhuma tarefa cadastrada";

        document.getElementById("buscas").style.display = "none";

        return;

    }

    document.getElementById("buscas").style.display = "block";

    todoCount.innerHTML =
        total +
        (total === 1 ? " tarefa:" : " tarefas:");



    dataSnapshot.forEach(function (item) {

        const value = item.val();

        const li = document.createElement("li");

        const span = document.createElement("span");

        span.id = item.key;

        span.textContent = value.name;

        li.appendChild(span);



        // Botão editar

        const editBtn = document.createElement("button");

        editBtn.innerHTML = "Editar";

        editBtn.className = "alternative todoBtn";

        editBtn.onclick = function () {

            updateTodo(item.key);

        };

        li.appendChild(editBtn);



        // Botão excluir

        const deleteBtn = document.createElement("button");

        deleteBtn.innerHTML = "Excluir";

        deleteBtn.className = "danger todoBtn";

        deleteBtn.onclick = function () {

            removeTodo(item.key);

        };

        li.appendChild(deleteBtn);



        ulTodoList.appendChild(li);

    });

}



// ================================
// Remover tarefa
// ================================

function removeTodo(key) {

    const selected = document.getElementById(key);

    if (!selected) return;

    const confirmation = confirm(
        `Deseja remover "${selected.innerHTML}"?`
    );

    if (!confirmation) return;



    dbRefUsers

        .child(firebase.auth().currentUser.uid)

        .child(key)

        .remove()

        .then(function () {

            console.log("Tarefa removida.");

        })

        .catch(function (error) {

            showError(
                "Falha ao remover tarefa: ",
                error
            );

        });

}



// ================================
// Atualizar tarefa
// ================================

function updateTodo(key) {

    const selected = document.getElementById(key);

    if (!selected) return;



    const newName = prompt(

        "Novo nome da tarefa:",

        selected.innerHTML

    );



    if (!newName) return;



    const data = {

        name: newName,

        nameLowerCase: newName.toLowerCase()

    };



    dbRefUsers

        .child(firebase.auth().currentUser.uid)

        .child(key)

        .update(data)

        .then(function () {

            console.log("Tarefa atualizada.");

        })

        .catch(function (error) {

            showError(

                "Falha ao atualizar tarefa: ",

                error

            );

        });

}
