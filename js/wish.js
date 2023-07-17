function fun()
{
    var nameFirst = localStorage.getItem('FirstName');
    var surName = localStorage.getItem('SurName');
    var dy = localStorage.getItem('Day');
    var mm = localStorage.getItem('Month');
    var yy = localStorage.getItem('Year');

    document.querySelector("#nameFirst").innerHTML = `${nameFirst}`;
    document.querySelector("#user").innerHTML = `${nameFirst}`;
    document.querySelector("#surName").innerHTML = `${surName}`;
    document.querySelector("#dy").innerHTML = `${dy}`;
    document.querySelector("#mm").innerHTML = `${mm}`;
    document.querySelector("#yy").innerHTML = `${yy}`;
}
fun();

var close = document.getElementsByClassName("cardContainer");
function windOpen()
{
    close[0].style.display = "block";
}
function windClose()
{
    close[0].style.display = "none";
}