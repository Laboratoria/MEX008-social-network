const Utils = {
    // --------------------------------
    //  Parse a url and break it into resource, id and verb
    // --------------------------------

    parseRequestURL : () => {
        let url = location.hash.slice(1).toLowerCase() || '/';
        let r = url.split('/')
        let request = {
            resource :null,
            id       :null,
            verb     :null,
        }
        request.resource = r[1]
        request.id       = r[2]
        request.verb     = r[3]

        return request
    }

    // --------------------------------
    //  Simple sleep implementation
    // --------------------------------
    , sleep: (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms)); // represents the eventual completion (or failure) of an asynchronous operation, and its resulting value
    }
}

export default Utils;