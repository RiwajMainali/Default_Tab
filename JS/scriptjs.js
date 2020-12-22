function ysearch(){
    
    
    
    b=document.getElementById("cl").value;
    c=b.replace(" ","+");
    
    a="https://www.youtube.com/results?search_query="+c;
    window.open(a);

}
