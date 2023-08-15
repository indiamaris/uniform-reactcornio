/** @format */

import { ReactNode } from 'react';

/** @format */
interface Props {
	children: ReactNode;
}

const AlertII = ({ children }: Props) => {
	return <div className='alert alert-primary'>{children}</div>;
};




export default AlertII;

