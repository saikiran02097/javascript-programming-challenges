function multi()
{
    var n=Number(document.getElementById("input").value);
    var result=0;
    if(n<=0)
    {
        alert("input should be greater than 0");
        window.location.assign("multi.html");
    }
        else
    {
        for(i=1;i<n;i++)
        if((i%3==0)||(i%5==0))
        result+=i;

         document.getElementById("output").value=result;
    }
}