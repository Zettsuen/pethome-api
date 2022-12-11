import { generalOptions } from "./mongodb";

type gender = "male" | "female";

export interface RequestGetPets {
    key?: string;
    name?: string;
}

export interface GetPetsHelper extends generalOptions {
    filters: {
        key?: string;
        name?: string;
        color?: string;
        age?: string;
        breed?: string;
        shelterKey?: string;
        gender?: gender;
        behaviour?: string;
        sterilized?: boolean;
    }
}

export interface CreatePetHelper {
    name: string;
    description?: string;
    color?: string;
    age?: string;
    breed?: string;
    shelterKey: string;
    gender?: gender;
    behaviour?: string;
    sterilized?: boolean;
}

export interface UpdatePetHelper {
    data: CreatePetHelper,
    filters: GetPetsHelper["filters"]
}

export interface DeletePetHelper {
    key?: string;
    name?: string;
    _id?: string;
}