/** @format */

const EmailInput = () => {
	return (
		<>
			{/* email formularindia */}
			<div className='email m-2'>
				<label htmlFor='exampleInputEmail1'>
					Your mail address @gmaris
				</label>
				{/* aqui o input mesmo?Aler */}
				<input
					type='email'
					className='form-control text-center m-2'
					id='exampleInputEmail1'
					aria-describedby='emailHelp'
					placeholder='Enter your indiamail'></input>
			</div>

			<small
				id='emailHelp'
				className='form-text .text-info'>
				We'll promise we never share your email with anyone else.
			</small>
		</>
	);
};

export default EmailInput;
