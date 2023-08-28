import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_CHATS } from '../queries/queries';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import GroupsIcon from '@mui/icons-material/Groups';
import ListItem from './ListItem';

export interface Sender {
    id: string;
    username: string;
    firstname: string;
    lastname: string;
}

export interface LastMessage {
    id: number;
    message: string;
    dateCreated: string;
    sender: Sender;
}

export interface Member {
    id: string;
    firstname: string;
}

export interface ChatItem {
    id: string;
    type: string;
    title: string | null;
    dateCreated: string;
    // image: string | null;
    lastMessage: LastMessage;
    members: Member[];
}

interface ChatListData {
    ChatItems: [ChatItem]
}

interface Props {
    chatItem: string | null | undefined;
    setChatItem: React.Dispatch<React.SetStateAction<ChatItem | null>>;
}

const ChatList: React.FC<Props> = ({ chatItem, setChatItem: setChatItem }: Props) => {
    const { loading, error, data } = useQuery<ChatListData>(GET_ALL_CHATS);

    const chats = data?.ChatItems || [];

    const urls: string[] = [];
    for (let i = 1; i <= chats.length; i++) {
        const imageUrl = `https://picsum.photos/100/100?random=${i}`;
        urls.push(imageUrl);
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error?.message}</p>;

    // Sort chats from most recent to least recent
    const sortedChats = chats.slice().sort((a, b) => {
        const dateA = new Date(a.dateCreated).getTime();
        const dateB = new Date(b.dateCreated).getTime();
        return dateB - dateA;
    });

    return (
        <List component="nav" aria-label="main mailbox folders"
        // onBlur={() => setChatItem(null)}
        >
            {sortedChats.map((chat, index) => (
                <ListItemButton
                    key={chat.id}
                    selected={chatItem === chat.id}
                    onClick={() => setChatItem(chat)}
                >
                    <ListItemAvatar>
                        <Avatar src={chat.type === "single" ? urls[index] : ''}>
                            <GroupsIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItem chatItem={chat} />
                </ListItemButton>
            ))}
        </List>
    );
};

export default ChatList;
