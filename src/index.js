import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
    <App/>
</React.StrictMode>, document.getElementById('root'));
serviceWorker.unregister();
document
    .getElementById('root')
    .classList
    .add('js-loading'); // MAKES CSS ANIMATIONS WAIT UNTIL LOADER FUNCTION FINISHES
let bodyChild = document.createElement('div')
bodyChild.className = "LOADING"
bodyChild.id = "LOADING"
document
    .body
    .appendChild(bodyChild)
let loadingDiv = document.createElement('div');
loadingDiv.className = "LOADINGCONTAINER"
loadingDiv.id = "LOADINGCONTAINER"
let array = [
    "L",
    "O",
    "A",
    "D",
    "I",
    "N",
    "G",
    ".",
    ".",
    "."
];
for (let i = 0; i < array.length; i++) {
    let loadingTxt = document.createElement('span');
    loadingTxt.id = "Text"
    loadingTxt.textContent = array[i]
    loadingDiv.appendChild(loadingTxt);
}
document
    .getElementById('LOADING')
    .appendChild(loadingDiv);

document
    .getElementById('LOADING')
    .addEventListener('animationend', () => {
        bodyChild.style.animation = 'loadingDone 1s normal forwards ease-in-out'
        setTimeout(() => {
            bodyChild.style.display = 'none'
            document
                .getElementById('root')
                .classList
                .remove('js-loading')
        }, 1000)
    })
