function resumenPedido(productos) {
  return productos.map(p => `${p.nombre} - ${p.cantidad} unidades`).join("\n");
}
