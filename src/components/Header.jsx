import NuevoPresupuesto from "./NuevoPresupuesto";
export const Header = ({
    presupuesto, set_presupuesto,
    ValidPresupuesto, set_validPresupuesto }) =>
{
    return (
      <header>
        <h1>Planificador de Gastos</h1>
        {ValidPresupuesto ? (
          "presupuesto"
        ) : (
          <NuevoPresupuesto
            presupuesto={presupuesto}
            set_presupuesto={set_presupuesto}
            set_validPresupuesto={set_validPresupuesto}
          />
        )}
      </header>
    );
}
