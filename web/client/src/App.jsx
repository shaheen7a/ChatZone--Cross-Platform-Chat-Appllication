import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import ChannelListContainer from "./components/ChannelListContainer.jsx"
import ChannelContainer from "./components/ChannelContainer.jsx"
import "./App.css"
import Auth from './components/Auth.jsx';
const apiKey = '42aeb97tb8mg'

const client = StreamChat.getInstance(apiKey);

const authToken = false;

function App() {

  if(!authToken) return <Auth />
  return (
    <div className='app__wrapper'>
      <Chat client={client} theme='team light'>
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  )
}

export default App
