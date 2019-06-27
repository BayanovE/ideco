import React from 'react';
import logo from './logo.svg';
import MyTable from './Components/table.jsx'
import './App.css';

function App() {
	return (
		<div className="App">
			
			<MyTable tableRows = {[{id: 0, name: "Остап Берта Мария Сулейман Бендер-Бей", email:'mail', phone: '123456789', adress: 'Ни дом и не улица'}]}/>
		</div>
	);
}

export default App;
/*<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>*/