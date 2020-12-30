
function ysearch(){  
    
    b=document.getElementById("YSearchFormId").value;

        c=b.replace(" ","+");
        a="https://www.youtube.com/results?search_query="+c;
        window.open(a);

};
function wsearch(){
    b=document.getElementById("WSearchFormId").value;
    c=b.replace(" ","+");
    a="https://duckduckgo.com/?q="+c+"&t=chromentp&atb=v239-1&ia=web";
    window.open(a);
}


function EnterKey(event){
    
    if(event.keyCode==13)
        {
            asearch();
        }
};

function asearch(){
    b=document.getElementById("WSearchFormId").value;
    c=document.getElementById("YSearchFormId").value;
    if(b==""){
        ysearch();
    }
    if(c==""){
    wsearch();
    }
}