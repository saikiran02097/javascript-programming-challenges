function fact()
{
    var n=document.getElementById("input").value;
    if(n===null ||n===" ")
    alert("number not entered");
    if(n<0)
    {
        alert("input should be greater than 0");
        window.location.assign("factorial.html");
    }
        else
    {
        var result=1; 
        for(i=1;i<=n;i++)
        {
          result*=i;
        }
        document.getElementById("output").value=result;
    }
}
