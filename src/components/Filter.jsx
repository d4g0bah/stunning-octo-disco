import React from "react";

export function Filter ({etiquetas, selectedEtiqueta, setSelectedEtiqueta, searchQuery, setSearchQuery  }){
    const handleEtiquetaChange = (event) => {
        setSelectedEtiqueta(event.target.value);
    };
    
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="mb-3">
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Buscar tareas"
                    className="form-control"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <select className="form-select" value={selectedEtiqueta} onChange={handleEtiquetaChange}>
                    <option value="">Todas las etiquetas</option>
                    {etiquetas.map((etiqueta, index) => (
                        <option key={index} value={etiqueta}>{etiqueta}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}