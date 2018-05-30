function sumpairs()
{   var sum=Number(document.getElementById("sum").value);
    var n=document.getElementById("input").value.split(",").map(function(x){
        return parseInt(x,10)});
        var res=" ";
        for(i=0;i<n.length-1;i++)
        for(j=i+1;j<n.length;j++)
        if(n[i]+n[j]==sum)
        res+='"'+n[i]+','+n[j]+'"';
    document.getElementById("output").value=res;
}