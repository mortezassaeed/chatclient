import MessageContainer from "./MessageContainer";
import SendMessageForm from './SendMessageForm';

const Chat = ({messages, sendMessage}) => <div>

    <div className="chat">
        <MessageContainer messages={messages} />
        <SendMessageForm sendMessage={sendMessage}></SendMessageForm>
    </div>
</div>

export default Chat;