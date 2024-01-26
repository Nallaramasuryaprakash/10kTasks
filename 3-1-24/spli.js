var a="Rama_surya_Prakash";
var s="_";
var aa="";
for(i=0;i<a.length;i++)
{
    if(a[i]==="_")
    {
        console.log(aa);
        aa="";
    }
    else
    {
        aa+=a[i]
    }
}
console.log(aa);