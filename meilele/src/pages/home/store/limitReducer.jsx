
import {getLimitData,getLikeData} from "../../../axios/api"

const GET_LIMIT_LIST = "GET_LIMIT_LIS"
const GET_LIKE_LIST = "GET_LIKE_LIST"

const defaultState = {
    limitData : [],
    likeData : []
}

export default (state=defaultState,action)=>{
    const newState = JSON.parse(JSON.stringify( state ))
    switch( action.type ){
        case GET_LIMIT_LIST:
            newState.limitData = [...newState.limitData,...action.data ]
            console.log(action.data )
            return newState;
        case GET_LIKE_LIST:
            newState.likeData = [...newState.likeData,...action.data ]
            return newState;
        default:
            return state    
            
    }
}

// const setLimitData = (data)=>{
//     return {
//         type : GET_LIMIT_LIST,
//         data
//     }
// }

export const getLimit = ()=>{
    return (dispatch)=>{
        getLimitData().then(res=>{
            // const {2018Msy_tg = Msy_tg,time,url} = res.result
            // dispatch(setLimitData( res.data ))
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
            dispatch(setLikeData( res.result ))
        })
    }
}