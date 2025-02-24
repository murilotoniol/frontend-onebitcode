const form = document.getElementById("user-form");
const userList = document.getElementById("user-list");
let users = JSON.parse(localStorage.getItem("users")) || [];

// Exibir os usuários salvos
function renderUsers() {
    userList.innerHTML = "";
    users.forEach((user, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
                <button onclick="editUser(${index})">Editar</button>
                <button onclick="deleteUser(${index})">Excluir</button>
            </td>
        `;
        userList.appendChild(row);
    });
}

// Adicionar usuário
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    users.push({ name, email });
    localStorage.setItem("users", JSON.stringify(users));
    form.reset();
    renderUsers();
});

// Editar usuário
function editUser(index) {
    const user = users[index];
    document.getElementById("name").value = user.name;
    document.getElementById("email").value = user.email;
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    renderUsers();
}

// Excluir usuário
function deleteUser(index) {
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    renderUsers();
}

// Inicializar a tabela
renderUsers();