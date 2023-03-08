
const app = require('./src/app')

const url = process.env.MONGO_URL

const connectDB = require("./src/db/connect")

const PORT = process.env.PORT || 3000

const main = async () => {
    try {
        await connectDB(url)
        app.listen(PORT)
    } catch (e) {
        console.log(e)
    }
}

main()
