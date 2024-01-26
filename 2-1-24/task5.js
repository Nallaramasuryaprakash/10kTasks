function count(a)
{
    var c=0;
    var b=0;
    var s=0;
    var d=0;
    for(i=0;i<a.length;i++)
    {
        let res=a.toLowerCase();
        if(res[i]=="a" || res[i]=="e" || res[i]=="i" || res[i]=="o" || res[i]=="u")
        {
            c++;
        }
        else if(res[i]>="a" && res[i]<="z")
        {
            b++;
        }
        else if(res[i]==" ")
        {
            s++;
        }
        else
        {
            d++;
        }
    }
    console.log("Total count of vowels:",c);
    console.log("Total count of Consonents:",b);
    console.log("Total Count of Spaces:",s);
    console.log("Total count of spl characters",d);
}
count("Nagendra is an all rounder!")

