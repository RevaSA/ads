import * as fb from 'firebase';

export default {
    state: {
        ads: [],
    },
    getters: {
        ads(state) {
            return state.ads
        },
        promoAds(state) {
            return state.ads.filter(ad => ad.promo)
        },
        myAds(state, getters) {
            return state.ads.filter(ad => ad.ownerId === getters.user.id)
        },
        adById(state) {
            return id => state.ads.find(ad => ad.id === id)
        },
    },
    mutations: {
        createAd(state, payload) {
            state.ads.push(payload)
        },
        loadAds(state, payload) {
            state.ads = payload
        },
        updateAd(state, { title, description, id }) {
            const ad = state.ads.find(a => a.id === id)

            ad.title = title
            ad.description = description
        },
    },
    actions: {
        async createAd({ commit, getters }, payload) {
            const { image } = payload
            const imageExt = image.name.slice(image.name.lastIndexOf('.'))

            delete payload.image
            commit('clearError')
            commit('setLoading', true)

            try {
                const newAd = Object.assign(payload, { ownerId: getters.user.id })
                const ad = await fb.database().ref('ads').push(newAd)
                const fileData = await fb.storage().ref(`ads/${ad.key}.${imageExt}`).put(image)
                const imageSrc = await fileData.ref.getDownloadURL().then(value => value)

                await fb.database().ref('ads').child(ad.key).update({ imageSrc })
                commit('setLoading', false)
                commit('createAd', {
                    ...payload,
                    id: ad.key,
                    imageSrc,
                })
            } catch (err) {
                commit('setLoading', false)
                commit('setError', err.message)
                throw err
            }
        },
        async fetchAds({ commit }) {
            commit('clearError')
            commit('setLoading', true)

            try {
                const fbVal = await fb.database().ref('ads').once('value')
                const ads = fbVal.val()

                commit('loadAds', Object.keys(ads).map(key => Object.assign(ads[key], { id: key })))
                commit('setLoading', false)
            } catch (error) {
                commit('setError', error.message)
                commit('setLoading', false)
                throw error
            }
        },
        async updateAd({ commit }, { title, description, id }) {
            commit('clearError')
            commit('setLoading', true)

            try {
                await fb.database().ref('ads').child(id).update({
                    title, description,
                })
                commit('updateAd', {
                    title, description, id,
                })
                commit('setLoading', false)
            } catch (error) {
                commit('setError', error.message)
                commit('setLoading', false)
                throw error
            }
        },
    },
}
