import React, { useState } from 'react';
import Modal from 'react-modal';
import './App.css';

Modal.setAppElement('#root')
function App() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	return (
		<div className="App">
			<button className='modal-btn' onClick={() => setModalIsOpen(true)}>Open Modal</button>
			<Modal
				isOpen={modalIsOpen} 
				onRequestClose={() => setModalIsOpen(false)}
				style={
					{
						overlay: {
							backgroundColor: 'lightgrey', // Add background color of blurred canvas
						},
						content: {
							color: 'black' // Add color of content
						}
					}
				}>


				<h2>Title Goes Here</h2>
				<p>Body Content Goes Here</p>
				<div>
					<button className='modal-btn' onClick={() => setModalIsOpen(false)}>Close Modal</button>
				</div>
			</Modal>
		</div>
	);
}

export default App;
