const btn = document.querySelector('button');
const div = document.getElementById('text');

function showDiv(){
    div.style.display = 'block';
}

btn.onclick = showDiv;
