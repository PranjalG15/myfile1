function getFirstName(fullname)
{
    return fullName.split(" ")[0];
}

function getLastName(fullname)
{
    return fullName.split(" ")[1];
}
function greeter(fullName,cb)
{
 //   let message=cb(fullName);
    console.log("hi"+message);
}
greeter("pranjal arya",getFirstName);

//greeter("pranjal arya",getLastName);