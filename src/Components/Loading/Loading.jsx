import './Style/Loading.modules.scss';
import React from 'react';

import { BallTriangle } from  'react-loader-spinner';

const Loading = () => {
	return(
		<>
			<section className='loadingContainer'>
				<BallTriangle wrapperClass="myLoading" color="#4e68f9" visible={true} height={100} width={100} ariaLabel="ball-triangle-loading" />
			</section>
		</>		
	)
};

export default Loading;