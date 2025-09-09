interface Equipo {
    nombre: string;
    ram: string;
    procesador: string;
    detalles(): string;
}

class Notebook implements Equipo {
    nombre: string;
    ram: string;
    procesador: string;

    constructor(nombre: string, ram: string, procesador: string) {
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador;
    }

    detalles(): string {
        return `Tipo: Notebook, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}


class Desktop implements Equipo {
    nombre: string;
    ram: string;
    procesador: string;

    constructor(nombre: string, ram: string, procesador: string) {
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador;
    }

    detalles(): string {
        return `Tipo: Desktop, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}


class Server implements Equipo {
    nombre: string;
    ram: string;
    procesador: string;

    constructor(nombre: string, ram: string, procesador: string) {
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador;
    }

    detalles(): string {
        return `Tipo: Server, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}

class EquipoFactory {
    public CrearEquipo(tipo: string, nombre: string, ram: string, procesador: string): Equipo | void {
        if (tipo === "notebook" ) {
            return new Notebook(nombre, ram, procesador);
        }
        if (tipo === "desktop") {
            return new Desktop(nombre, ram, procesador);
        }
        if (tipo === "server") {
            return new Server(nombre, ram, procesador);
        }
        console.log("Tipo de equipo no reconocido.");
        return;
    }
}

console.log("Factory Method | Ejemplo de Uso:");

const factory = new EquipoFactory();

const notebook = factory.CrearEquipo("notebook", "Dell XPS", "16GB", "i7");
const desktop = factory.CrearEquipo("desktop", "HP Pavilion", "8GB", "AMD Ryzen 5");
const server = factory.CrearEquipo("server", "Dell PowerEdge", "32GB", "Intel Xeon");

console.log(notebook?.detalles());
console.log(desktop?.detalles());
console.log(server?.detalles());