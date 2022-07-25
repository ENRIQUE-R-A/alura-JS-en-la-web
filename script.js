const btn = document.querySelector("[data-form-btn]");

//Arrow funtions o funciones anonimas
const createTask = (event) => {
    const input = document.querySelector("[data-form-input]");
    event.preventDefault();
}

btn.addEventListener("click", createTask);