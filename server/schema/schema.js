"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const mockChatData_json_1 = __importDefault(require("../data/mockChatData.json"));
const SenderType = new graphql_1.GraphQLObjectType({
    name: 'Sender',
    fields: () => ({
        id: { type: graphql_1.GraphQLString },
        username: { type: graphql_1.GraphQLString },
        firstname: { type: graphql_1.GraphQLString },
        lastname: { type: graphql_1.GraphQLString },
    }),
});
const LastMessageType = new graphql_1.GraphQLObjectType({
    name: 'LastMessage',
    fields: () => ({
        id: { type: graphql_1.GraphQLInt },
        message: { type: graphql_1.GraphQLString },
        dateCreated: { type: graphql_1.GraphQLString },
        sender: { type: SenderType },
    }),
});
const MembersType = new graphql_1.GraphQLObjectType({
    name: 'Members',
    fields: () => ({
        id: { type: graphql_1.GraphQLString },
        firstname: { type: graphql_1.GraphQLString },
    })
});
const ChatItemType = new graphql_1.GraphQLObjectType({
    name: 'ChatItem',
    fields: () => ({
        id: { type: graphql_1.GraphQLString },
        type: { type: graphql_1.GraphQLString },
        title: { type: graphql_1.GraphQLString },
        dateCreated: { type: graphql_1.GraphQLString },
        image: { type: graphql_1.GraphQLString },
        lastMessage: { type: LastMessageType },
        members: { type: (0, graphql_1.GraphQLList)(MembersType) }
    }),
});
const RootQuery = new graphql_1.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        ChatItems: {
            type: new graphql_1.GraphQLList(ChatItemType),
            resolve() {
                return mockChatData_json_1.default.data.chats.chats;
            },
        },
        ChatItem: {
            type: ChatItemType,
            args: { id: { type: graphql_1.GraphQLString } },
            resolve(_, args) {
                return mockChatData_json_1.default.data.chats.chats.find(chat => chat.id === args.id);
            },
        },
        sender: {
            type: SenderType,
            args: { id: { type: graphql_1.GraphQLString } },
            resolve(_, args) {
                return mockChatData_json_1.default.data.chats.chats.find(chat => chat.lastMessage.sender.id === args.id);
            },
        },
    },
});
const schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
});
exports.default = schema;
