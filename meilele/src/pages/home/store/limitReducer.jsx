
import {getLimitData,getLikeData} from "../../../axios/api"

const GET_LIMIT_LIST = "GET_LIMIT_LIS"
const GET_LIKE_LIST = "GET_LIKE_LIST"

const defaultState = {
    limitData : [],
    likeData : [],
    str: '1212112121'
}

export default (state=defaultState,action)=>{
    const newState = JSON.parse(JSON.stringify( state ))
    switch( action.type ){
        case GET_LIMIT_LIST:
            newState.limitData = [...newState.limitData,...action.data ]
            
            // let start = new Date().getTime()
            // let end = new Date(2020, 0,1,0,0,0).getTime()
            // setInterval(()=>{
            //     let num = end - start
            //     let days = parseInt(num / (1000*60*60*24))
            //     let hours = parseInt((num % (1000*60*60*24)) / (1000*60*60))
            //     let minutes = parseInt((num % (1000*60*60)) / (1000*60))
            //     let seconds = parseInt((num % (1000*60)) / (1000))
            //     // console.log(days, hours,minutes,seconds)
            //     let str = `仅剩${days}天${hours}:${minutes}:${seconds}`
            //     newState.str = str
            //     console.log(newState.str)
            // },1000)

            return newState;
        case GET_LIKE_LIST:
            newState.likeData = [...newState.likeData,...action.data ]
            return newState;
        default:
            return state    
            
    }
}

const setLimitData = (data,str)=>{
    return {
        type : GET_LIMIT_LIST,
        data,
        str
    }
}

export const getLimit = ()=>{
    return (dispatch)=>{
        getLimitData().then(res=>{
            let obj ={}
            for(let item in res.result){
                if(item === '2018Msy_tg'){
                    obj = res.result[item]
                }
            }
            // console.log(obj)
            obj.goods_info.map((item)=>{
                item.img_url = "http://image.meilele.com/" + item.img_url
            })
            
            dispatch(setLimitData( obj.goods_info ))
        })
    }
}


const setLikeData = (data)=>{
    return {
        type : GET_LIKE_LIST,
        data
    }
}
export const getLike = ()=>{
    return (dispatch)=>{
        getLikeData().then(res=>{
            // console.log(res)
            res.result.map((item)=>{
                item.goods_thumb = "http://image.meilele.com/" + item.goods_thumb
            })
            dispatch(setLikeData( res.result ))
        })
    }
}