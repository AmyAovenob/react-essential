const Auth = {
    isLogin: false,

    logIn(cb) {
        this.isLogin = true
        setTimeout(cb, 100)
    },

    logOut(cb) {
        this.isLogin = false
        setTimeout(cb, 100)
    }
    
}

export default Auth