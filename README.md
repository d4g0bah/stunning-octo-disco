# Todo List con Filtros y Etiquetas

Este es un proyecto de lista de tareas (Todo List) construido con React que incluye funcionalidades para agregar, filtrar, etiquetar y eliminar tareas.

## Características

- **Agregar Tareas**: Puedes agregar nuevas tareas con etiquetas.
- **Filtrar Tareas**: Filtra tareas por etiquetas y búsqueda por texto.
- **Cambiar Estado**: Marca las tareas como completadas o no completadas.
- **Eliminar Tareas**: Elimina tareas de la lista.
- **Resumen de Tareas**: Muestra el número de tareas pendientes.

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/todo-list-filtros-etiquetas.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd todo-list-filtros-etiquetas
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

4. Inicia la aplicación:
    ```bash
    npm start
    ```

## Estructura del Proyecto

src/
├── components/
│ ├── Filter.js
│ ├── TodoItem.js
│ └── TodoList.js
├── App.js
└── index.js


### Componentes

- **TodoList**: Componente principal que maneja el estado de las tareas, filtros y etiquetas.
- **TodoItem**: Componente que representa una tarea individual con opciones para cambiar su estado y eliminarla.
- **Filter**: Componente que maneja el filtrado de tareas por etiquetas y búsqueda de texto.

## Uso

- **Agregar Tarea**: Escribe una tarea en el campo de entrada, selecciona una etiqueta (opcional) y haz clic en el botón de agregar.
- **Filtrar Tareas**: Usa el campo de búsqueda para filtrar tareas por texto. Selecciona una etiqueta del desplegable para filtrar por etiquetas.
- **Cambiar Estado**: Haz clic en una tarea para marcarla como completada o no completada.
- **Eliminar Tarea**: Haz clic en el botón "Borrar" junto a una tarea para eliminarla.
- **Resumen de Tareas**: La aplicación muestra el número de tareas pendientes en la parte inferior.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del proyecto.
2. Crea una rama para tu nueva funcionalidad (`git checkout -b nueva-funcionalidad`).
3. Realiza los cambios necesarios y haz commit (`git commit -am 'Agrega nueva funcionalidad'`).
4. Sube tus cambios a tu rama (`git push origin nueva-funcionalidad`).
5. Crea un Pull Request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
