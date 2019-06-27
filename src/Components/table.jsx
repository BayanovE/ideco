import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import TextField from '@material-ui/core/TextField';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import MyForm from './form.jsx'

/*const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));*/

const useStyles = makeStyles(theme => ({
  	paper: {
    	position: 'absolute',
    	width: 400,
    	backgroundColor: theme.palette.background.paper,
    	boxShadow: theme.shadows[5],
    	padding: theme.spacing(4),
    	outline: 'none',
	},
}));

export default function MyTable(props) {
	const [rows, setRows] = React.useState(props.tableRows);
	const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const handleOpen = () => {
    	setOpen(true);
  	};

	const handleClose = () => {
		setOpen(false);
	}

	const deleteRow = id => event =>{
		setRows(rows.filter(item => item.id != id));
	}

	const saveData = data => {
		debugger;
		setRows([...rows, {
			id:rows.length,
			name: data.name,
			email: data.email,
			phone: data.phone,
			adress: data.adress
		}]);
		handleClose();
	}

	return(
		<div>
			<Button onClick={handleOpen}>add</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle id="scroll-dialog-title">Добавить</DialogTitle>
        		<DialogContent>
          			<DialogContentText>
						
						<MyForm saveData={saveData} inputs={{name:'имя', email:'e-mail',  phone:'телефон', adress: 'адресс'}} />
          			</DialogContentText>
        		</DialogContent>
        		<DialogActions>

          			<Button onClick={handleClose} color="primary">
           				Отмена
          			</Button>
        		</DialogActions>
		    </Dialog>
			<Paper>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>id</TableCell>
							<TableCell>ФИО</TableCell>
							<TableCell>e-mail</TableCell>
							<TableCell>телефон</TableCell>
							<TableCell>адресс</TableCell>
							<TableCell></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
							{

								rows.map(item =>{
									return(<TableRow key={item.id} >
										<TableCell>{item.id}</TableCell>
										<TableCell>{item.name}</TableCell>
										<TableCell>{item.email}</TableCell>
										<TableCell>{item.phone}</TableCell>
										<TableCell>{item.adress}</TableCell>
										<TableCell>
											<IconButton onClick={deleteRow(item.id)}>
										        <DeleteIcon />
										    </IconButton>
										</TableCell>
									</TableRow>)
								})
							}
					</TableBody>
				</Table>
			</Paper>
		</div>      
	)

}
