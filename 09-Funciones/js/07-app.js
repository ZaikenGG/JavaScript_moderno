// incia la funcion
iniciarApp()


function iniciarApp() {
    console.log('Iniciando app...');

    // manda la segunda funcion
    segundaFuncion()
}

function segundaFuncion() {
    console.log('Desde la segunda funcion');

    // manda la tercera funcion
    usuarioAutentication('Pablo')
}

function usuarioAutentication(usuario) {
    console.log('Autenticando usuario..... espere....');
    console.log(`Usuario autenticado exitosamente: ${usuario}`);
}