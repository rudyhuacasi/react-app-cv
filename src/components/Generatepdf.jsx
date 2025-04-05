import { jsPDF } from "jspdf";
import "jspdf-autotable";
import html2canvas from "html2canvas";

const Generatepdf = async (formData) => {
  const doc = new jsPDF("p", "mm", "a4");

  // il fondo blue
  doc.setFillColor(0, 102, 204);
  doc.rect(0, 0, 80, 297, "F");

  if (formData.immaggine) {
    try {
      // il contenetore  circolare
      const outerCircle = document.createElement("div");
      outerCircle.style.width = "200px";
      outerCircle.style.height = "200px";
      outerCircle.style.borderRadius = "50%";
      outerCircle.style.backgroundColor = "white";
      outerCircle.style.display = "flex";
      outerCircle.style.alignItems = "center";
      outerCircle.style.justifyContent = "center";
      outerCircle.style.position = "fixed";
      outerCircle.style.top = "50%";
      outerCircle.style.left = "50%";
      outerCircle.style.transform = "translate(-50%, -50%)";
      outerCircle.style.zIndex = "9999";

      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = formData.immaggine;
      img.style.width = "180px";
      img.style.height = "180px";
      img.style.borderRadius = "50%";
      img.style.objectFit = "cover";

      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });

      outerCircle.appendChild(img);
      document.body.appendChild(outerCircle);

      await new Promise((res) => setTimeout(res, 200));

      const canvas = await html2canvas(outerCircle, {
        useCORS: true,
        allowTaint: false,
        scale: 3,
        backgroundColor: null,
      });

      const imgData = canvas.toDataURL("image/png");

      // posizione della immagine
      doc.addImage(imgData, "PNG", 15, 9, 50, 50);

      document.body.removeChild(outerCircle);
    } catch (error) {
      console.error("Error al generar imagen circular:", error);
    }
  }

  generatePDFContent(doc, formData);
  doc.save(`${formData.nome || "CV"}_Curriculum.pdf`);
};

const generatePDFContent = (doc, formData) => {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(35);
  doc.setTextColor(0, 102, 204);
  const nameLines = doc.splitTextToSize(formData.nome || "Nome", 100);
  doc.text(nameLines, 90, 24);

  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text(`${formData.telefono}`, 90, 65);
  doc.text(`${formData.email}`, 90, 72);

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.text("PROFILO PROFESSIONALE", 10, 70);
  doc.setFontSize(12);
  doc.text(formData.profilo, 10, 80, { maxWidth: 60 });

  doc.setDrawColor(0, 102, 204);
  doc.line(80, 80, 200, 80);

  doc.setTextColor(0, 0, 0);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("ESPERIENZE PROFESSIONALI", 90, 90);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text(`${formData.azienda}`, 90, 100);
  doc.setFont("helvetica", "italic");
  doc.text(`${formData.posizione}`, 90, 110);
  doc.text(`Data di inizio: ${formData.dataInizio}`, 90, 120);
  doc.text(`Data di fine: ${formData.dataFine}`, 90, 130);
  doc.text(formData.responsabilità, 90, 140, { maxWidth: 100 });

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("ISTRUZIONE", 90, 160);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text(`${formData.scuola}`, 90, 170);
  doc.setFont("helvetica", "italic");
  doc.text(`${formData.titoloStudio}`, 90, 180);
  doc.setFont("helvetica", "normal");
  doc.text(formData.dataStudio, 90, 190);
};

export default Generatepdf;
