import mongoose from "mongoose"

const connectDB = (url) => {
    mongoose.set('strictQuery',true)

    mongoose.connect(url)
    .then(() => console.log("MongoDB connectado correctamente"))
    .catch((err) => console.log("Ups,ocorreu o seguinte erro:",err))
}

export default connectDB