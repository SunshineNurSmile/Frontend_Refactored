var app = new Vue({
    el: '#app',
    data: {
        
    },
    mounted: function() {},
    methods:{
        jump_to_detail() {
            window.location.href = "/html/loginsignup/signup.html";
        },

        jump_to_login() {
            window.location.href = "/html/loginsignup/login.html";
        }      
    }
})