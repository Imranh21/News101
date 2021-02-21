export const NewsReducer = (state, action) => {
    switch(action.type){
        case "ALL_DATA":
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        default:
            return state
    }

}