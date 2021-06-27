export interface IProposal{
    name: string;
    entity: string;
    location: string;
    exp: string;
    date: Date;
    firm: string;
}
export interface IReview{
    name: string;
    entity: string;
    location: string;
    exp: string;
    date: Date;
}

export interface IFee{
    year: string;
    cc: string;
    total: string;
    law: string;
}