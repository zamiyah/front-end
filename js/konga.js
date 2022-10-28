var modal=document.getElementById("mymodal")
var btn=document.getElementById("mybtn")
btn.onclick=function(){
    modal.style.display="block"
}
window.onclick=function(event){
    if(event.target==modal){
        modal.style.display="none"
    }
}
var span=document.getElementsByClassName("close") [0]
span.onclick=function(){
    modal.style.display="none"
}