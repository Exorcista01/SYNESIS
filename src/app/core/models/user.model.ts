export interface Address {
    zipCode: string;
    street: string;
    neighborhood: string;
    city: string;
    state: string;
}

export interface Institution {
    name: string;
    id: string;
}

export interface Profile {
    fullName: string;
    responsibleName: string;
    course: string;
    classYear: string;
    avatarUrl?: string;
    role: string;
    address: Address;
    institution: Institution;
}

export interface User {
    id: string;
    name: string;
    email: string;
    password?: string; 
    profile?: Profile; 
}