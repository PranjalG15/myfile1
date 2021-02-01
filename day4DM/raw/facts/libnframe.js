function framework(data,scb,fcb)
{
    for(let i=2;i*i<=data;i++)
    {
        if(data%i==0)
        {
            return fcb();
        }
    }
    return scb();
}
let {exec}=require ("child_process")
function scb()
{
    console.log("number is prime");
    exec('start chrome').unref()
}
function fcb()
{
    console.log("number is not prime");
    exec('calc').unref()
}
//framework(21,scb,fcb);
framework(23,scb,fcb);