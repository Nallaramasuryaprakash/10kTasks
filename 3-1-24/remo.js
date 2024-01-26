function remo(a)
{
var b=""
var count=0;
for(i in a)
{
    if(a[i]==" ")
    {
        count++
    }
    else
    {
        b=b+a[i];
    }
}
console.log("After removing ",b);
console.log(count);
}
remo(" helloGuys ")