console.log('Dom loaded');

let protocol = window.location.protocol;
let host = window.location.hostname;
let port = window.location.port;

const myURL = `${protocol}//${host}:${port}`;

console.log(myURL + '/images/monimage.png');