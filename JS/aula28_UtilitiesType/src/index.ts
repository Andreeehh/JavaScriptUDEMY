//PARTIAL

type Square = {
    x: number,
    y: number,
    width: number,
    height: number
}

type UpdateSquare = (a: Square, b: Partial<Square>) => Square

const square1: Square = {
    x: 10,
    y: 20,
    width: 100,
    height: 200
}

// const square2: Partial<Square> = { x: 30}

const updateSquare: UpdateSquare = (a, b) => {
    return Object.assign({}, a, b)
}

const square3 = updateSquare(square1, { x: 30 })
console.log(square1)
// console.log(square2)
console.log(square3)

//RESUMO: Partial vc pode passar uma unica propriedade de um objeto em vez de ele todo, mesmo todas as propriedades dele sendo obrigatórias

//PICK - Pega as propriedades passadas depois da virgula
type Position = Pick<Square, "x" | "y">
const position: Position = {
    x: 20,
    y: 50
}

console.log(position)

// Omit - Esconde as propriedades passadas depois da virgula
type Size = Omit<Square, "x" | "y">
const size: Size = {
    width: 200,
    height: 300
}

console.log(size)

//Exclude<T, U>
type SquareColor = "red" | "blue" | "green" | "black" | "white"

type SaturatedColor = Exclude<SquareColor, "black" | "white">

type SadColor = "black" | "white" | "grey"
type SadSquareColor = Extract<SquareColor, SadColor>// "black" | "white" extrai do primeiro parametros as cores que tiverem no segundo parametro
type HappySquareColor = Exclude<SquareColor, SadColor>// "red" | "blue" | "green"

//Required
type User = {
    name: string,
    email: string,
    id?: number
}

type UserGet = Required<User>//OBRIGA todas as propriedades serem obrigatorias

//Partial

type UserPatch = Partial<User>//Todas as propriedades passam a ser nao obrigatórias

//ReadOnly

type UserRead = Readonly<User>//torna todas as propriedades em apenas para leitura
const andre: UserRead = {
    name: "Andre",
    email: "andre@email.com"
}

// andre.name = "Andre carvalho" impossivel sobrescrever um readOnly

//NonNullable
type Cpf = { cpf: string }
type Cnpj = { cnpj: string }

type User2 = Cpf | Cnpj | null | undefined

const user2: NonNullable<User2> = { //impede de passar null ou undefined
    cpf: "1111"
}


//Record<T, U>

type Url = {
    url: string
}

type SocialMedia = "facebook" | "instagram" | "youtube"

const medias: Record<SocialMedia, Url> = { // Cada propriedade do primeiro tem q ter as propriedades do segundo
    facebook: { url: "facebook.com" },
    instagram: { url: "instagram.com" },
    youtube: { url: "youtube.com" }
}

console.log(medias)

//conditional types

type MyString = number
type MyType = MyString extends string | number ? string : boolean

function myFunction<T>(param: T extends string ? string : number) {

}

myFunction<string>("a")
// myFunction<number>("a")
// myFunction("a")
myFunction<boolean>(2)//caso o parametro n for string, ele espera um numero

function myFunction2<T>(param: T) {
    return function (param2: T extends number ? number : MyString) {

    }
}

const myF = myFunction2("string")

type NumberOrNever<T> = T extends number ? number : never
const test: NumberOrNever<number> = 10

type OnePropertyOfSquare = keyof Square // ="x" | "y" | "width" | "height" = "width"
let onePropertyOfSquare: OnePropertyOfSquare = "width"

//Mapped Types
type Props = "x" | "y" | "z"
// type MappedFromProps = {
//     "x": number,
//     "y": number,
//     "z": number
// }
type MappedFromProps<T extends string | number | symbol> = {
    [P in T]: number
}
type MyMappedTypes = MappedFromProps<Props>
type MappedFromProps2<T> = {
    readonly [P in keyof T]: T[P]
}

type Test = MappedFromProps2<{a: "a", b: "b"}>

// Lookup types
type BankAccount = {
    id: number,
    name: string,
    count: {
        agency: number,
        code: number,
        digit: number
    }
}

type Id = BankAccount["id"]
type Count = BankAccount["count"]
type Digit = BankAccount["count"]["digit"]

// typeof

const myCount: BankAccount = {
    id: 1,
    name: "andré",
    count: {
        agency: 2,
        code: 3,
        digit: 4
    }
}

type TypeOfMyCount = typeof myCount
type TypeOfMyCountId = typeof myCount.id