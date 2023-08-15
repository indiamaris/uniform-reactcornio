/** @format */
import uni from './uni.svg';
import unib from './unib.png';
const Heading = () => {
	return (
		<h1
			style={{ fontSize: '50px' }}
			className='m-2 p-1'>
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

