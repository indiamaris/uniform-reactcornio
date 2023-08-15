/** @format */

interface Props {
	cartItems: string[];
	onDeleteAll: () => [];
	onAdd: () => String[];
}
function Cart({ cartItems, onDeleteAll, onAdd }: Props) {
	return (
		<>
			<div className='card text-center m-4 p-2'>
				<h1>Cart Shopping</h1>
			</div>
			<ul className='list-group '>
				{cartItems.map((item) => (
					<li
						className='list-group-item list-group-item-action'
						key={item}>
						<p>{item}</p>
					</li>
				))}
			</ul>
			<div className='d-flex justify-content-center'>
				<button
					className='btn btn-lg btn-danger m-5 p-4'
					onClick={onDeleteAll}>
					Limpar Carrinho
				</button>
			</div>
			<div className='d-flex justify-content-center'>
				<button
					className='btn btn-lg btn-success m-5 p-4'
					onClick={onAdd}>
					Add to Carrinho
				</button>
			</div>
		</>
	);
}

export default Cart;

