function space(a){
var s=0
var ns=0
var b=""
for(i in a)
{
    if(a[i]==" ")
    {
        s++
    }
    else
    {
        ns++
        b=b+a[i]
    }
}
console.log("count of spaces:",s);
console.log("count of letters",ns);
console.log(b);
}
space("Hello World")