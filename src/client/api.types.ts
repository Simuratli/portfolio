export interface SocialNetworksPropTypes {
    title:string;
    url:string;
    _id:string;
}

export interface UserPropTypes {
    bio:[],
    cv:[],
    gmail:string;
    image:[],
    jobTitle:string;
    name:string;
    quote:string;
    social:SocialNetworksPropTypes[];
    _createdAt:string;
    _id:string;
    _rev:string;
    _type:string;
    _updatedAt:string
}