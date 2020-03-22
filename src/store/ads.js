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
            return id => state.ads.find(ad => ad.id === Number(id))
        },
    },
    mutations: {
        createAd(state, payload) {
            payload.id = Math.max.apply(null, state.ads.map(ad => ad.id)) + 1
            state.ads.push(payload)
        },
    },
    actions: {
        createAd({ commit }, payload) {
            commit('createAd', payload)
        },
    },
}
