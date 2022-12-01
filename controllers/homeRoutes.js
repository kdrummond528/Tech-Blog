const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("home");
});

// route to login
router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/");
        return;
    }

    res.render("login");
});

// route to sign up
router.get("/signup", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/");
        return;
    }

    res.render("signup");
});

// get all posts

// get a single post

module.exports = router;