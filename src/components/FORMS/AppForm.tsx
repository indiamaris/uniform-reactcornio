/** @format */

import Form from './Form';
import Heading from './Heading';

const AppForm = () => {
	return (
		<div
			className=' d-flex justify-content-center

			align-items-center'>
			<div className='container d-flex flex-column m-1 align-content-center justify-content-center text-center'>
				<Heading />
				<Form />
			</div>
		</div>
	);
};

export default AppForm;

