
const btn = document.getElementById('btn');
var menu1 = document.getElementById('menu1')
var click1 = document.getElementById('click1')
var menu2 = document.getElementById('menu2')
var click2 = document.getElementById('click2')
var menu3 = document.getElementById('menu3')
var click3 = document.getElementById('click3')
var menu4 = document.getElementById('menu4')
var click4 = document.getElementById('click4')
var menu5 = document.getElementById('menu5')
var click5 = document.getElementById('click5')
var menu6 = document.getElementById('menu6')
var click6 = document.getElementById('click6')


click1.addEventListener('click',function(){
    menu1.classList.toggle('menu1');
    menu1.classList.toggle('visible');
    btn.style.display = 'inline';
    if(menu1.className === 'visible'){
        click1.style.borderBottomColor = 'orange';
    }else(
        click1.style.borderBottomColor = '#dbdbdb'
    )
})
click2.addEventListener('click',function(){
    menu2.classList.toggle('menu2');
    menu2.classList.toggle('visible');
    btn.style.display = 'inline';
    if(menu2.className === 'visible'){
        click2.style.borderBottomColor = 'orange';
    }else(
        click2.style.borderBottomColor = '#dbdbdb'
    )
})
click3.addEventListener('click',function(){
    menu3.classList.toggle('menu3');
    menu3.classList.toggle('visible');
    btn.style.display = 'inline';
    if(menu3.className === 'visible'){
        click3.style.borderBottomColor = 'orange';
    }else(
        click3.style.borderBottomColor = '#dbdbdb'
    )
})
click4.addEventListener('click',function(){
    menu4.classList.toggle('menu4');
    menu4.classList.toggle('visible');
    btn.style.display = 'inline';
    if(menu4.className === 'visible'){
        click4.style.borderBottomColor = 'orange';
    }else(
        click4.style.borderBottomColor = '#dbdbdb'
    )
})
click5.addEventListener('click',function(){
    menu5.classList.toggle('menu5');
    menu5.classList.toggle('visible');
    btn.style.display = 'inline';
    if(menu5.className === 'visible'){
        click5.style.borderBottomColor = 'orange';
    }else(
        click5.style.borderBottomColor = '#dbdbdb'
    )
})
click6.addEventListener('click',function(){
    menu6.classList.toggle('menu6');
    menu6.classList.toggle('visible');
    btn.style.display = 'inline';
    if(menu6.className === 'visible'){
        click6.style.borderBottomColor = 'orange';
    }else(
        click6.style.borderBottomColor = '#dbdbdb'
    )
})

let bun
let meat
let cheese = []
let salad = []
let sauce = []
let extra = []

let displayResult = document.getElementById('displayResult')

const bunInputs = document.getElementsByName('bun')
const meatInputs = document.getElementsByName('meat')
const cheeseInputs = document.getElementsByName('cheese')
const saladInputs = document.getElementsByName('salad')
const sauceInputs = document.getElementsByName('sauce')
const extraInputs = document.getElementsByName('extra')

for(let i = 0; i < bunInputs.length; i++){
    bunInputs[i].addEventListener('change',function(){
        if(this.checked){
            bun = this.value;
            console.log(bun);
        }
})
}

for(let i = 0; i < meatInputs.length; i++){
    meatInputs[i].addEventListener('change',function(){
        if(this.checked){
            meat = this.value;
            console.log(meat);
        }
})
}


cheeseInputs.forEach(cheeseInputs => {
    cheeseInputs.addEventListener('change',function(){
        if(this.checked){
            cheese.push(this.value);
            console.log(cheese)
        }else {
            const index = cheese.indexOf(this.value);
            if (index > -1){
                cheese.splice(index,1)
                console.log(cheese)
            }
        }
    })
})

saladInputs.forEach(saladInputs => {
    saladInputs.addEventListener('change',function(){
        if(this.checked){
            salad.push(this.value);
            console.log(salad)
        }else {
            const index = salad.indexOf(this.value);
            if (index > -1){
                salad.splice(index,1)
                console.log(salad)
            }
        }
    })
})

sauceInputs.forEach(sauceInputs => {
    sauceInputs.addEventListener('change',function(){
        if(this.checked){
            sauce.push(this.value);
            console.log(sauce)
        }else {
            const index = sauce.indexOf(this.value);
            if (index > -1){
                sauce.splice(index,1)
                console.log(sauce)
            }
        }
    })
})

extraInputs.forEach(extraInputs => {
    extraInputs.addEventListener('change',function(){
        if(this.checked){
            extra.push(this.value);
            console.log(extra)
        }else {
            const index = extra.indexOf(this.value);
            if (index > -1){
                extra.splice(index,1)
                console.log(extra)
            }
        }
    })
})

var result = document.getElementById('result');
var popup = document.getElementById('popup');
var overlay = document.getElementById('overlay');
var backBtn = document.getElementById('backBtn');

btn.addEventListener("click",start);
function start(){

let burguer = new Object();
burguer.Bun = bun
burguer.Meat = meat
burguer.Cheese = cheese
burguer.Salad = salad
burguer.Sauce = sauce
burguer.Extra = extra

overlay.style.display = 'block';
popup.style.display = 'block';

let keys = Object.keys(burguer);
for (let i = 0; i < keys.length; i++) {
    if(burguer.Bun === undefined){
        burguer.Bun = ""
    } else if(burguer.Meat === undefined){
        burguer.Meat = ""
    }
  let key = keys[i];
  let value = burguer[key];
  result.innerHTML += key + ": " + value + "<br>";
}

}




