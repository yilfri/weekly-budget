import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './Formulario';

function App() {
	const [presupuesto, setPresupuesto] = useState(0);
	const [restante, setRestante] = useState(0);
	const [actualizarUI, setActualizarUI] = useState(true);

	return (
		<div className="container">
			<header>
				<h1>Gasto Semanal</h1>

				<div className="contenido contenido-principal">
					{actualizarUI ? (
						<Pregunta
							setPresupuesto={setPresupuesto}
							setRestante={setRestante}
							setActualizarUI={setActualizarUI}
						/>
					) : (
						<div className="row">
							<div className="one-half column">
								<Formulario />
							</div>
							<div className="one-half column">2</div>
						</div>
					)}
				</div>
			</header>
		</div>
	);
}

export default App;
