const user = require("./users");

module.exports = (req, res) => {
    const { username, password } = req.body;

    user.findOne({username : username}, (error, user) => {
        if (user) {
            if (password == user.password) { // 로그인 성공
                req.session.userId = user._id
                res.redirect('/');
            } else { // 실패
                res.redirect('/login');
            }
        } else {    
            res.redirect('/login'); // 실패
        }
    })
}