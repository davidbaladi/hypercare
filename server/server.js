"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const dotenv_1 = __importDefault(require("dotenv"));
const schema_1 = __importDefault(require("./schema/schema"));
const cors = require('cors');
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
    schema: schema_1.default,
    graphiql: true,
}));
const port = process.env.PORT || 9001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
