const mongoose = require('mongoose')

const URL = '@cursonodejs.k66k1no.mongodb.net/database?retryWrites=true&w=majority'

const connectToDatabase = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}${URL}`)
    .then(console.log('Conexão efetuada com sucesso'))
    .catch(error => {
        console.log('Ocorreu um erro ao relizar a conexão! Erro: ', error)
    })
}

module.exports = connectToDatabase