const menuSpisok = document.querySelector('.menu__spisok');
const togglerMenu = document.getElementById('toggleMenu');
const menu = document.querySelector('.menu');

// Заносятся названия проектов
const projectsNames = [["Название проекта", 'Ссылка на проект']];

togglerMenu.addEventListener('click', ()=>{
    menu.classList.toggle('menu__active');
    document.querySelector('body').classList.toggle('body__dontScroll');
    mainMenu()
})

function openProject() {
    menuSpisok.innerHTML = '';
    menuSpisok.insertAdjacentHTML('beforeend', `
        <li id="back" onclick='mainMenu()'>
            <img src="./images/arrowGrey.svg" alt="стрелка">
            <p>Назад</p>
        </li>
    `);
    projectsNames.map(name => {
        menuSpisok.insertAdjacentHTML('beforeend', `
        <li onclick='mainMenu()'>
            <a href="${name[1]}">${name[0]}</a>
        </li>
    `);
    })
}

function openService() {
    menuSpisok.innerHTML = '';
    menuSpisok.insertAdjacentHTML('beforeend', `
        <li id="back" onclick='mainMenu()'>
            <img src="./images/arrowGrey.svg" alt="стрелка">
            <p>Назад</p>
        </li>
    `);
    const service = [
        ["Наружная отделка", "#"], 
        ["Внутренняя отделка", "#"], 
        ["Кровельные работы", "#"]
    ]
    service.map(service => {
        menuSpisok.insertAdjacentHTML('beforeend', `
        <li onclick='mainMenu()'>
            <a href="${service[1]}">${service[0]}</a>
        </li>
    `);
    })
}

function mainMenu() {
    menuSpisok.innerHTML = '';
    menuSpisok.insertAdjacentHTML('beforeend', `
    <li>
        <a href="#">О компании</a>
    </li>
    <li onclick="openProject()">
        <p>Проекты</p>
        <img src="./images/arrowMenu.svg" alt="стрелка">
    </li>
    <li>
        <a href="#">Наши работы</a>
    </li>
    <li onclick="openService()">
        <p>Услуги</p>
        <img src="./images/arrowMenu.svg" alt="стрелка">
    </li>
    <li>
        <a href="#">Статьи</a>
    </li>
    <li>
        <a href="#">Контакты</a>
    </li>
    `)
}

// Маска для телефона
$(function() {
    $(".CheckPhone").mask("+7 999 999-99-99", {placeholder: " "});
});

function checkForm1() {
    if($('#i1').val().length != 16){
        document.getElementById('errorForm1').classList.add("errorForm1__active");
        document.getElementById('i1').classList.add("input__error");
        setTimeout(() => {
            document.getElementById('errorForm1').classList.remove("errorForm1__active");
            document.getElementById('i1').classList.remove("input__error");
        }, 2000);
        return false;
    }
}