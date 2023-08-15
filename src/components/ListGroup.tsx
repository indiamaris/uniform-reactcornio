/** @format */
import { MouseEvent, useState } from 'react';
import '../App.css';
interface ListGroupProps {
	items: string[];
	heading: string;
	onSelecItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelecItem }: ListGroupProps) {
	const [selectedIndex, setSelectedIndex] = useState(-1);

	const getMesage = () => {
		return items.length === 0 ? (
			<p> NOOothing to see Here.</p>
		) : (
			<h1>{heading}</h1>
		);
	};

	const handleClick = (event: MouseEvent) => {
		console.log(event);
	};

	return (
		<div className='pinkpink'>
			{getMesage()}
			<ul className='list-group'>
				{items.map((city, index) => (
					<li
						id='pink'
						key={city}
						className={
							selectedIndex === index
								? 'bg-dark bg-gradient text-white list-group-item active m-2 '
								: 'bg-dark bg-gradient text-white m-2 list-group-item'
						}>
						{city}
						<button
							className='btn btn-sm btn-warning m-2'
							onClick={() => {
								setSelectedIndex(index);
								onSelecItem(city);
							}}>
							Click to select {city} as your favorite {heading}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default ListGroup;

