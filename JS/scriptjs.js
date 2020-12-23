function ysearch(){
    
    
    
    b=document.getElementById("cl").value;
    if(b.length==0)
    {
        window.open("https://www.youtube.com")
    }
    else{
        c=b.replace(" ","+");
    
        a="https://www.youtube.com/results?search_query="+c;
        window.open(a);
    
    }

}
function wsearch(){
    
    
    
    b=document.getElementById("webinput").value;
    c=b.replace(" ","+");
    
    a="https://duckduckgo.com/?q="+c+"&t=chromentp&atb=v239-1&ia=web";
    window.open(a);

}