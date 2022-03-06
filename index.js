
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav-list');
const hamburger = document.querySelector('.hamburger');
const lines = document.querySelectorAll('.line');



const container = document.querySelector('.container');

burger.addEventListener('click', ()=>{
    nav.classList.toggle('closed');
    lines.forEach(item=>{
        item.classList.toggle('open');
    });
});


nav.addEventListener('click',(event)=>{
    if (event.target.classList.contains('nav-link')){
        nav.classList.toggle('closed');
        lines.forEach(item=>{
            item.classList.toggle('open');
        });             

    }
})



function addText(data) {
    data.forEach(item => {
        
        const chapter = document.createElement('div');
        chapter.classList.add('chapter');
        chapter.id = item['href'];
        container.appendChild(chapter);
        
        const header = document.createElement('div');
        header.classList.add('textHeader');
        chapter.appendChild(header);
        header.innerHTML = item['title'];


        const element = document.createElement('div');
        element.classList.add('text');
        chapter.appendChild(element);
        element.innerHTML = item['text'];

        
    });
}

function addNavList(data) {
    data.forEach(item=>{
        const navItem = document.createElement('li');
        navItem.classList.add('nav-item');
        
        const navLink = document.createElement('a');
        navLink.classList.add('nav-link');
        navLink.href = `#${item['href']}`;
        navLink.innerText = item['nav'];
        navItem.appendChild(navLink);


        navList.appendChild(navItem);

    });
}



async function getText() {
    try {
        const res = await fetch('text.json');
        const data = await res.json();
        console.log(data.length);
        addText(data);
        addNavList(data);


    } catch(error) {
        console.log(error);
    }

} 


getText();
