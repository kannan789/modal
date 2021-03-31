var opnMdl=document.querySelector(".js-open");
var mdlBg=document.getElementById("modal-bckgrnd");
var mdlBx=document.getElementById("modal-box");
opnMdl.addEventListener('click',function(event){
    event.preventDefault();
    mdlBg.classList.add("active");
    mdlBx.classList.add("active");

});
var btnCls=document.querySelector(".close");
var btnAcpt=document.querySelector(".done");

btnCls.addEventListener('click',function(event){
    mdlBg.classList.remove("active");
    mdlBx.classList.remove("active");
    });

    btnAcpt.addEventListener('click',function(event){
    mdlBg.classList.remove("active");
    mdlBx.classList.remove("active");
    });
