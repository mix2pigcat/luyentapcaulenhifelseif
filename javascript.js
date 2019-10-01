let a=parseInt(prompt('So phut goi:'));
let b=parseInt(prompt('so tien moi phut:'));
telephonecharges=(a*b);

if(telephonecharges>1000){
    alert("tien hoa hong la 2tr ");
}else if (telephonecharges>500){
    alert("tien hoa hong la 1tr ");
}else{
    alert("tien hoa hong la 500");
}
