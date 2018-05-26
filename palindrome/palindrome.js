function palindrome()
{
    var n=document.getElementById("input").value.split(",");
    if(n.length<0)
    {
        alert("enter atleast one string");
        window.location.assign("palindrome.html");
    }
        else
    {
        var x="[";
        for(i=0;i<n.length;i++)
        {
           //alert(n);
            //var temp=n[i];
            //temp.split(",").reverse().join("");
            //alert(temp);
            if(n[i]==n[i].split("").reverse().join(""))
            x+='"'+n[i]+'",';
        }
        x=x.substring(0,x.length-1);  
        x+="]";
                  document.getElementById("output").innerHTML=x;//.substring(0,x.length-1);
    }

}