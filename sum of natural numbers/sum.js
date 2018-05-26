function sum()
{
    var n=Number(document.getElementById("input").value);
    if(n<0)
    {
        alert("input should be greater than 0");
        window.location.assign("factorial.html");
       
    }
        else
    {
        
         document.getElementById("output").value=n*(n+1)/2;
    }
}