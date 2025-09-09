class Inventario {
    private static instance: Inventario;
    private equipos: { nombre: string; tipo: string; estado: string }[] = [];

    private constructor() {}

    public static obtenerInstancia(): Inventario {
        if (!Inventario.instance) {
            Inventario.instance = new Inventario();
        }
        return Inventario.instance;
    }

    public agregarEquipo(nombre: string, tipo: string, estado: string): void {
        this.equipos.push({ nombre, tipo, estado });
    }

    public listarEquipos(): void {
        this.equipos.forEach(equipo => {
            console.log(`Equipo: ${equipo.nombre}, Tipo: ${equipo.tipo}, Estado: ${equipo.estado}`);
        });
    }
}

// Ejemplo de uso
console.log("Singleton | Ejemplo de Uso:");
const inventario = Inventario.obtenerInstancia();
inventario.agregarEquipo("Laptop", "Electrónico", "Nuevo");
inventario.agregarEquipo("Proyector", "Electrónico", "Usado");
inventario.listarEquipos();