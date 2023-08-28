import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import dotenv from 'dotenv';
import schema from './schema/schema';
const cors = require('cors');

dotenv.config();

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);

const port = process.env.PORT || 9001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});