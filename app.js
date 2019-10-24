
function age()
{
    var age = prompt('How old you is?');
   

    if (age <= 18){
    alert('Error: You na go no party.');
}
    else if (age > 18){
        alert('You gon party ah?');
    }
    return age;
}



function fullName(){
    var first = prompt('What your first name is?');
    
    if (first = true){
        alert('This your first name fa true?');
    }

    var last = prompt('What your last name is?');
    if (last = true){
        alert('This your last name fa true?');
    }

    var yourName = ('first, last');
    return yourName;
}


function favGenre()
{
    var genre = prompt('What your favorite music genres is?');

    if (genre = true){
        alert('That\'s nice, my favorite genres are Soca, Dancehall, and K-pop.');
    }
    
    for(var i=1; i <= 4; i++){
        var BiasOrFav = prompt('Who your favorite celebrity is?');
    }

    if (BiasOrFav = true){
        alert('Oh really, my bias or favorite is Jaehyun from NCT 127.');
    }
    var yourAnswer = ('favGenre, BiasOrFav');
    return yourAnswer;
}


age(); 
fullName(); 
favGenre();