export type TTodo = {
    completed: boolean,
    id: number,
    title: string,
    userId: number,
}

export interface ITodoElement {
    id: number,
    name: string,
    email: string,
    countTodo: number
}

export type TUser = {
    address: TUserAddress,
    company: TUserCompany,
    email: string,
    id: number,
    name: string,
    phone: string,
    username: string,
    website: string
}

type TUserAddress = {
    city: string,
    geo: {
        lat: string,
        lng: string
    },
    street: string,
    suite: string,
    zipcode: string
}

type TUserCompany = {
    bs: string,
    catchPhrase: string,
    name: string    
}