import { Button } from '@mui/material';
import React from 'react';
import firebase from 'firebase/compat/app';
import {auth} from '../firebase.js';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

const SingOut = () => {

	// console.log(auth);

	return (
		<div className='header'>
			<Button style={{color: 'white', fontSize: '15px'}} onClick={() => auth.signOut()}>サインアウト</Button>
			<h3>{auth.currentUser.displayName}</h3>
			<AddIcCallIcon/>
		</div>
	)
}

export default SingOut