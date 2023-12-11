const links = document.querySelectorAll('a');

for (let count of links) {
    count.onclick = function() {
        const dataIndex = this.getAttribute('data-attribute');
        console.log(dataIndex);
    };
}
