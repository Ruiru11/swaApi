import 'graphql-import-node'
import { makeExecutableSchema} from "graphql-tools"

import * as resolvers from "./resolvers/index";
import * as typeDefs from "./typeDef.graphql";


const schema  = makeExecutableSchema({
    typeDefs: [typeDefs],
    resolvers
})


export default schema
