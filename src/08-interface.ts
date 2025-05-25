interface Address {
    street_1: string,
    street_2?: string,
    city: string,
    state: string,
    ZIP: string
}

interface Company {
    name: string,
    address: Address
}



interface Manger {
    readonly id: number,
    fullname: string,
    company: Company
}

const m1: Manger = {
    id: 241241,
    fullname: 'Haithma',
    company: {
        name: 'PNC',
        address: {
            street_1: '123 osa St',
            city: 'Chicago',
            state: ' IL',
            ZIP: '1245-1221'
        }
    }
}