import mongoose from 'mongoose'


const Connection = async (username,password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.e2zdv.mongodb.net/ECOMMERCE?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log('Database connected successfully')
    } catch (error) {
        console.log('Error: ', error.message)
    }
}

export default Connection