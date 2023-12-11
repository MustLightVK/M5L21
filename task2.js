let inputArr = [];
let inputItem = document.querySelectorAll('input');

for (let count = 0; count < inputItem.length;  count++) {
    inputArr.push(inputItem[count].getAttribute('type'));
    
}
