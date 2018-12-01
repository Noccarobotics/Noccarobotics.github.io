function validate()
{
    if(   document.getElementById("username").value == "workshop"
       && document.getElementById("text2").value == "password" )
    {
        alert( "come to dashboard" );
       // location.href="run.html";
    }
    else
    {
        alert( "invalid username and password" );
       // location.href="fail.html";
    }
}