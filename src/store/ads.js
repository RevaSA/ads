import * as fb from 'firebase';

export default {
    state: {
        ads: [
            {
                id: 0,
                title: 'First title',
                description: 'First description',
                promo: false,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            },
            {
                id: 1,
                title: 'Second title',
                description: 'Second description',
                promo: true,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            },
            {
                id: 2,
                title: 'Third title',
                description: 'Third description',
                promo: true,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            },
        ],
    },
    getters: {
        ads(state) {
            return state.ads
        },
        promoAds(state) {
            return state.ads.filter(ad => ad.promo)
        },
        myAds(state) {
            return state.ads
        },
        adById(state) {
            return id => state.ads.find(ad => ad.id === id)
        },
    },
    mutations: {
        createAd(state, payload) {
            state.ads.push(payload)
        },
    },
    actions: {
        async createAd({ commit, getters }, payload) {
            commit('clearError')
            commit('setLoading', true)

            try {
                const ad = await fb.database().ref('ads').push({
                    ...payload,
                    ownerId: getters.user.id,
                })

                commit('setLoading', false)
                commit('createAd', {
                    ...payload,
                    id: ad.key,
                })
            } catch (err) {
                commit('setLoading', false)
                commit('setError', err.message)
                throw err
            }
        },
    },
}
