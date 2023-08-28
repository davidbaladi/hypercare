import React from 'react'
import { ChatItem } from './ChatList'
import { Grid } from '@mui/material'

interface Props {
    chatItem: ChatItem | null
}

const Display = ({ chatItem }: Props) => {

    if (chatItem === null) {
        return <h1>Click Any Chat Item</h1>
    }
    return (
        <div>
            <h1>Chat Details</h1>
            <h3>{chatItem.title}</h3>
            <div>
                {`id: ${chatItem.id}`}
            </div>
            <div>
                {`type: ${chatItem.type}`}
            </div>
            <div>
                {`# members: ${chatItem.members.length}`}
            </div>
            <div>
                {`last message: ${chatItem.lastMessage.message}`}
            </div>
            <div>
                {`date created: ${chatItem.dateCreated}`}
            </div>
        </div>
    )
}

export default Display;