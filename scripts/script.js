function findTotal(){
  var arr = document.getElementsByClassName('finInput');
    var tot=0;
    for(var i=0;i<arr.length;i++){
        if(parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
        }
    console.log(tot);
    document.getElementById("totalFinCal").value = tot.toFixed(1);
}

