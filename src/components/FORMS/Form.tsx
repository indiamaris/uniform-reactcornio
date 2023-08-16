/** @format */
// import React, { FormEvent, useRef, useState } from 'react';
import React, { FormEvent } from 'react';
import './form.css';
import { FieldValues, useForm } from 'react-hook-form';
import z from 'zod';

const schema = z.object({
	name: z.string().min(3, { message: 'The name is required, my friend.' }),
	inputEmail: z.string().email({ message: 'Darling, the email is required' }),
	inputPwd: z
		.string()
		.regex(
			/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
			{ mesage: 'Please, honey, think in a stronger password.' }
		),
});

type FormData = z.infer<typeof schema>;

// interface FormData {
// 	name: string;
// 	email: string;
// 	pwd: string;
// }

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
					<label htmlFor='NameLabel'>Your name </label>
					<input
						{...register('name')}
						id='inputName'
						type='string'
						className='form-control text-center m-2'
						aria-describedby='namelHelp'
						placeholder='Enter your namindy'
					/>

					{/* {errors.name?.type === 'minLength' && (
						<div>
							<p className='text-danger'>
								message:The name is too short, sweet.
							</p>
							<small className='text-warning'>
								message:If this is your real name,please ask
								your mother to change it!
							</small>
						</div>
					)} */}
				</div>

				<div className='email mb-4'>
					<label htmlFor='EmailLabel'>Your emailindy address</label>
					<input
						{...register('inputEmail')}
						id='inputEmail'
						type='email'
						className='form-control text-center m-2'
						aria-describedby='emailHelp'
						placeholder='Enter your @gmaris'
					/>
					<small
						id='emailHelp'
						className='form-text .text-info'>
						We'll promise we maybe never share your email with
						anyone else.
					</small>

					{/* {errors.inputEmail?.type === 'required' && (
						<p className='text-danger'>
							message: Darling, the email is required
						</p>
					)} */}
				</div>

				<div className='senha m-2'>
					{/* aqui o cmapo da  senhax */}
					<label htmlFor='PasswordLabel'>Your passworind</label>
					<input
						{...register('inputPwd')}
						// onChange={(e) =>
						// 	setPersonalData({
						// 		...personalData,
						// 		pwd: e.target.value,
						// 	})
						// }
						// value={personalData.pwd}

						type='password'
						className='form-control  text-center m-2'
						id='inputPassword'
						placeholder='Password'
					/>

					{/* {errors.inputPwd?.type === 'required' && (
						<p className='text-danger'>
							message: Honey, the password is required.{' '}
						</p>
					)}

					{errors.inputPwd?.type === 'required' && (
						<p>
							message:Your password has just few characters. You
							can do better.
						</p>
					)}

					{errors.inputPwd?.type === 'pattern' && (
						<p className='text-danger'>
							Please, honey, think in a stronger password.{' '}
						</p>
					)} */}
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

// 							required: true,
// 							minLength: 3,
// })}

// 'inputEmail', {
// 							required: true,
// 							minLength: 3,
// }

// inputPwd', {
// 							required: true,
// 							minLength: 4,
// 							pattern:
// 								/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
// 						}

