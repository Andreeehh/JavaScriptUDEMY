type User = {
    name: string,
    id: number
}

type levelAdmin = "Teacher" | "Coordenator" | "Manager"

type Admin = {
    isAdmin: true,
    level: levelAdmin
}

type UserAdmin = User & Admin

let andre: UserAdmin = {
    name: "andre",
    id: 0,
    isAdmin: true,
    level: "Teacher"
}

export default 1