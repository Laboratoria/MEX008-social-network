const Utils = { 
    // --------------------------------
    //  Analiza una URL y divídela en recurso, id y verbo
    // --------------------------------
    parseRequestURL : () => {   
        let url = location.hash.slice(1).toLowerCase() || '/'; // Si expr1 se puede convertir a verdadero, devuelve expr1; de lo contrario, devuelve expr2.
        //console.log(`utils: ${location}, ${location.hash}, ${location.hash.slice(1)}`);       
        let r = url.split("/")
       // console.log(url);console.log(r);
        let request = {
            resource    : null,
            id          : null,
            verb        : null
        }       
        request.resource    = r[1]
        request.id          = r[2]
        request.verb        = r[3]
        //console.log(request); 
        return request
    }

    // --------------------------------
    // Implementación de sueño simple
    // --------------------------------
    , sleep: (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms)); // representa la finalización (o falla) eventual de una operación asincrónica, y su valor resultante.
    }
}

export default Utils;