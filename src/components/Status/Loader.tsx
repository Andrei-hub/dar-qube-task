import React from 'react';
import { Spinner, Loading } from './Status.styled';

const Loader = () => (
	<Spinner>
		<Loading>
			<div> </div>
			<div> </div>
			<div> </div>
			<div> </div>
		</Loading>
	</Spinner>
);

export default Loader;
