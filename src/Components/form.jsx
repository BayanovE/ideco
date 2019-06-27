import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';




export default function MyForm(props) {
	const [state, setState] = React.useState(Object.keys(props.inputs).reduce((obj, item) =>{
			obj[item]='';
			return obj;
		}, {}));


	const changeHandle = name => event =>{
		let newState = {...state};

		newState[name] = event.target.value;
		setState(newState);
	}

	const submitHandle = event => {
    	event.preventDefault();
    	props.saveData(state);
  	};

	return(
		<form  autoComplete="off" onSubmit={submitHandle}>
			{Object.keys(props.inputs).map(item => 
				<TextField
			        id = {+item}
			        label = {props.inputs[item]}
			        defaultValue = ""
			        fullWidth
			        margin = "normal"
			        onChange = {changeHandle(item)}
			        required
			    />
			)}
			<Button type="submit" color="primary">
    			Сохранить
  			</Button>
		</form>
	)

}
