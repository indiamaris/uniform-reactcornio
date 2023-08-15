/** @format */
// import React, { FormEvent, useRef, useState } from 'react';
import React, { FormEvent } from 'react';
import './form.css';
import { FieldValues, useForm } from 'react-hook-form';

function Form() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data: FieldValues) => console.log(data);

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
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className='container card p-5 d-flexflex-column m-4 align-content-center text-center'>

					<div className='name mb-4'>
						<label htmlFor='NameLabel'>Your mail name here</label>
						<input
							{...register('name', {
								required: true,
								minLength: 3,
							})}
							id='inputName'
							type='name'
							className='form-control text-center m-2'
							aria-describedby='namelHelp'
							placeholder='Enter your namindy'
						/>

						{errors.name?.type === 'required' && (
							<p>The name is required</p>
						)}
						{errors.name?.type === 'minLength' && (
							<div>
								<p>The name is too short</p>
								<small
									id='nameHelp'
									style={{ fontSize: '12px' }}>
									If this is your real name,please ask your
									mother to change it!
								</small>
							</div>
						)}
					</div>

					<div className='email mb-4'>
						<label htmlFor='EmailLabel'>
							Your mail address @gmaris
						</label>
						<input
							{...register('inputEmail', {
								required: true,
								minLength: 3,
							})}
							id='inputEmail'
							type='email'
							className='form-control text-center m-2'
							aria-describedby='emailHelp'
							placeholder='Enter your indiamail'
						/>

						<small
							id='emailHelp'
							className='form-text .text-info'>
							We'll promise we never share your email with anyone
							else.
						</small>
					</div>

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
							placeholder='Password'
						/>
					</div>

					<div className='checkbox'>
						<input
							type='checkbox'
							className='form-check-input m-1'
							id='exampleCheck1'
						/>

						<label
							className='form-check-label'
							htmlFor='exampleCheck1'>
							Check me out
						</label>
					</div>

					<div className='btnx'>
						<button
							type='submit'
							className='btn btn-outline-primary m-4 p-2 w-25'>
							SUBMIT
						</button>
					</div>
				</div>

		</form>
	);
}

export default Form;

// {console.log(errors)}
// onChange={(e) =>
// 	setPersonalData({
// 		...personalData,
// 		email: e.target.value,
// 	})}
// 		value={personalData.email}

// ref={emailRef}








