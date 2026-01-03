let start = document.getElementById('start');
let stop1 = document.getElementById('stop');
let interval;

const colors = ['red','blue', 'green','yellow'];
let number = 0;

function color(){
  document.body.style.backgroundColor=colors[number];
  number+=1;
  if (number === 4){
    number = 0;
  }
}


start.addEventListener('click',function(){
    interval = setInterval(color,1000)
});


stop1.addEventListener('click', function(){
    clearInterval(interval);
    
})