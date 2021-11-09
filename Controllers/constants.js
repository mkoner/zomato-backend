const DEVELOPMENT_URL = "http://localhost:5454";
const PRODUCTION_URL = "https://zomato-backe.herokuapp.com";

if (process.env.NODE_ENV==='development') {
    exports.BEURL = DEVELOPMENT_URL;
}  else {
    exports.BEURL = PRODUCTION_URL;
}