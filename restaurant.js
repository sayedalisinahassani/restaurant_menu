const pizza=document.querySelector('.pizza_request_btn');
const hamburger=document.querySelector('.hamburger_request_btn');
const beer=document.querySelector('.beer_request_btn');
const card=document.querySelector('.card_details')
const pay_button=document.querySelector('.pay_button');
const send_menu=document.querySelector('.send_menu');
const pizza_food=document.querySelector('.pizza_food');
const Hamburger_food=document.querySelector('.Hamburger_food');
const beer_class=document.querySelector('.beer_class');
const price1=document.querySelector('.price1');
const price2=document.querySelector('.price2');
const price3=document.querySelector('.price3');
const removes=document.querySelector('.remove');
const totals=document.querySelector('.total');
const complete_order=document.querySelector('.complete_order');
const final=document.querySelector('.final');
const remove_pizza=document.querySelector('.remove_pizza');
const remove_hamberger=document.querySelector('.remove_hamberger');
const remove_beer=document.querySelector('.remove_beer');
const input_button=document.querySelector('.input_button');

// varible for store total value
let count=0;



//pizza funtion
pizza.addEventListener('click', function(){
    card.classList.remove('hidden');
    final.classList.add('hidden4');
    count += 14;
    // pay_button.addEventListener('click',init)
    pay_button.addEventListener('click',function(){
        chechprice() 
        send_menu.classList.remove('hidden2');
        remove_pizza.classList.remove('hidden3')
        price1.innerHTML='$'+14;
        pizza_food.textContent='pizza';
        totals.innerHTML='$'+count;
    });
    
})

// hamburger funtion
hamburger.addEventListener('click',function(){
    card.classList.remove('hidden');
    final.classList.add('hidden4');
    count +=12;
    pay_button.addEventListener('click',function(){
        chechprice() 
        send_menu.classList.remove('hidden2');
        remove_hamberger.classList.remove('hidden3')
        price2.innerHTML='$'+12;
        Hamburger_food.textContent='hamberger';
        totals.innerHTML='$'+count;   
    });
})
// beer funtion
beer.addEventListener('click',function(){
    card.classList.remove('hidden');
    final.classList.add('hidden4');
    count +=12;
    pay_button.addEventListener('click',function(){
        chechprice() 
        send_menu.classList.remove('hidden2');
        remove_beer.classList.remove('hidden3')
        price3.innerHTML='$'+12;
        beer_class.textContent='beer';
        totals.innerHTML='$'+count;     
    });
})
// close overly
document.addEventListener('click',function(event){
    if(!card.contains(event.target) && event.target!==pizza && 
    event.target!==hamburger && event.target!==beer){
    card.classList.add('hidden')
    };
})

complete_order.addEventListener('click',function(){
    count=0;
    send_menu.classList.add('hidden2');
    final.classList.remove('hidden4');
})

function chechprice(){
    if(input_button===''){
        pay_button.disabled=true;
    } else{
        pay_button.disabled=false;    
    }
}
// remove_pizza.addEventListener('click',function(){
//     pizza_food.innerHTML=null;
//     price1.innerHTML=null;
//     count-=14
//     totals.innerHTML='$'+count;
//     // remove_pizza.innerHTML=null;
// }) 

// remove_hamberger.addEventListener('click',function(){
//     Hamburger_food.innerHTML=null;
//     price2.innerHTML=null;
//     count-=12
//     totals.innerHTML='$'+count;
//     // remove_pizza.innerHTML=null;
// })

// remove_beer.addEventListener('click',function(){
//     beer_class.innerHTML=null;
//     price3.innerHTML=null;
//     count-=12
//     totals.innerHTML='$'+count;
//     // remove_pizza.innerHTML=null;
// })