import React from 'react';

function ExperienceInfo({ formData, handleChange }) {
  return (
    <form className="row g-3">
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingAzienda" name="azienda" placeholder="Nome dell'azienda" value={formData.azienda} onChange={handleChange} required />
        <label htmlFor="floatingAzienda">Nome dell'azienda</label>
      </div>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingPosizione" name="posizione" placeholder="Titolo della posizione" value={formData.posizione} onChange={handleChange} required />
        <label htmlFor="floatingPosizione">Titolo della posizione</label>
      </div>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingResponsabilità" name="responsabilità" placeholder="Responsabilità" value={formData.responsabilità} onChange={handleChange} required />
        <label htmlFor="floatingResponsabilità">Principali responsabilità</label>
      </div>
      <div className="form-floating mb-3">
        <input type="date" className="form-control" id="floatingDataInizio" name="dataInizio" value={formData.dataInizio} onChange={handleChange} required />
        <label htmlFor="floatingDataInizio">Data inizio</label>
      </div>
      <div className="form-floating">
        <input type="date" className="form-control" id="floatingDataFine" name="dataFine" value={formData.dataFine} onChange={handleChange} required />
        <label htmlFor="floatingDataFine">Data fine</label>
      </div>
    </form>
  );
}

export default ExperienceInfo;