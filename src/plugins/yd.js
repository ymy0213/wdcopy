 let w=document.documentElement.clientWidth;
    if(w>768){
    w=768;
}
    document.documentElement.style.fontSize=w/375*100+'px';
    window.onresize=function(){
    let w=document.documentElement.clientWidth
    if(w>768){
    w=768;
}
    document.documentElement.style.fontSize=w/375*100;+'px';
}
