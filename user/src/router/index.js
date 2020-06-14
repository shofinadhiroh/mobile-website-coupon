import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Mycoupon from "../views/Mycoupon.vue";
import Historycoupon from "../views/Historycoupon.vue";
import Myaccount from "../views/Myaccount.vue";
import Login from "../views/Login.vue";
import Createaccount from "../views/Createaccount.vue";
import Createusername from "../views/Createusername.vue";
import Createpassword from "../views/Createpassword.vue";
import Creategender from "../views/Creategender.vue";
import Createbirthday from "../views/Createbirthday.vue";
import Verificationcode from "../views/Verificationcode.vue";
import Paymentmethod from "../views/Paymentmethod.vue";
import Paymentcode from "../views/Paymentcode.vue";
import Creditcard from "../views/Creditcard.vue";
import Forgotpassword from "../views/Forgotpassword.vue";
import Redeemdetail from "../views/Redeemdetail.vue";
import Redeemeddetail from "../views/Redeemeddetail.vue";
import Termsandcondition from "../views/Termsandcondition.vue";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: {
                name: "home"
            }
        },
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/mycoupon',
            name: 'mycoupon',
            component: Mycoupon
        },
        {
            path: '/historycoupon',
            name: 'historycoupon',
            component: Historycoupon
        },
        {
            path: '/myaccount',
            name: 'myaccount',
            component: Myaccount
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/createaccount',
            name: 'createaccount',
            component: Createaccount
        },
        {
            path: '/createusername',
            name: 'createusername',
            component: Createusername
        },
        {
            path: '/createpassword',
            name: 'createpassword',
            component: Createpassword
        },
        {
            path: '/creategender',
            name: 'creategender',
            component: Creategender
        },
        {
            path: '/createbirthday',
            name: 'createbirthday',
            component: Createbirthday
        },
        {
            path: '/verificationcode',
            name: 'verificationcode',
            component: Verificationcode
        },
        {
            path: '/paymentmethod',
            name: 'paymentmethod',
            component: Paymentmethod
        },
        {
            path: '/paymentcode',
            name: 'paymentcode',
            component: Paymentcode
        },
        {
            path: '/creditcard',
            name: 'creditcard',
            component: Creditcard
        },
        {
            path: '/forgotpassword',
            name: 'forgotpassword',
            component: Forgotpassword
        },
        {
            path: '/redeemdetail',
            name: 'redeemdetail',
            component: Redeemdetail
        },
        {
            path: '/termsandcondition',
            name: 'termsandcondition',
            component: Termsandcondition
        },
        {
            path: '/redeemeddetail',
            name: 'redeemeddetail',
            component: Redeemeddetail
        },
    ]
})
