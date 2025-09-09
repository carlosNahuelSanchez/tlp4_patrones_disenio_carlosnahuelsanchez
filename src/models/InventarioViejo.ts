class InventarioViejo {
    private items: { nombre: string; tipo: string; estado: string }[] = [];

    agregarItem(nombre: string, tipo: string, estado: string): void {
        this.items.push({ nombre, tipo, estado });
    }

    obtenerItems(): { nombre: string; tipo: string; estado: string }[] {
        return this.items;
    }
}

class AdaptadorInventario {
    private inventarioViejo: InventarioViejo;

    constructor(inventarioViejo: InventarioViejo) {
        this.inventarioViejo = inventarioViejo;
    }

    agregarEquipo(nombre: string, tipo: string, estado: string): void {
        this.inventarioViejo.agregarItem(nombre, tipo, estado);
    }

    listarEquipos(): { nombre: string; tipo: string; estado: string }[] {
        return this.inventarioViejo.obtenerItems();
    }
}

const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);

adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
adaptador.agregarEquipo("Notebook HP", "Portátil", "en reparación");

console.log(adaptador.listarEquipos());
