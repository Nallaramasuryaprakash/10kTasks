function under(a)
{
var b=""
for(i in a)
{
    if(a[i]=="_")
    {
        continue;
    }
    else
    {
        b=b+a[i];
    }
}
console.log("After removing:",b);
}
under("hello_Guys")