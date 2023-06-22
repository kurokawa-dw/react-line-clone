import React, { useState } from 'react';
import {db, auth} from '../firebase.js';
import firebase from 'firebase/compat/app';
import { Input } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const SendMessage = () => {
	const [message, setMessages] = useState('');
	const sendMessage = (e) => {
		e.preventDefault();

		// ログインしているgoogleアカウントからuidとphotoURLを取得、そんなことできるんだ、すげー
		const {uid,photoURL} = auth.currentUser;

		db.collection('messages').add({
			text: message,
			photoURL,
			uid,
			createdAt: firebase.firestore.FieldValue.serverTimestamp()
		});

		setMessages('');
	}


	return (

		<div>
			<form onSubmit={sendMessage}>
				<div className='sendMsg'>
					<Input
					style={{
						width: "78%",
						fontSize: "15px",
						fontWeight: "550",
						marginLeft: "5px",
						marginBottom: "-3px",
					}}
					type="text" placeholder='メッセージを入力してください'
					onChange={(e) => setMessages(e.target.value)}
					value={message}
					/>

					<SendIcon style={{ color: "#7AC2FF", marginLeft: "20px" }} onClick={sendMessage}/>



				</div>
			</form>
		</div>
	)
}

export default SendMessage