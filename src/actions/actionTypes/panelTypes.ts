import {IFee, IProposal, IReview} from '../../api-ifc/IPanel';

export const EDIT_HOURLY ="EDIT_HOURLY";
export const EDIT_SP ="EDIT_SP";
export const ADD_CORRESPONDANT ="ADD_CORRESPONDANT";
export const DEL_CORRESPONDANT ="DEL_CORRESPONDANT";

export const ADD_PROPOSAL ="ADD_PROPOSAL";
export const DEL_PROPOSAL ="DEL_PROPOSAL";

export const ADD_REVIEW ="ADD_REVIEW";
export const DEL_REVIEW ="DEL_REVIEW";

export const ADD_FEE ="ADD_FEE";
export const DEL_FEE ="DEL_FEE";

export interface PanelTypes{
    EDIT_HOURLY:{
        hourly: string,
    }
    EDIT_SP:{
        SP: string,
    }

    DEL_CORRESPONDANT:{
        correspondants: string[],
    }
    ADD_CORRESPONDANT:{
        correspondants: string[],
    }

    ADD_PROPOSAL:{
        proposals: IProposal[],
    }
    DEL_PROPOSAL:{
        proposals: IProposal[],
    }

    ADD_FEE:{
        fees: IFee[],
    }
    DEL_FEE:{
        fees: IFee[],
    }

    ADD_REVIEW:{
        review: IReview[],
    }
    DEL_REVIEW:{
        review: IReview[],
    }
}