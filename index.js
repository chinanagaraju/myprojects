let btn=document.querySelector('button'); 
btn.addEventListener('click',showMSG);

// function showMSG(){
// alert("WELCOME TO IMAGINATION");its for button aciton with alert
// }
//change text of the button based on user /*
function showMSG(){
    let name=prompt('enter name');
    btn.textContent=('welcome'+name);

}