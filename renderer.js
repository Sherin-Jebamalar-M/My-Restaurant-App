var minimize=document.querySelector('.min');
var exit=document.querySelector('.ex');

const { ipcRenderer } = require('electron');

minimize.addEventListener('click', () => {
    ipcRenderer.send('minimize-window'); 
});

exit.addEventListener('click', () => {
    ipcRenderer.send('close-window'); 
});
var next = document.getElementById('next');
next.addEventListener('click', () => {
    ipcRenderer.send('navigate-to-menu'); 
});


