type ArrUniqueTypes<T> = T[]

const teste: ArrUniqueTypes<number> = [1, 2]
const teste2: ArrUniqueTypes<string | boolean> = ["1", "2", false]

const arrNumber: number[] = [1, 2, 3, 4]
const arrNumber2: Array<number> = [1, 2, 3, 4]