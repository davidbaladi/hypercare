import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
} from 'graphql';

import data from '../data/mockChatData.json';

const SenderType = new GraphQLObjectType({
    name: 'Sender',
    fields: () => ({
        id: { type: GraphQLString },
        username: { type: GraphQLString },
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString },
    }),
});

const LastMessageType = new GraphQLObjectType({
    name: 'LastMessage',
    fields: () => ({
        id: { type: GraphQLInt },
        message: { type: GraphQLString },
        dateCreated: { type: GraphQLString },
        sender: { type: SenderType },
    }),
});

const MembersType = new GraphQLObjectType({
    name: 'Members',
    fields: () => ({
        id: { type: GraphQLString },
        firstname: { type: GraphQLString },
    })
})

const ChatItemType = new GraphQLObjectType({
    name: 'ChatItem',
    fields: () => ({
        id: { type: GraphQLString },
        type: { type: GraphQLString },
        title: { type: GraphQLString },
        dateCreated: { type: GraphQLString },
        image: { type: GraphQLString },
        lastMessage: { type: LastMessageType },
        members: { type: GraphQLList(MembersType) }
    }),
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        ChatItems: {
            type: new GraphQLList(ChatItemType),
            resolve() {
                return data.data.chats.chats;
            },
        },
        ChatItem: {
            type: ChatItemType,
            args: { id: { type: GraphQLString } },
            resolve(_, args) {
                return data.data.chats.chats.find(chat => chat.id === args.id);
            },
        },
        sender: {
            type: SenderType,
            args: { id: { type: GraphQLString } },
            resolve(_, args) {
                return data.data.chats.chats.find(chat => chat.lastMessage.sender.id === args.id);
            },
        },
    },
});

const schema = new GraphQLSchema({
    query: RootQuery,
});

export default schema;