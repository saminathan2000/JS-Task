function findTotal(){
    var arr = document.getElementsByClassName('finInput');
    var tot=0.0;
    for(var i=0;i<arr.length;i++){
        tot += parseFloat(arr[i].value);
    }
    console.log(tot);
    document.getElementById("totalFinCal").value = tot.toFixed(1);
}

function nullValidation(event){
    if(event.target.value.length==1 && event.key=="Backspace"){
        event.target.value="00";
    }
    
}

