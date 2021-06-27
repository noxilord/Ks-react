export interface IUser{
    id: string;
    name: string;
    username: string;
    email: string;
    address: IAddress;
    phone: string;
    website: string;
    company: ICompany;

}
interface IAddress{
    street: string;
    suite: string;
    zipcode: string;
    city: string;
    geo: IGeo;
}
interface IGeo{
    lat: string;
    lng: string;
}
interface ICompany{
    name: string;
    catchPhrase: string;
    bs: string;
}