import { IFee, IProposal, IReview } from "../api-ifc/IPanel";

export const areTheSame = (p1: IProposal, p2 :IProposal): boolean=>{
    return p1.name ===p2.name && p1.date===p2.date && p1.entity===p2.entity && p1.exp===p2.exp &&p1.firm===p2.firm &&p1.location===p2.location;
}
export const areTheSameFee = (p1: IFee, p2 :IFee): boolean=>{
    return p1.year ===p2.year && p1.cc===p2.cc && p1.law===p2.law && p1.total===p2.total;
}
export const areTheSameReview = (p1: IReview, p2 :IReview): boolean=>{
  
    return p1.name ===p2.name && p1.date===p2.date && p1.entity===p2.entity && p1.exp===p2.exp && p1.location===p2.location;
}
