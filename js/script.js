function calcularCompra() {
            const juguete = document.getElementById("juguetes").value;
            const precioUnitario = obtenerPrecioUnitario(juguete);
            const cantidad = parseInt(document.getElementById("cantidad").value);

            const importeCompra = precioUnitario * cantidad;
            let descuento = 0;
            if (cantidad < 10) {
                descuento = 3.5;
            } else if (cantidad >= 10 && cantidad <= 20) {
                descuento = 7;
            } else {
                descuento = 9.5;
            }

            const totalPagar = importeCompra - (importeCompra * (descuento / 100));

            document.getElementById("jugueteSeleccionado").textContent = juguete;
            document.getElementById("precioUnitario").textContent = precioUnitario.toFixed(2);
            document.getElementById("cantidadSeleccionada").textContent = cantidad;
            document.getElementById("importeCompra").textContent = importeCompra.toFixed(2);
            document.getElementById("porcentajeDescuento").textContent = descuento.toFixed(1);
            document.getElementById("totalPagar").textContent = totalPagar.toFixed(2);
        }

        function obtenerPrecioUnitario(juguete) {
            switch (juguete) {
                case "monopolio":
                    return 70.99;
                case "ajedrez":
                    return 78.99;
                case "lego":
                    return 100.99;
                case "dama":
                    return 58.50;
                case "laberinto":
                    return 35.00;
                default:
                    return 0;
            }
        }