import React from 'react';
import '../styles/general-info.css'

function generalInfo({ formData, handleChange }) {

  return (
    <>
    <form className="row g-3">
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingNome" name='nome' value={formData.nome} onChange={handleChange} placeholder="Password" required/>
            <label for="floatingNome">Nome</label>
        </div>
        <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" name='email' value={formData.email} onChange={handleChange} placeholder="name@example.com" required/>
            <label for="floatingInput">E-mail</label>
        </div>
        <div className="form-floating">
            <input type="tel" className="form-control" id="floatingTelefono" name='telefono' value={formData.telefono} onChange={handleChange}  placeholder="2015449634" maxLength="10" required pattern="[0-9]*" inputmode="numeric"/>
            <label for="floatingTelefono">Numero di telefono</label>
        </div>
        
    </form>
    </>
  )
}
export default generalInfo