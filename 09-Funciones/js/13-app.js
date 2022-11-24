const reproductor = {

    // Metodos de propiedad
    cancion :'',
    reproducir: (id) => `Reproduciendo cancion con el id ${id}`,
    pausar: () => 'Pausando....',
    borrar: (id) => `Borrando cancion de ${id}`,
    addPlayList: (nombre) => `Agregando nuevo play list ${nombre}`,
    reproducirPlayList: (nombre) => `Reproduciendo el nombre de la play list ${nombre}`,


    // set es una forma de agregar valores
    set nuevaCancion (cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    // get es una forma de obtener de vuelta esos valores
    get obtenerCancion (){
        console.log(`${this.cancion}`);
    }

} 

reproductor.nuevaCancion = 'Enter Sadman'
reproductor.obtenerCancion;

reproductor.reproducir('Oliver');
reproductor.pausar();
reproductor.borrar('Oliver');
reproductor.addPlayList('Champion for every day');
reproductor.reproducirPlayList('Champion for every day');
