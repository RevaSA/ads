import store from '../store'

export default function (to, from, next) {
    if (store.getters.isUserLogged) {
        next()
    } else {
        next('/login/?loginError=true')
    }
}
