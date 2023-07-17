function fun()
{
    document.querySelector('#baloon1').style.width = '200px';
    document.querySelector('#baloon1').style.height = '200px';

    document.querySelector('#baloon2').style.width = '80px';
    document.querySelector('#baloon2').style.height = '80px';

    document.querySelector('#baloon3').style.width = '300px';
    document.querySelector('#baloon3').style.height = '300px';
}
fun();

function info()
{
    // document.querySelector('#submit').attributes(type, 'submit');

    var nameFirst = document.querySelector('#firstName').value;
    window.localStorage.setItem('FirstName', nameFirst);

    var nameSurrs = document.querySelector('#surName').value;
    window.localStorage.setItem('SurName', nameSurrs); 

    var dy = document.querySelector('#dy').value; 
    window.localStorage.setItem('Day', dy);

    var mm = document.querySelector('#mm').value;
    window.localStorage.setItem('Month', mm);

    var yy = document.querySelector('#yy').value;
    window.localStorage.setItem('Year', yy);

    document.querySelector('form').action = './html/wish.html';

    var nameFirst = document.querySelector('#pic').file;
    window.localStorage.setItem('pic', pic);
}