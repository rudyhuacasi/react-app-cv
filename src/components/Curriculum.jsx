import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import '../styles/Curriculum.css'

function Curriculum({ formData, onEdit }) {
  return (
    <div>
      <h2 className="text-center mb-4">Riepilogo delle informazioni</h2>
      <ul className="list-group">
        <li className="list-group-item"><strong>Nome:</strong> {formData.nome}</li>
        <li className="list-group-item"><strong>Email:</strong> {formData.email}</li>
        <li className="list-group-item"><strong>Telefono:</strong> {formData.telefono}</li>
        <li className="list-group-item"><strong>Scuola:</strong> {formData.scuola}</li>
        <li className="list-group-item"><strong>Titolo di studio:</strong> {formData.titoloStudio}</li>
        <li className="list-group-item"><strong>Data di studio:</strong> {formData.dataStudio}</li>
        <li className="list-group-item"><strong>Azienda:</strong> {formData.azienda}</li>
        <li className="list-group-item"><strong>Posizione:</strong> {formData.posizione}</li>
        <li className="list-group-item"><strong>Responsabilità:</strong> {formData.responsabilità}</li>
        <li className="list-group-item"><strong>Data inizio:</strong> {formData.dataInizio}</li>
        <li className="list-group-item"><strong>Data fine:</strong> {formData.dataFine}</li>
      </ul>

      <div className="text-center mt-4">
        <button onClick={onEdit} className="btn btn-warning">  
            <FontAwesomeIcon icon={faPenToSquare}  className='penna'/>
            <span className='mx-4'>Modifica</span>
        </button>
      </div>
    </div>
  );
}

export default Curriculum;
