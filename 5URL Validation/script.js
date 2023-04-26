const pattern = /^https?:\/\/[a-zA-Z]+-?[0-9]?[A-Za-z0-9]+\.+[a-zA-Z]/;

let url = "https://google.com"

if (pattern.test(url)) {
    console.log("Enter URL is valid");
}else{
    console.log("Enter URL is not valid");
}