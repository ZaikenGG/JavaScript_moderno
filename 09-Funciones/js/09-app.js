const reproductor = {

    // Metodos de propiedad
    reproducir: function(id){
        console.log(`Reproduciendo cancion con el id ${id}`);
    },

    pausar: function(){
        console.log('Pausando....');
    },

    borrar: function(id){
        console.log(`Borrando cancion de ${id}`);
    },

    addPlayList: function(nombre){
        console.log(`Agregando nuevo play list ${nombre}`);
    },

    reproducirPlayList: function(nombre){
        console.log(`Reproduciendo el nombre de la play list ${nombre}`);
    }
}

reproductor.reproducir(30)
reproductor.pausar()
reproductor.borrar(30)
reproductor.addPlayList('Malverick')
reproductor.reproducirPlayList('Malverick')