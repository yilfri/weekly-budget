import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {
	const [presupuesto, setPresupuesto] = useState(0);
	const [restante, setRestante] = useState(0);
	const [actualizarUI, setActualizarUI] = useState(true);
	const [gastos, setGastos] = useState([]);
	const [gasto, setGasto] = useState({});
	const [crearGasto, setCrearGasto] = useState(false);

	// useEffect actualizador del Restante.

	useEffect(() => {
		if (crearGasto) {
			// Guardar nuevo Presupuesto
			setGastos([...gastos, gasto]);

			// Restar del presupuesto actual
			const presupuestoRestante = restante - gasto.cantidad;
			setRestante(presupuestoRestante);

			// Resetea el gasto a False
			setCrearGasto(false);
		}
	}, [gasto]);

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
								<Formulario setGasto={setGasto} setCrearGasto={setCrearGasto} />
							</div>

							<div className="one-half column">
								<Listado gastos={gastos} />

								<ControlPresupuesto presupuesto={presupuesto} restante={restante} />
							</div>
						</div>
					)}
				</div>
			</header>
		</div>
	);
}

export default App;
