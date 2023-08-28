import { gql } from '@apollo/client';

export const GET_ALL_CHATS = gql`
query ChatItems{
    ChatItems{
      id
      type
      title
      dateCreated
      image
      lastMessage{
        id
        message
        dateCreated
        sender{
          id
          username
          firstname
          lastname
        }
      }
      members{
        id
        firstname
      }
    }
  }
`;

