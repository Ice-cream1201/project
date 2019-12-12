import axios from './axios'

export const getLimitData = () => {
    return axios.get('/mob_api/app_tg_goods')
}

export const getLikeData = () => {
    return axios.get('/dubbo_api/mll/articleAd/getLikeProducts?userTags=k1601*k0702&pagSize=50&cid=ajrk3yggygc_5897144')
}

