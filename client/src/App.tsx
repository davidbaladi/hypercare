import React from 'react';
import Layout from './components/Layout';
import ChatList, { ChatItem } from './components/ChatList';
import Display from './components/Display';

function App() {
  const [chatItem, setChatItem] = React.useState<ChatItem | null>(null);

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Layout >
        <ChatList chatItem={chatItem?.id} setChatItem={setChatItem} />
        <Display chatItem={chatItem} />
      </Layout>
    </div>
  );
}

export default App;