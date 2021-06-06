const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const luoTemplate = todo => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
        </li>
        `
        list.innerHTML += html;
}


addForm.addEventListener('submit', e => {
    e.preventDefault();

    const todo = addForm.add.value.trim();

    if(todo.length) {
        luoTemplate(todo);
        addForm.reset();
    }
});

//delete todos laittamalla eventlistener koko lista-elementtiin ja tutkitaan, painetaanko trash-ikonia, ei erikseen joka ikoniin
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

//Filter todos-funktio, jota voi kutsua mistä vaan

const filterTodos = (hakusana) => {
    Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(hakusana))
    .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(hakusana))
    .forEach((todo) => todo.classList.remove('filtered'));

}

//Keyup event hakuun

search.addEventListener('keyup', () => {
    const hakusana = search.value.trim().toLowerCase();

    filterTodos(hakusana);
})