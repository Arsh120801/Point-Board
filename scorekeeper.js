const p1button=document.querySelector('#p1button');
const p2button=document.querySelector('#p2button');
const p1display=document.querySelector('#p1display');
const p2display=document.querySelector('#p2display');
const winningupto=document.querySelector('#winscore');
const reset=document.querySelector('#reset');

let p1score=0;
let p2score=0;
let winningscore=3;
let isgameover=false;

p1button.addEventListener('click',function()
{
    if(isgameover!==true)
    p1score+=1;
    if(p1score===winningscore)
    {
        isgameover=true;
        p1display.classList.add('winner');
        p2display.classList.add('loser');
        p1button.classList.add('disabled');
        p2button.classList.add('disabled');
    }
    p1display.textContent=p1score;
})

p2button.addEventListener('click',function()
{
    if(isgameover!==true)
    p2score+=1;
    if(p2score===winningscore)
    {
        isgameover=true;
        p2display.classList.add('winner');
        p1display.classList.add('loser');
        p1button.classList.add('disabled');
        p2button.classList.add('disabled');
    }
    p2display.textContent=p2score;
})

reset.addEventListener('click',function()
{
    p1display.textContent=0;
    p1score=0;
    isgameover=false;
    p2display.textContent=0;
    winningupto.value=3;
    winningscore=parseInt(winningupto.value);
    p2score=0;
    
    p1display.classList.remove('winner','loser');
    p2display.classList.remove('loser','winner');
    p1button.classList.remove('disabled');
    p2button.classList.remove('disabled');
})

winningupto.addEventListener('change',function()
{
    isgameover=false;
    winningscore=parseInt(winningupto.value);
    p1display.classList.remove('winner','loser');
    p2display.classList.remove('loser','winner');
    
    p1button.classList.remove('disabled');
    p2button.classList.remove('disabled');
})