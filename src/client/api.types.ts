export interface ProjectsApiTypes {
    description: any,
    images: any,
    name: string,
    tags: string[],
    _createdAt: string,
    _id: string,
    _rev: string,
    _type: string,
    _updatedAt: string,
    test: string;
    repo: string;
}


export interface SlugType { _type: string, current: string }


export interface BlogsApiTypes {
    category: string[]
    description: any
    mainImage: any,
    name: string,
    slug: SlugType,
    tags: string[],
    _createdAt: string,
    _id: string,
    _rev: string,
    _type: string,
    _updatedAt: string,
}



export interface IndividualBlogApiType {
    category: string[];
    description: any;
    mainImage?: any;
    name: string;
    slug?: SlugType;
    tags?: string[];
    _createdAt?: string;
    _id?: string;
    _rev?: string;
    _type?: string;
    _updatedAt?: string;
}