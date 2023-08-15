/** @format */
import { useState } from 'react';
import AlertII from './AlertII';
import './App.css';
// import Test from './Test/Test';
import ListGroup from './components/ListGroup';
import Alert from './components/alert';
var cities = ['New York', 'London', 'Brusque'];
var people = ['Ana', 'Ian', 'Suian'];

function App() {
	const [tags, setTags] = useState(['feliz', 'fofo', 'Alegre']);
	const newTags = ['amado', 'delicado', 'limpo'];
	let [index, setIndex] = useState(0)


	var handleClick = () => {
		
		let newTag = newTags[index];
		setTags([...tags, newTag]);
		console.log(newTag);
		let newIndex: number = index+1
		setIndex(newIndex)
		{console.log(index)}
	};

	const handleDelete = () => { 
		const tagx = [ ...tags ]
		tagx.shift()
		setTags(tagx)

		
	}

	return (
		<>
			{console.log({ tags })}
			<div>{tags} </div>
			<h1>madalena</h1>

			<button
				className='btn btn-lg btn-secondary m-2'
				onClick={handleClick}>
				Add Tag
			</button>

			<button
				className='btn btn-lg btn-warning m-2'
				onClick={handleDelete}>
				DLT Tag
			</button>
		</>
	);
}
// function App() {
// 	const text: string = 'madalena, madalena, vc eh meu bem querer';
// 	const handleSelectItem = () => {
// 		return (
// 			<>
// 				console.log('bom dia')
// 				<ListGroup
// 					items={cities}
// 					heading='City'
// 					onSelecItem={handleSelectItem}
// 				/>
// 			</>
// 		);
// 	};
// 	return (
// 		<>
// 			<ListGroup
// 				items={cities}
// 				heading='City'
// 				onSelecItem={handleSelectItem}
// 			/>

// 			<ListGroup
// 				items={people}
// 				heading='People'
// 				onSelecItem={handleSelectItem}
// 			/>

// 			<Alert text={text} />

// 			<AlertII>
// 				<h1>ilaria</h1>
// 				<p>ah ah ah </p>
// 			</AlertII>
// 		</>
// 	);
// }

export default App;








