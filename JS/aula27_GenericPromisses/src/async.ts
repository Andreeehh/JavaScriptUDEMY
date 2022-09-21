import axios, { AxiosResponse } from 'axios'
import { ResponseUser } from './index'

async function Fn() {
    return 200
}

const fn = Fn()
fn.then(n => console.log("valor de n : " + n))

async function getUser(id: number): Promise<ResponseUser> {
    try {
        const resposta = await axios.get<ResponseUser>(`http://localhost:3001/users/${id}`)
        console.log(resposta.data.email)
        return resposta.data
    } catch (err) {
        throw new Error("Error")
    }
}

getUser(20).then(dado => {
    console.log("dado")
    console.log(dado)
}).catch(e => {
    console.log(e)
})
