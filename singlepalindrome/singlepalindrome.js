function singlepalindrome()
{
    var n=document.getElementById("input").value;
    if(n.length<0)
    {
        alert("enter atleast one string");
        window.location.assign("palindrome.html");
    }
        else
    {
        var x="";
        
            if(n==n.split("").reverse().join(""))
            x="True";
            else
            x="False";
        
                  document.getElementById("output").innerHTML=x;//.substring(0,x.length-1);
    }

}