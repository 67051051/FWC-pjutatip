function saveTodos() {
    const todos = [];

    document.querySelectorAll("#ft_list .todo").forEach(function (todo) {
        todos.push(todo.textContent);
    });

    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; path=/";
}

function loadTodos() {
    const cookies = document.cookie.split("; ");

    for (const cookie of cookies) {
        const parts = cookie.split("=");

        if (parts[0] === "todos") {
            const todos = JSON.parse(decodeURIComponent(parts.slice(1).join("=")));

            todos.reverse().forEach(function (text) {
                addTodo(text);
            });
        }
    }
}

function addTodo(text) {
    const todo = document.createElement("div");

    todo.className = "todo";
    todo.textContent = text;

    todo.addEventListener("click", function () {
        if (confirm("Do you want to remove this TO DO?")) {
            todo.remove();
            saveTodos();
        }
    });

    document.getElementById("ft_list").prepend(todo);
}

function newTodo() {
    const text = prompt("Enter a new TO DO:");

    if (text !== null && text.trim() !== "") {
        addTodo(text);
        saveTodos();
    }
}

document.getElementById("new_btn").addEventListener("click", newTodo);

loadTodos();
