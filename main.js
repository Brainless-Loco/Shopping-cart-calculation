function updateInfo(){
    var Value1 = parseInt(document.getElementById("cart1quantity").value);
    var Value2 = parseInt(document.getElementById("cart2quantity").value);
    Value1 *= parseInt(document.getElementById("cart1price").innerText);
    Value2 *= parseInt(document.getElementById("cart2price").innerText);
    document.getElementById("sub-total").innerText = Value1+Value2;
    var tax = (Value1+Value2)/10;
    tax = Math.ceil(tax);
    document.getElementById("tax").innerText = tax;
    document.getElementById("total").innerText = Value1+Value2+tax;
}

var cartClick = document.getElementById("carts");
cartClick.addEventListener("click",function(event){
    var clickedId = event.target.id;
    if(clickedId == "cross1" || clickedId == "cross2"){
        document.getElementById("cart"+clickedId.charAt(5)+"quantity").value = "0";
        updateInfo();
        document.getElementById("cart"+clickedId.charAt(5)).style.display = "none";
    }
    else if(clickedId=="checkout"){
        location.reload();
    }
    else{
        var PlusOrMinus = 0;
        if(clickedId.charAt(5)=='p'){
            PlusOrMinus = 1;
        }
        else if(clickedId.charAt(5)=='m'){
            PlusOrMinus = -1;
        }
        var quantity = parseInt(document.getElementById("cart"+clickedId.charAt(4)+"quantity").value);
        quantity += PlusOrMinus;
        if(quantity>=0){
            document.getElementById("cart"+clickedId.charAt(4)+"quantity").value = quantity;
        }
        updateInfo();
    }
});