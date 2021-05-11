import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';

function App() {
	const [presupuesto, setPresupuesto] = useState(0);
	const [restante, setRestante] = useState(0);
	const [actualizarUI, setActualizarUI] = useState(true);
	const [gastos, setGastos] = useState([]);

	const agregarNuevoGasto = (gasto) => {
		setGastos([...gastos, gasto]);
	};

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
								<Formulario agregarNuevoGasto={agregarNuevoGasto} />
							</div>
							<div className="one-half column">
								<Listado gastos={gastos} />
							</div>
						</div>
					)}
				</div>
			</header>
		</div>
	);
}

export default App;
