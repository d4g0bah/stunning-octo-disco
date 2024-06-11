import React, { Fragment, useRef, useState } from "react";
import { TodoItem } from "./TodoItem";
import { Filter } from "./Filter";
import { v4 as uuid } from "uuid";

export function TodoList() {
    const [todos, setTodos] = useState([]);
    const [etiquetas] = useState(["Trabajo", "Personal", "Urgente"]);
    const [selectedEtiqueta, setSelectedEtiqueta] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const taskRef = useRef();
    const etiquetaRef = useRef();

    const agregarTarea = () => {
        console.log("Agregando Tarea");
        const task = taskRef.current.value;
        const etiqueta = etiquetaRef.current.value;
        const id = uuid();
        if (task === '') return;

        setTodos((prevTodos) => {
            const newTask = {
                id: id,
                task: task,
                etiqueta: etiqueta,
                completed: false
            };

            return [...prevTodos, newTask];
        });

        taskRef.current.value = null;
        etiquetaRef.current.value = "";
    };

    const cambiarEstadoTarea = (id) => {
        console.log("cambiar estado task " + id);
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id);
        todo.completed = !todo.completed;
        setTodos(newTodos);
    };

    const borrarTarea = (id) => {
        console.log("borrar tarea " + id);
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };

    const resumenTareas = () => {
        const tareasPendientes = todos.filter(todo => !todo.completed).length;
        return (
            <div className="alert alert-info">
                Quedan {tareasPendientes} tareas pendientes
            </div>
        );
    };

    const filtrarTareas = () => {
        return todos.filter(todo => {
            return (
                (selectedEtiqueta === "" || todo.etiqueta === selectedEtiqueta) &&
                todo.task.toLowerCase().includes(searchQuery.toLowerCase())
            );
        });
    };

    return (
        <Fragment>
            <h1 className="alert alert-info">Listado de Tareas</h1>

            <div className="input-group mt-3 mb-3">
                <input ref={taskRef} type="text" placeholder="Agregar una tarea" className="form-control"></input>
                <select ref={etiquetaRef} className="form-select">
                    <option value="">Sin etiqueta</option>
                    {etiquetas.map((etiqueta, index) => (
                        <option key={index} value={etiqueta}>{etiqueta}</option>
                    ))}
                </select>
                <button onClick={agregarTarea} className="btn btn-success"> Enviar
                    <i className="bi bi-plus-circle"></i>
                </button>
            </div>

            <Filter
                etiquetas={etiquetas}
                selectedEtiqueta={selectedEtiqueta}
                setSelectedEtiqueta={setSelectedEtiqueta}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />

            <ul className="list-group mb-3">
                {filtrarTareas().map((todo) => (
                    <TodoItem todo={todo} key={todo.id} cambiarEstado={cambiarEstadoTarea} borrarTarea={borrarTarea} />
                ))}
            </ul>
            {resumenTareas()}
        </Fragment>
    );
}
