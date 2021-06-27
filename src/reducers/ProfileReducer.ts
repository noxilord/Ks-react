import * as actionTypes from '../actions/actionTypes/profileTypes';

export interface ProfileReducer{
    expertise: string[],
    specialties: string[],
    admission: string[],
    counties: string[],
}

const defaultState = (): ProfileReducer =>({
    expertise: ["Mergers"],
    specialties: ["cross brd oper", "trans"],
    admission: ["paris", "tunisian"],
    counties: ["tunisia"],
})

export default(state = defaultState(), action: any) =>{
    switch(action.type)
    {
        case actionTypes.GET_INFO_EXP:{
            const data: actionTypes.ProfileTypes["GET_INFO_EXP"] = action;
            return{
                ...state
            }
        }
        case actionTypes.ADD_INFO_EXP:{
            const data: actionTypes.ProfileTypes["ADD_INFO_EXP"] = action;
            return{
                ...state,
                expertise: [...state.expertise, action.item]
            }
        }
        case actionTypes.DEL_INFO_ADM:{
            const data: actionTypes.ProfileTypes["DEL_INFO_ADM"] = action;
            return{
                ...state,
                admission: state.admission.filter((item) => item!== action.item)

            }
        }
        case actionTypes.GET_INFO_ADM:{
            const data: actionTypes.ProfileTypes["GET_INFO_ADM"] = action;
            return{
                ...state
            }
        }
        case actionTypes.ADD_INFO_ADM:{
            const data: actionTypes.ProfileTypes["ADD_INFO_ADM"] = action;
            return{
                ...state,
                admission: [...state.admission, action.item]
            }
        }
        case actionTypes.DEL_INFO_EXP:{
            const data: actionTypes.ProfileTypes["DEL_INFO_EXP"] = action;
            return{
                ...state,
                expertise: state.expertise.filter((item) => item!== action.item)

            }
        }
        case actionTypes.GET_INFO_SPEC:{
            const data: actionTypes.ProfileTypes["GET_INFO_SPEC"] = action;
            return{
                ...state
            }
        }
        case actionTypes.ADD_INFO_SPEC:{
            const data: actionTypes.ProfileTypes["ADD_INFO_SPEC"] = action;
            return{
                ...state,
                specialties: [...state.specialties, action.item]
            }
        }
        case actionTypes.DEL_INFO_SPEC:{
            const data: actionTypes.ProfileTypes["DEL_INFO_SPEC"] = action;
            return{
                ...state,
                specialties: state.specialties.filter((item) => item!== action.item)
            }
        }
        case actionTypes.GET_INFO_COU:{
            const data: actionTypes.ProfileTypes["GET_INFO_COU"] = action;
            return{
                ...state
            }
        }
        case actionTypes.ADD_INFO_COU:{
            const data: actionTypes.ProfileTypes["ADD_INFO_COU"] = action;
            return{
                ...state,
                counties: [...state.counties, action.item]
            }
        }
        case actionTypes.DEL_INFO_COU:{
            const data: actionTypes.ProfileTypes["DEL_INFO_COU"] = action;
            return{
                ...state,
                counties: state.counties.filter((item) => item!== action.item)
            }
        }
        default:{
            return state;
        }
    }
}