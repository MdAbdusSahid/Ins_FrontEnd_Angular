export class EmployeeDetails {
    fName: string;
    lName: string;
    contact: number;
    name: string;
    email: string;
    lastConnected: string;
    leadStage: string;
    birthDate: Date;
    gender: string;
    address: string;
    alcohol: string;
    smoke: string;
    age: number;
    pincode: number;
    anualIncome: number;
    govRebate: number;
    taxRebate: number;
    constructor(
        contact: number,
        fname: string,
        lName: string,
        name: string,
        email: string,
        lastConnected: string,
        leadStage: string,
        birthDate: Date,
        gender: string,
        address: string,
        alcohol: string,
        smoke: string,
        age: number,
        pincode: number,
        anualIncome: number,
        govRebate: number,
        taxRebate: number
    ) {
        this.contact = contact
        this.fName
        this.lName
        this.name = name
        this.email = email
        this.lastConnected = lastConnected
        this.leadStage = leadStage
        this.birthDate = birthDate
        this.gender = gender
        this.address = address
        this.alcohol = alcohol
        this.smoke = smoke
        this.age = age
        this.pincode = pincode
        this.anualIncome = anualIncome
        this.govRebate = govRebate
        this.taxRebate = taxRebate
    }

}