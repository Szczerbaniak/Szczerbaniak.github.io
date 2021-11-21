let red = 0;
let green = 255;
let blue = 255;
let boxShadow = 30;
let text = "";

function getValue() {
    red = document.getElementById('redInput').value;
    green = document.getElementById('greenInput').value;
    blue = document.getElementById('blueInput').value;
    boxShadow = document.getElementById('boxShadowInput').value;
    text = `button{background-color: rgba(0, 0, 0, 0); border: 3px solid rgb(${red}, ${green}, ${blue}); border-radius: 20px; box-shadow: 0px 0px 10px rgb(${red}, ${green}, ${blue}); color: rgb(${red}, ${green}, ${blue}); font-size: 20px; padding: 20px 30px; text-shadow: 0px 0px 10px rgb(${red}, ${green}, ${blue});} button:active { background-color: rgb(${red}, ${green}, ${blue}); border: 3px solid rgb(${red}, ${green}, ${blue}); box-shadow: 0px 0px ${boxShadow} rgb(${red}, ${green}, ${blue}); color: black;}`;
}

function setButtonColor() {
    const btn = document.querySelector(':root');
    getValue()

    btn.style.setProperty('--button-color', `${red} ${green} ${blue}`);
    btn.style.setProperty('--box-shadow', `${boxShadow}px`);
}

function copyStyle() {
    navigator.clipboard.writeText(text);
}