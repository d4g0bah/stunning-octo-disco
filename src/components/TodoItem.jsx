// TodoItem.js
import React from 'react';

export function TodoItem({ todo, cambiarEstado, borrarTarea }) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <span
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                onClick={() => cambiarEstado(todo.id)}
            >
                {todo.task} - {todo.etiqueta}
            </span>
            <button className="btn btn-danger" onClick={() => borrarTarea(todo.id)}>
                Borrar
            </button>
        </li>
    );
}