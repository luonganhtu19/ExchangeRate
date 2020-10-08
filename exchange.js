function exhcange(){
    let fC=document.getElementById("fC").value;
    let tc=document.getElementById("tC").value;
    if (fC==="VietNam"){
        let fc1=+document.getElementById("Amount").value;
        let tc1=fc1/23000;
        if (tc==="USD"){
        document.getElementById("re").innerHTML= "Result: "+tc1+" USD";
        }else {
            document.getElementById("re").innerHTML= "Result: "+fc1+" VND";
        }
    } else{
        let fc1=+document.getElementById("Amount").value;
        let tc1=fc1*23000;
        if(tc==="VietNam"){
            document.getElementById("re").innerHTML= "Result: "+tc1+" VND";
        }else {
            document.getElementById("re").innerHTML= "Result: "+fc1+" USD";
        }
    }
}