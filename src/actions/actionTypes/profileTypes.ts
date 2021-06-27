export const GET_INFO_EXP = 'GET_INFO_EXP';
export const ADD_INFO_EXP = 'ADD_INFO_EXP';
export const DEL_INFO_EXP = 'DEL_INFO_EXP';
export const GET_INFO_SPEC = 'GET_INFO_SPEC';
export const ADD_INFO_SPEC = 'ADD_INFO_SPEC';
export const DEL_INFO_SPEC = 'DEL_INFO_SPEC';
export const GET_INFO_ADM = 'GET_INFO_ADM';
export const ADD_INFO_ADM = 'ADD_INFO_ADM';
export const DEL_INFO_ADM = 'DEL_INFO_ADM';
export const GET_INFO_COU = 'GET_INFO_COU';
export const ADD_INFO_COU = 'ADD_INFO_COU';
export const DEL_INFO_COU = 'DEL_INFO_COU';

export interface ProfileTypes{
    GET_INFO_EXP:{
        expertise: string[],
    }
    ADD_INFO_EXP:{
        expertise: string[],
    }
    DEL_INFO_EXP:{
        expertise: string[],
    }
    GET_INFO_SPEC:{
        expertise: string[],
    }
    ADD_INFO_SPEC:{
        expertise: string[],
    }
    DEL_INFO_SPEC:{
        expertise: string[],
    }
    GET_INFO_ADM:{
        expertise: string[],
    }
    ADD_INFO_ADM:{
        expertise: string[],
    }
    DEL_INFO_ADM:{
        expertise: string[],
    }
    GET_INFO_COU:{
        expertise: string[],
    }
    ADD_INFO_COU:{
        expertise: string[],
    }
    DEL_INFO_COU:{
        expertise: string[],
    }
}
