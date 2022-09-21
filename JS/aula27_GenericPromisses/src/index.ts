import axios, { AxiosResponse } from 'axios'

export type ResponseUser = { name: string, id: number, email: string }

axios.get<Array<ResponseUser>>("http://localhost:3001/users").then( (response) => {
    const resposta = response.data[0]
    // console.log(resposta.name)
})


axios.post<ResponseUser>("http://localhost:3001/users", {name: "Fulano", email: "fulano@email"} ).then( (response) => {
    console.log(response.data.id)
})

const getUser = (id: number): Promise<AxiosResponse<ResponseUser>> => {
    return axios.get(`http://localhost:3001/users/${id}`)
}
console.log("getUser(2)")
getUser(2).then( ({data}) => console.log(data.name))// {data} == response.data