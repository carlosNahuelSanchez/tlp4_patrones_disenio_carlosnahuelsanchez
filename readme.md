# Pasos para correr cada Patron de Diseño

Cada patrón de diseño tiene un script específico en el archivo `package.json`. A continuación se detallan los pasos para ejecutar cada uno:

1. **Singleton**:
   - Comando: `npm run singleton`
   - Descripción: Este comando ejecuta el archivo `src/models/Inventario.ts`, que implementa el patrón Singleton para gestionar un inventario de equipos.
2. **Factory Method**:
   - Comando: `npm run factory`
    - Descripción: Este comando ejecuta el archivo `src/models/EquipoFactory.ts`, que implementa el patrón Factory Method para crear diferentes tipos de equipos.
3. **Observer**:
   - Comando: `npm run observer`    
    - Descripción: Este comando ejecuta el archivo `src/models/Soporte.ts`, que implementa el patrón Observer para gestionar notificaciones de soporte técnico.
4. **Adapter**:
   - Comando: `npm run adapter`
    - Descripción: Este comando ejecuta el archivo `src/models/InventarioViejo.ts`, que implementa el patrón Adapter para adaptar una antigua clase de inventario a una nueva interfaz.