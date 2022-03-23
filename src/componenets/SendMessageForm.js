import { InputGroup, Form, Button, FormControl } from "react-bootstrap";
import { useState } from "react";

const SendMessageForm = ({sendMessage}) => {

    const [message,setMessage] = useState('');

    return <Form onSubmit={ e => {
        e.preventDefault();
        sendMessage(message);
        setMessage('');
    }} >
        <InputGroup >
            <FormControl placeholder='message ...' 
                onChange={e => setMessage(e.target.value)} value={message} />
          
                <Button variant='primary' type='submit' 
                    disabled={!message}>send</Button>
      
        </InputGroup>
    </Form>
}

export default SendMessageForm;