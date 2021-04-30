require('dotenv').config()
const {ApolloServer} = require('apollo-server')
const CasesAPI = require('./datasources/CasesAPI')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        CasesAPI: new CasesAPI()
    })
})

server.listen().then(() => {
    console.log(`
    Server is running!
    Listening on port 4000
    Explore at https://studio.apollographql.com/dev
    `)
})