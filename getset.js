var password = "welcome";
var User = (function () {
    function User() {
    }
    Object.defineProperty(User.prototype, "user", {
        get: function () {
            return this.userName;
        },
        set: function (name) {
            if (password && password == "welcome") {
                this.userName = name;
                console.log("Username " + this.userName + " is valid");
            }
            else {
                console.log("User is not valid");
            }
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
var users = new User();
users.user = "Titiksha";
if (users.user) {
    console.log(users.user);
}
