import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Generatepdf from "./Generatepdf";
import '../styles/Curriculum.css'


function Curriculum({ formData, onEdit, onReset }) {
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
        <li className="list-group-item"><strong>Profilo professionale:</strong> {formData.profilo}</li>
        {formData.immaggine && (
          <li className="list-group-item">
            <strong>Immagine:</strong>
            <div className="mt-2 text-center">
              <img src={formData.immaggine} alt={formData.immaggine} style={{ maxWidth: '200px' }} />
            </div>
          </li>
        )}
      </ul>

      <div className="text-center mt-4">
        <button onClick={onEdit} className="btn btn-warning">
            <FontAwesomeIcon icon={faPenToSquare} className='penna'/>
            <span className='mx-4'>Modifica</span>
        </button>
        <button onClick={onReset} className=" ms-4 btn btn-danger">
            <FontAwesomeIcon icon={faTrash} className='trash'/>
            <span className='mx-4'>Cancella tutto</span>
        </button>
      </div>
      <div className="text-center mt-4">
        <button onClick={() => Generatepdf(formData)}>
            Scarica PDF
        </button>
      </div>
    </div>
  );
}

export default Curriculum;
