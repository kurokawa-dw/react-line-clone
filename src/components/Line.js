import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import {auth} from '../firebase.js'
import SingOut from './SingOut.js';
import {db} from '../firebase.js';
import SendMessage from './SendMessage.js';



const Line = () => {
	const [messages, setMessages] = useState([]);
	useEffect(() => {
		console.log(db.collection('messages'));


		db.collection('messages')
		.orderBy('createdAt')
		.limit(50)
		.onSnapshot((snapshot) => {
			// console.log(snapshot.docs)
			setMessages(snapshot.docs.map((doc) => {
				return doc.data();
			}))
		})
		// .onSnapshot((snapshot) => {
		// 	setMessages(snapshot.docs.map((doc) => doc.data()));
		// });
	}, []);

	return (
		<div>
			{console.log(messages)}
			{/* {console.log(messages[0])} */}
			<SingOut/>

			<div className='msgs'>
				{messages.map(({id,text,photoURL, uid}) => (
					<div>
						<div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent': 'received'}`}>
							<img src={photoURL} alt="" />
							<p>{text}</p>
						</div>
					</div>
				))}
			</div>

			<SendMessage />

		</div>
	)
}

export default Line