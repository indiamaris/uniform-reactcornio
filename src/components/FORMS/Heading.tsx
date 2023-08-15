/** @format */
import uni from './uni.svg';
import unib from './unib.png';
const Heading = () => {
	return (
		<h1
			style={{ fontSize: '70px' }}
			className='m-4 p-2'>
			<img
				src={unib}
				alt='nicorni'
			/>
			LETS LOGIN{' '}
			<img
				src={uni}
				alt='nicorni'
			/>
		</h1>
	);
};

export default Heading;

