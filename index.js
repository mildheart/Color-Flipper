const  hexCode= ["1","2","3","4","5","6","7","8","9","A","B","C","D","E"];
const hexColorText = document.querySelector(".hexColor");
const click_btn = document.querySelector(".click-me-btn");
let contents = hexColorText.textContent;

console.log(contents);

function getRandomNumber(size){
  return  Math.floor(Math.random() * size);
}

function getHexCode(index){
    let code = "#";

    for(let i = 0; i < 6; i++){
        code += hexCode[getRandomNumber(index)];
    }
    return code;
}

window.addEventListener('DOMContentLoaded', function(){
   setup();
});

click_btn.addEventListener('click', function(){
    setup();
})

function setup(){
    let hex = getHexCode(hexCode.length);
    hexColorText.textContent = `${contents} ${hex}`;
    this.document.body.style.backgroundColor = hex;
    click_btn.style.backgroundColor = hex;
}