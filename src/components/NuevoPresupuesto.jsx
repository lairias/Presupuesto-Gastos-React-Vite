import {useState} from 'react';
import {Mensaje} from './Mensaje'

export default function NuevoPresupuesto({
  presupuesto,
  set_presupuesto,
  set_validPresupuesto,
}) {
  //State
  const [mensaje, set_mensaje] = useState("");

  //Funciones
  const handlePresupuesto = (e) => {
    e.preventDefault();
    if (!presupuesto || presupuesto < 0) {
      set_mensaje("Valor insertado invalido");
      return;
    }
    set_mensaje("");
    set_validPresupuesto(true)
  };
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label htmlFor="">Definir presupuesto</label>
          <input
            type="number"
            className="nuevo-presupuesto"
            placeholder="Añade el presupuesto"
            value={presupuesto}
            onChange={(e) => {
              set_presupuesto(Number(e.target.value));
            }}
          />
        </div>
        <input type="submit" value="Añadir" />
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
}
