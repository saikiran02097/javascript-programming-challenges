function fizzbuzz()
{
    var n=document.getElementById("input").value;
    if(n<0)
    {
        alert("input should be greater than 0");
        window.location.assign("factorial.html");
    }
        else
    {
        var x="";
        for(i=1;i<=n;i++)
        if((i%3==0)&&(i%5==0))
        x+="FizzBuzz,";
        else if(i%3==0)
             x+="Fizz,";
             else if(i%5==0)
                  x+="Buzz,";
                  else
                  x+=i+",";
                  
                  document.getElementById("output").innerHTML=x.substring(0,x.length-1);
    }

}