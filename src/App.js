import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import Lobby from './componenets/Lobby';
import Chat from './componenets/Chat';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';


const App = () => {
const [connection, setConnection] = useState()
const [messages, setMessages] = useState([]);

const joinRoom = async (user,room) =>
{
  try {
    const connection = new HubConnectionBuilder()
      .withUrl("http://localhost:5230/chat")
      .configureLogging(LogLevel.Information)
      .build();

    connection.on("ReceiveMessage", (user,message) => {

      setMessages(messages => [...messages, {user ,message }]);
    });

    await connection.start();
    await connection.invoke('joinRoom', {user,room});
    setConnection(connection);
  }
  catch (e){
    console.log(e);
  }
}

const sendMessage = async (message) => {
  try{
    await connection.invoke("SendMessage" , message);
  }catch(e)
  {
    console.log(e)
  }

}

return <div className='app'>
  <h2>MyChat</h2>
  <hr className='line' />
  {  
     !connection
     ?<Lobby joinRoom={joinRoom} />
     :<Chat messages={messages} sendMessage={sendMessage} />
  }
</div>


}

export default App;
