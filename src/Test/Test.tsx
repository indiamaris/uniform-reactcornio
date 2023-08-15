/** @format */

import React, { useState } from 'react';

export default function Test() {
	const [tags, setTags] = useState(['feliz', 'fofo', 'Alegre']);

	return;
	<>
		console.log({tags})
		<div>{tags} </div>;
	</>;
}

