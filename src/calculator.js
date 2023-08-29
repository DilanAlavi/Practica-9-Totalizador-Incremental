class totalizarventas{
    MostrarCantItem(cantidad)
    {
        return cantidad;
    }
    MostrarPrecioItem(precio)
    {
        return precio;
    }
    ObtenerImpuestoPorEstado(estado) {
        switch (estado) {
          case "UT":
            return 0.0665;
          case "NV":
            return 0.08;
          case "TX":
            return 0.0625;
          case "AL":
            return 0.04;
          case "CA":
            return 0.0825;
          default:
            return 0;
        }
     }
}
export default totalizarventas;