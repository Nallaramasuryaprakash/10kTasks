function cap(a){
var b=""
for(i in a)
{
    if(a.charCodeAt(i)>=65 && a.charCodeAt(i)<=90)
    {
        b=b+a[i];
    }
}
console.log(b);
}
cap("Rama Surya Prakash")

function capA(a){
    // var b=""
    for(i in a)
    {
        if(a[i]>="A" && a[i]<="Z")
        {
            // b=b+a[i];
            console.log(a[i]);
        }
    }
    }
capA("Rama Surya Prakash")


