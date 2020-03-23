import Vue from 'vue'
import * as firebase from 'firebase';
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App),
    created() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDkYEEOmmTnjXDDOqryqzf3oYF3yoEa4RM',
            authDomain: 'ads-project-7d478.firebaseapp.com',
            databaseURL: 'https://ads-project-7d478.firebaseio.com',
            projectId: 'ads-project-7d478',
            storageBucket: 'ads-project-7d478.appspot.com',
            messagingSenderId: '286586016164',
            appId: '1:286586016164:web:70ad9ae16a3d97733db131',
        })

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.$store.dispatch('autoLoginUser', user)
            }
        })
    },
}).$mount('#app')
