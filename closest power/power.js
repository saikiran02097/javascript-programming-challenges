function power()
{
    var n=Number(document.getElementById("input").value);
    if(n<=0)
    {
        alert("input should be greater than 0");
        window.location.assign("power.html");
    }
        else
    {
        for(i=0;Math.pow(2,i)<=n;i++){
            result=i;
        }

         document.getElementById("output").value=result;
    }
}