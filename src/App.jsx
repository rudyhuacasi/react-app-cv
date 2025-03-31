// import { useState } from 'react'
import './App.css'
import Title from './components/title'
import GeneralInfo from './components/general-info'

// const GeneralInfo = ({ data, onEdit }) => {
//   return (
//     <div className="section">
//       <h2>Informazioni Generali</h2>
//       {data.isEditing ? (
//         <>
//           <input type="text" placeholder="Nome" value={data.name} onChange={(e) => onEdit("name", e.target.value)} />
//           <input type="email" placeholder="Email" value={data.email} onChange={(e) => onEdit("email", e.target.value)} />
//           <input type="tel" placeholder="Telefono" value={data.phone} onChange={(e) => onEdit("phone", e.target.value)} />
//           <button onClick={() => onEdit("isEditing", false)}>Invia</button>
//         </>
//       ) : (
//         <>
//           <p><strong>Nome:</strong> {data.name}</p>
//           <p><strong>Email:</strong> {data.email}</p>
//           <p><strong>Telefono:</strong> {data.phone}</p>
//           <button onClick={() => onEdit("isEditing", true)}>Modifica</button>
//         </>
//       )}
//     </div>
//   );
// };

// const Education = ({ data, onEdit }) => {
//   return (
//     <div className="section">
//       <h2>Esperienza Formativa</h2>
//       {data.isEditing ? (
//         <>
//           <input type="text" placeholder="Scuola" value={data.school} onChange={(e) => onEdit("school", e.target.value)} />
//           <input type="text" placeholder="Titolo di studio" value={data.degree} onChange={(e) => onEdit("degree", e.target.value)} />
//           <input type="text" placeholder="Data" value={data.date} onChange={(e) => onEdit("date", e.target.value)} />
//           <button onClick={() => onEdit("isEditing", false)}>Invia</button>
//         </>
//       ) : (
//         <>
//           <p><strong>Scuola:</strong> {data.school}</p>
//           <p><strong>Titolo di studio:</strong> {data.degree}</p>
//           <p><strong>Data:</strong> {data.date}</p>
//           <button onClick={() => onEdit("isEditing", true)}>Modifica</button>
//         </>
//       )}
//     </div>
//   );
// };

// const Experience = ({ data, onEdit }) => {
//   return (
//     <div className="section">
//       <h2>Esperienza Lavorativa</h2>
//       {data.isEditing ? (
//         <>
//           <input type="text" placeholder="Azienda" value={data.company} onChange={(e) => onEdit("company", e.target.value)} />
//           <input type="text" placeholder="Posizione" value={data.position} onChange={(e) => onEdit("position", e.target.value)} />
//           <input type="text" placeholder="Responsabilità" value={data.responsibilities} onChange={(e) => onEdit("responsibilities", e.target.value)} />
//           <input type="text" placeholder="Periodo" value={data.period} onChange={(e) => onEdit("period", e.target.value)} />
//           <button onClick={() => onEdit("isEditing", false)}>Invia</button>
//         </>
//       ) : (
//         <>
//           <p><strong>Azienda:</strong> {data.company}</p>
//           <p><strong>Posizione:</strong> {data.position}</p>
//           <p><strong>Responsabilità:</strong> {data.responsibilities}</p>
//           <p><strong>Periodo:</strong> {data.period}</p>
//           <button onClick={() => onEdit("isEditing", true)}>Modifica</button>
//         </>
//       )}
//     </div>
//   );
// };

// function App() {
//   const [generalInfo, setGeneralInfo] = useState({ name: "", email: "", phone: "", isEditing: true });
//   const [education, setEducation] = useState({ school: "", degree: "", date: "", isEditing: true });
//   const [experience, setExperience] = useState({ company: "", position: "", responsibilities: "", period: "", isEditing: true });

//   return (
//     <div className="container">
//       <h1>CV Builder</h1>
//       <GeneralInfo data={generalInfo} onEdit={(key, value) => setGeneralInfo((prev) => ({ ...prev, [key]: value }))} />
//       <Education data={education} onEdit={(key, value) => setEducation((prev) => ({ ...prev, [key]: value }))} />
//       <Experience data={experience} onEdit={(key, value) => setExperience((prev) => ({ ...prev, [key]: value }))} />
//     </div>
//   );
// }

// export default App;
function App() {

  return (
    <>
      <Title />
      <div className="container my-5  p-5 border border-light-subtle rounded-4">
        <GeneralInfo />

      </div>
    </>
  )
}

export default App
