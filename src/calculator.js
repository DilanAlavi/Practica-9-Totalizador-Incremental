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
    mostrarPorcentajeDesc(Descuento){
        if(Descuento>=1000&& Descuento<3000)
        {
            return 0.03;
        }
        else if (Descuento>=3000&&Descuento<7000)
        {
            return 0.05;
        }
        else if (Descuento>=7000&&Descuento<10000)
        {
            return 0.07;
        }
        else if (Descuento>=10000&&Descuento<30000)
        {
            return 0.1;
        }
        else if (Descuento>=30000)
        {
            return 0.15;
        }
        else{
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
     obtenerDescuento(total)
     {
        return this.mostrarPorcentajeDesc(total)*total;

     }
     PrecioTotal(precio,cantidad,estado)
     {
        const a= this.MostrarPrecioNeto(precio,cantidad);
        const b= this.mostrarEstado(estado);
        const c= this.obtenerDescuento(a);
        return ((a*b)+a)-c;
     }
}
export default totalizarventas;