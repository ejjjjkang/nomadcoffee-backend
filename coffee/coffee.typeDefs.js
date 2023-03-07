import { gql } from "apollo-server"

export default gql`
type Movie {
    id: Int!
    title: String!
    year: Int!
    genre: String
    createAt: String!
    updatedAt: String!
},
type Query {
    movies: [Movie]
    movie(id: Int!): Movie
}
type Mutation{
    createMovie (title: String!) : Boolean
    deleteMovie (title: String!) : Boolean
   
}
`
