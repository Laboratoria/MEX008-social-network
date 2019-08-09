const Utils = {
    parseRequestURL: () => {

        let url = location.hash.slice(1).toLowerCase() || "/";
        let slash = url.split("/");
        let request = {
            resource: null,
            id: null,
            verb: null
        };
        request.resource = slash[1];
        request.id = slash[2];
        request.verb = slash[3];

        return request
    },
    // Implementación de sueño simple
    sleep: (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
export default Utils;