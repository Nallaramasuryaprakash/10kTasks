function even(a)
{
    for(i=0;a[i]!=undefined;i++)
    {
        if(i%2==0)
        {
            console.log(a[i]);
        }
    }
}
even("Prakash")

function evenarr(a)
{
    var array=[];
    for(i=0;a[i]!=undefined;i++)
    {
        if(i%2==0)
        {
            array.push(a[i]);
        }
    }
    console.log(array);
}
evenarr("Prakash")