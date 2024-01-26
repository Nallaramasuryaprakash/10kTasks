function evennew(a)
{
    var b=""
    for(i=0;a[i]!=undefined;i++)
    {
        if(i%2==0)
        {
            console.log(i,a[i]);
            b=b+a[i];
        } 
    }
    console.log("After concatination:",b);
}
evennew("Hello")