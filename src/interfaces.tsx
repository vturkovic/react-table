export interface TableRowInterface {
    id: string,
    index: number,
    guid: string,
    isActive: string,
    balance: string,
    picture: string,
    age: number,
    eyeColor: string,
    name: string,
    gender: string,
    company: string,
    email: string,
    phone: string,
    address: string,
    about: string,
    registered: string,
    latitude: number,
    longitude: number,
    greeting: string,
    favoriteFruit: string
}

export interface TableColumnDataInterface {
    Header?: string,
    accessor?: string,
    className?: string,
    headerClassName?: string,
    width?: number
    Footer?: string
}

export interface TableInterface {
    tableRowData: TableRowInterface[],
    tableColumnData: TableColumnDataInterface[] 
}

export interface SumInterface {
    index: number,
    age: number, 
    latitude: number,
    longitude: number
}