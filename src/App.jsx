import { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Title from './components/title'
import GeneralInfo from './components/general-info'
import EducationInfo from './components/EducationInfo'
import ExperienceInfo from './components/ExperienceInfo'
import Curriculum from './components/Curriculum'


function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    scuola: '',
    titoloStudio: '',
    dataStudio: '',
    azienda: '',
    posizione: '',
    responsabilità: '',
    dataInizio: '',
    dataFine: '',
    immaggine:'',
    profilo:'',
  });

  const [error, setError] = useState('');

  // Validazione prima di andare avanti
  const validateStep = () => {
    if (step === 1) {
      if (!formData.nome || !formData.email || !formData.telefono || !formData.profilo) {
        setError('⚠ Compila tutti i campi');
        return false;
      }
    } else if (step === 2) {
      if (!formData.scuola || !formData.titoloStudio || !formData.dataStudio) {
        setError('⚠ Compila tutti i campi');
        return false;
      }
    } else if (step === 3) {
      if (!formData.azienda || !formData.posizione || !formData.responsabilità || !formData.dataInizio || !formData.dataFine || !formData.immaggine) {
        setError('⚠ Compila tutti i campi');
        return false;
      }
    }
    setError(''); // cancella error
    return true;
  };

  // inizare a andare avanti con la validazione
  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  //tornare indietro  senza la validazione
  const prevStep = () => {
    setStep(step - 1);
  };

  // validazione prima di inviare
  const invio = () => {
    if (validateStep()) {
      setStep(4);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          immaggine: reader.result, // in base64
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    if (e.target.name !== 'immaggine') {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };
  return (
    <>
      <Title />
      <div className="container my-5  p-5 border border-secondary rounded-4 box">
        {error && <p className="text-danger text-center">{error}</p>}
        {step === 1 && <GeneralInfo formData={formData} handleChange={handleChange} />}
        {step === 2 && <EducationInfo formData={formData} handleChange={handleChange} />}
        {step === 3 && <ExperienceInfo formData={formData} handleChange={handleChange} handleImageChange={handleImageChange}/>}
        {step === 4 && <Curriculum formData={formData} onEdit={() => setStep(1)} />}

          <div className="d-flex justify-content-between mt-5">
            {step > 1 && step < 4 && (
              <button onClick={prevStep}>
                  <div className="svg-wrapper-1">
                      <div className="svg-wrapper">
                      <FontAwesomeIcon icon={faArrowLeft} className="arrow-icon"/>
                      </div>
                  </div>
                  <span>Indietro</span>
              </button>    
            )}
            {step < 3 && (
              <button onClick={nextStep}>
                <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                    <FontAwesomeIcon icon={faArrowRight} className="arrow-icon"/>
                    </div>
                </div>
                <span>Avanti</span>
              </button>
            )}
          {step === 3 && (
            <button onClick={invio} className="invia">Invia</button>
          )}
              
          </div>

      </div>
    </>
  )
}

export default App