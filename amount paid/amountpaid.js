function amountpaid()
{
    var n=document.getElementById("input").value;
    var x=JSON.parse(n);
    var sum=0;
    for(i in x)
    sum+=x[i];
    document.getElementById("output").value=sum;
}