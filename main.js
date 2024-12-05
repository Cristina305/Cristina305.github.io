var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});
//Comentario
typewriter.typeString('Estudiante de Ingeniería Mecánica')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡De la imaginación nace la creación!')
    .pauseFor(2500)
    //num car que se borraran
    .deleteChars(9)
    .typeString('<strong> innovación!</strong>')
    .pauseFor(2500)
    .start();