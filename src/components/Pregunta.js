import React from 'react';

const Pregunta = () => {
	return (
		<>
			<h2>Coloca tu presupuesto</h2>
			<form>
				<input type="number" placeholder="Coloca tu presupuesto" className="u-full-width" />
				<input type="submit" value="Enviar" className="button-primary u-full-width" />
			</form>
		</>
	);
};

export default Pregunta;
