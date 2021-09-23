const countdownelement = document.getElementById('countdown');

function updateCounter(val,display){
    setTimeout(function(){
        val=val-1;
        display(val);
    },2000);
}

function display(value){
    if(value>0){
        countdownelement.innerHTML = value;
        updateCounter(value,display);
    }
    else{
        countdownelement.innerHTML = "Happy Birthday";
    }
}

updateCounter(11,display);