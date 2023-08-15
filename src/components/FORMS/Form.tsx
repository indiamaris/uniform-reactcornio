/** @format */
// import React, { FormEvent, useRef, useState } from 'react';
import React, { FormEvent } from 'react';
import './form.css';
import { FieldValue, useForm } from 'react-hook-form';
function Form() {
	const { register, handleSubmit } = useForm();
	

	// const emailRef = useRef<HTMLInputElement>(null);
	// const pwdRef = useRef<HTMLInputElement>(null);
	// const [personalData, setPersonalData] = useState({ email: '', pwd: '' });
	// const handleSubmit = (event: FormEvent) => {
	// 	event.preventDefault();
	// 	console.log(personalData);
	// };

	// Um simples exemplo de handle Subimiti com detalhe de passar os nulls nos refis
	// const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
	// 	event.preventDefault();
	// 	if (emailRef.current !== null)
	// 	personalData.email = emailRef.current.value;

	// 	if (pwdRef.current !== null)
	// 		personalData.pwd = pwdRef.current.value;
	// 	console.log(personalData)
	// };

	return (
		<>
			<form
				onSubmit={handleSubmit(({ data: FieldValues }) =>
					console.log(data)
				)}>
				<div className='container card p-5 d-flexflex-column m-4 align-content-center text-center'>
					<div className='form-group text-center m-4'>
						{/* email formularindia */}
						<div className='email m-2'>
							<label htmlFor='EmailLabel'>
								Your mail address @gmaris
							</label>

							<input
								{...register('emailInput', {
									required: true,
									minLength: 3,
								})}
								// onChange={(e) =>
								// 	setPersonalData({
								// 		...personalData,
								// 		email: e.target.value,
								// 	})}
								// 		value={personalData.email}
								// ref={emailRef}
								type='email'
								className='form-control text-center m-2'
								id='InputEmail'
								aria-describedby='emailHelp'
								placeholder='Enter your indiamail'>
								{<p>The email is required</p>}
								</input>
						</div>

						<small
							id='emailHelp'
							className='form-text .text-info'>
							We'll promise we never share your email with anyone
							else.
						</small>

						<div className='senha m-2'>
							{/* aqui o cmapo da  senhax */}
							<label htmlFor='PasswordLabel'>Password</label>
							<input
								// onChange={(e) =>
								// 	setPersonalData({
								// 		...personalData,
								// 		pwd: e.target.value,
								// 	})
								// }
								// value={personalData.pwd}
								// ref={pwdRef}
								{...register('pwd')}
								type='password'
								className='form-control  text-center m-2'
								id='inputPassword'
								placeholder='Password'></input>
							{/* ate aqui senha */}
						</div>

						{/* Check me out */}
						<input
							type='checkbox'
							className='form-check-input m-1'
							id='exampleCheck1'></input>

						<label
							className='form-check-label'
							htmlFor='exampleCheck1'>
							Check me out
						</label>
						{/* Check me out */}
					</div>

					<button
						m-2
						type='submit'
						className='btn btn-outline-primary m-5 p-2'>
						SUBMIT
					</button>
				</div>
			</form>
		</>
	);
}

export default Form;

