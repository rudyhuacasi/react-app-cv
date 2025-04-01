import React from 'react';
import '../styles/EducationInfo.css'

function EducationInfo({ formData, handleChange }) {
  return (
    <form className="row g-3">
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingScuola" name="scuola" placeholder="Nome della scuola" value={formData.scuola} onChange={handleChange} required />
        <label htmlFor="floatingScuola">Nome della scuola</label>
      </div>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingTitolo" name="titoloStudio" placeholder="Titolo di studio" value={formData.titoloStudio} onChange={handleChange} required />
        <label htmlFor="floatingTitolo">Titolo di studio</label>
      </div>
      <div className="form-floating">
        <input type="date" className="form-control" id="floatingDataStudio" name="dataStudio" value={formData.dataStudio} onChange={handleChange} required />
        <label htmlFor="floatingDataStudio">Data di studio</label>
      </div>
    </form>
  );
}

export default EducationInfo;
