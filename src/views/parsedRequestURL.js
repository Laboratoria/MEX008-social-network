const Utils = {
    parsedRequestUrl : () => {
        let url = location.hash.slice(1).toLowerCase() || '/';
        console.log(url);
        let r = url.split('/');
        let request = {
        resource: null,
        id:null,
        verb:null
        }
        request.resource = r[1]
        request.id = r[2]
        request.verb = r[3]

        return request
      }  
};
console.log(Utils.parsedRequestUrl);

export default Utils;
