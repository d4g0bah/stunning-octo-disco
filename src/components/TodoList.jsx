import React, { Fragment, useEffect, useRef, useState } from "react";
import { TodoItem } from "./TodoItem";
import { v4 as uuid } from "uuid";

const KEY = "todoApp.todos"
export function TodoList() {
    const [todos, setTodos] = useState([]);

    const taskRef = useRef();

    useEffect(()=>{
        const storedTodos = JSON.parse(localStorage.getItem(KEY))
        if (storedTodos){
            setTodos(storedTodos)
        }
    }, [])
    useEffect (() => {
        localStorage.setItem(KEY, JSON.stringify(todos))
    }, [todos])

    const agregarTarea = () => {
        console.log("Agregando Tarea");
        const task = taskRef.current.value;
        const id = uuid();
        if (task === '') return;

        setTodos((prevTodos) => {
            const newTask = {
                id: id,
                task: task,
                completed: false
            };

            return [...prevTodos, newTask];
        });

        taskRef.current.value = null;
    };

    const cambiarEstadoTarea = (id) => {
        console.log("cambiar estado task " + id);
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id);
        todo.completed = !todo.completed;
        setTodos(newTodos);
    };

    const resumenTareas = () => {
        const tareasPendientes = todos.filter(todo => !todo.completed).length;
        if (tareasPendientes === 1) {
            return (
                <div className="alert alert-info">
                    Solamente queda una tarea por terminar
                </div>
            );
        }
        if (tareasPendientes === 0) {
            return (
                <div className="alert alert-success">
                    Felicitaciones, completaste todas tus tareas
                </div>
            );
        }
        return (
            <div className="alert alert-info">
                Quedan {tareasPendientes} tareas pendientes
            </div>
        );
    };    
const eliminarTareasCompletadas = () =>{
    const newTodos = todos.filter((todo)=>!todo.completed)
    setTodos(newTodos)
}
    return (
        <Fragment>
            <h1 className="alert alert-info">Listado de Tareas</h1>

            <div className="input-group mt-3 mb-3">
                <input ref={taskRef} type="text" placeholder="Agregar una tarea" className="form-control"></input>
                <button onClick={agregarTarea} className="btn btn-success">
                    <i className="bi bi-plus-circle"></i>
                </button>
                <button onClick={eliminarTareasCompletadas} className="btn btn-danger">
                    <i className="bi bi-trash"></i>
                </button>

            </div>

            <ul className="list-group mb-3">
                {todos.map((todo) => (
                    <TodoItem todo={todo} key={todo.id} cambiarEstado={cambiarEstadoTarea} />
                ))}
            </ul>
            {resumenTareas()}
        </Fragment>
    );
}