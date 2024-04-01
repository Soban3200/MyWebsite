// for sidenavbar open close
 var sidenavbar=document.querySelector(".side-navbar")
 var cancel=document.getElementById("cancel")
function showNavbar(){
    sidenavbar.style.left="0"
}
function cancelNavbar(){
    sidenavbar.style.left="-60%"
}

var  productContainer=document.getElementById("product")
var search=document.getElementById("search")
var productlist=productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredValue=event.target.value.toUpperCase()
    for( count=0;count<productlist.length;count=count+1)
    {
        var productname=productlist[count].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(enteredValue)<0){
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }
})

