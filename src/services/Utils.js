const Utils = {
  pageRequestURL: () => {
    const url = location.hash.slice(1).toLowerCase() || "/";
    const separator = url.split("/");
    const request = {
      resource: null,
      id: null,
      verb: null
    };
    request.resource = separator[1];
    request.verb = separator[2];
    request.id = separator[3];
    return request;
  },
  getTimeline: () => {
    const publications = JSON.parse(localStorage.getItem("publicationList"));
    return publications;
  }
};

export default Utils;
