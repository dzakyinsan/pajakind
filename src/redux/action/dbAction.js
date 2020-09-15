import axios from 'axios'
import {GET_COLOR_SUCCESS} from './types'

export const onGetColor=()=>{
    return dispatch=>{
        axios.get(`https://reqres.in/api/unknown`)
        .then((res)=>{
            dispatch({type:GET_COLOR_SUCCESS,payload:res.data.data})
        }).catch((err)=>{
            console.log('error servernya',err);
        })
    }
}