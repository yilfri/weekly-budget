import React from 'react';

const Error = ({ mensaje }) => {
	return <p className="alert error alert-danger">{mensaje}</p>;
};

export default Error;
