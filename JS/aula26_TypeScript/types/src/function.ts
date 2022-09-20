function add(x: number, y: number): string {
    return x + y + ""
}

const multiply = (x: number, y: number) => {
    return x * y
}

const subtract: (x: number, y: number) => number = (x, y) => x - y
let teste = subtract(3, 1)

type User = {
    name: string,
    id: number
}

type LevelAdmin = "Teacher" | "Coordenator" | "Manager"

type Admin = {
    isAdmin: true,
    level: LevelAdmin
}

type UserAdmin = User & Admin

let andre: UserAdmin = {
    name: "andre",
    id: 0,
    isAdmin: true,
    level: "Teacher"
}

type IsAdmin = (user: User) => boolean

const isAdmin: IsAdmin = (user) => !!(user as UserAdmin).isAdmin

console.log(isAdmin(andre)) // true

let maria: User = {
    name: "maria",
    id: 1
}

console.log(isAdmin(maria)) // false

export default 1