import ListItemText from '@mui/material/ListItemText';
import Primary from './Primary';
import { ChatItem } from './ChatList';

interface Props {
    chatItem: ChatItem;
}

const ListItem = ({ chatItem }: Props) => {

    if (chatItem.title === null) {
        let memberFirstNames = chatItem.members.map(member => member.firstname.trim());
        if (memberFirstNames.length > 2) {
            let firstnames = `${memberFirstNames.map((firstname, index) => {
                if (index < 2) {
                    return firstname;
                }
            }).join(', ')} ...(${memberFirstNames.length - 2}) remaing`
            chatItem.title = firstnames
        } else {
            chatItem.title = memberFirstNames.join(', ');
        }
    }

    const prefix = chatItem.id === chatItem.lastMessage.sender.id ? "Me:" : `${chatItem.lastMessage.sender.firstname.trim().charAt(0).toUpperCase() + chatItem.lastMessage.sender.firstname.slice(1).trim()} :`;

    return (
        <ListItemText
            primary={
                <Primary title={chatItem.title} timeStamp={chatItem.dateCreated} />
            }
            secondary={`${prefix} ${chatItem.lastMessage.message}`}
            sx={{
                whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                '.MuiListItemText-secondary': { overflowX: 'auto' }
            }} />
    )
}

export default ListItem