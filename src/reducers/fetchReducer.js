
export const initialState={
    loading:false,
    error:null,
    data:[]
}

export function fetchReducer(state,action){
    switch(action.type){
        case "Fetch_start":
            return {...state,loading:true}
        case "Fetch_success":
            return {...state,loading:false, data:action.payload}
        case "Fetch_fail":
            return {...state,loading:false,error:action.payload}
        default :
        return {...state}
    }
}