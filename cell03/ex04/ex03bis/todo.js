function saveTodos() {
    let todos = [];

    $("#ft_list .todo").each(function () {
        todos.push($(this).text());
    });

    document.cookie =
        "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; path=/";
}

function addTodo(text) {
    const todo = $("<div></div>");

    todo.addClass("todo");
    todo.text(text);

    todo.on("click", function () {
        if (confirm("Do you want to remove this TO DO?")) {
            $(this).remove();
            saveTodos();
        }
    });

    $("#ft_list").prepend(todo);
}

function loadTodos() {
    const cookies = document.cookie.split("; ");

    for (const cookie of cookies) {
        const parts = cookie.split("=");

        if (parts[0] === "todos") {
            const todos = JSON.parse(
                decodeURIComponent(parts.slice(1).join("="))
            );

            todos.reverse().forEach(function (text) {
                addTodo(text);
            });
        }
    }
}

$(document).ready(function () {
    $("#new_btn").on("click", function () {
        const text = prompt("Enter a new TO DO:");

        if (text !== null && text.trim() !== "") {
            addTodo(text);
            saveTodos();
        }
    });

    loadTodos();
});
EOFcat > todo.js <<'EOF'
function saveTodos() {
    let todos = [];

    $("#ft_list .todo").each(function () {
        todos.push($(this).text());
    });

    document.cookie =
        "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; path=/";
}

function addTodo(text) {
    const todo = $("<div></div>");

    todo.addClass("todo");
    todo.text(text);

    todo.on("click", function () {
        if (confirm("Do you want to remove this TO DO?")) {
            $(this).remove();
            saveTodos();
        }
    });

    $("#ft_list").prepend(todo);
}

function loadTodos() {
    const cookies = document.cookie.split("; ");

    for (const cookie of cookies) {
        const parts = cookie.split("=");

        if (parts[0] === "todos") {
            const todos = JSON.parse(
                decodeURIComponent(parts.slice(1).join("="))
            );

            todos.reverse().forEach(function (text) {
                addTodo(text);
            });
        }
    }
}

$(document).ready(function () {
    $("#new_btn").on("click", function () {
        const text = prompt("Enter a new TO DO:");

        if (text !== null && text.trim() !== "") {
            addTodo(text);
            saveTodos();
        }
    });

    loadTodos();
});
EOFcat > todo.js <<'EOF'
function saveTodos() {
    let todos = [];

    $("#ft_list .todo").each(function () {
        todos.push($(this).text());
    });

    document.cookie =
        "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; path=/";
}

function addTodo(text) {
    const todo = $("<div></div>");

    todo.addClass("todo");
    todo.text(text);

    todo.on("click", function () {
        if (confirm("Do you want to remove this TO DO?")) {
            $(this).remove();
            saveTodos();
        }
    });

    $("#ft_list").prepend(todo);
}

function loadTodos() {
    const cookies = document.cookie.split("; ");

    for (const cookie of cookies) {
        const parts = cookie.split("=");

        if (parts[0] === "todos") {
            const todos = JSON.parse(
                decodeURIComponent(parts.slice(1).join("="))
            );

            todos.reverse().forEach(function (text) {
                addTodo(text);
            });
        }
    }
}

$(document).ready(function () {
    $("#new_btn").on("click", function () {
        const text = prompt("Enter a new TO DO:");

        if (text !== null && text.trim() !== "") {
            addTodo(text);
            saveTodos();
        }
    });

    loadTodos();
});
EOFcat > todo.js <<'EOF'
function saveTodos() {
    let todos = [];

    $("#ft_list .todo").each(function () {
        todos.push($(this).text());
    });

    document.cookie =
        "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; path=/";
}

function addTodo(text) {
    const todo = $("<div></div>");

    todo.addClass("todo");
    todo.text(text);

    todo.on("click", function () {
        if (confirm("Do you want to remove this TO DO?")) {
            $(this).remove();
            saveTodos();
        }
    });

    $("#ft_list").prepend(todo);
}

function loadTodos() {
    const cookies = document.cookie.split("; ");

    for (const cookie of cookies) {
        const parts = cookie.split("=");

        if (parts[0] === "todos") {
            const todos = JSON.parse(
                decodeURIComponent(parts.slice(1).join("="))
            );

            todos.reverse().forEach(function (text) {
                addTodo(text);
            });
        }
    }
}

$(document).ready(function () {
    $("#new_btn").on("click", function () {
        const text = prompt("Enter a new TO DO:");

        if (text !== null && text.trim() !== "") {
            addTodo(text);
            saveTodos();
        }
    });

    loadTodos();
});
