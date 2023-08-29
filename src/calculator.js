class totalizarventas{
    MostrarCantItem(cantidad)
    {
        return cantidad;
    }
    MostrarPrecioItem(precio)
    {
        return precio;
    }
    mostrarEstado(estado)
    {
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
    ObtenerImpuestoPorEstado(total,estado) {
        return this.mostrarEstado(estado)*total;
     }
     MostrarPrecioNeto(precio, cantidad)
     {
        return precio*cantidad;
     }
     PrecioTotal(precio,cantidad,estado)
     {
        const a= this.MostrarPrecioNeto(precio,cantidad);
        const b= this.mostrarEstado(estado);
        return (a*b)+a;
     }
}
export default totalizarventas;