
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

const container = document.querySelector('.container');

burger.addEventListener('click', ()=>{
    nav.classList.toggle('closed');
});

let data = [];

function addText(data) {
    data.forEach(item => {
        
        const chapter = document.createElement('div');
        chapter.classList.add('chapter');
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


async function getText() {
    try {
        const res = await fetch('text.json');
        const data = await res.json();
        console.log(data.length);
        addText(data);


    } catch(error) {
        console.log(error);
    }

} 


getText();
