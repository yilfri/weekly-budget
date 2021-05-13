import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Pregunta = ({ setPresupuesto, setRestante, setActualizarUI }) => {
	const [cantidad, setCantidad] = useState(0);
	const [error, setError] = useState(false);

	// Evento que lee el presupuesto.
	const handleChange = (e) => {
		setCantidad(parseInt(e.target.value, 10));
	};

	// Evento que envia el presupuesto.
	const handleSubmit = (e) => {
		e.preventDefault();

		//Validar presupuesto
		if (cantidad <= 0 || isNaN(cantidad)) {
			setError(true);
			return;
		}

		setError(false);
		setPresupuesto(cantidad);
		setRestante(cantidad);
		setActualizarUI(false);
	};

	return (
		<>
			<h2>Coloca tu presupuesto</h2>
			{error ? <Error mensaje="El Presupuesto no es válido" /> : null}

			<form onSubmit={handleSubmit}>
				<input
					type="number"
					placeholder="Coloca tu presupuesto"
					className="u-full-width"
					onChange={handleChange}
				/>
				<input
					type="submit"
					value="Establecer Presupuesto"
					className="button-primary u-full-width"
				/>
			</form>
		</>
	);
};

Pregunta.prototype = {
	setPresupuesto: PropTypes.func.isRequired,
	setRestante: PropTypes.func.isRequired,
	setActualizarUI: PropTypes.func.isRequired
};

export default Pregunta;
