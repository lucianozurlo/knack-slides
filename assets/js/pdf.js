document.addEventListener("DOMContentLoaded", function () {
  const generateButton = document.getElementById("generate-pdf-btn");

  generateButton.addEventListener("click", async function () {
    const slides = document.querySelectorAll(".slide-wrapper");
    let images = [];

    for (let i = 0; i < slides.length; i++) {
      const slide = slides[i];
      const canvas = await html2canvas(slide, {
        width: 1920,
        height: 1080,
        scale: 1,
        useCORS: true,
      });
      const imgData = canvas.toDataURL("image/png");
      images.push(imgData);
    }

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [1920, 1080],
    });

    images.forEach((imgData, index) => {
      if (index !== 0) {
        pdf.addPage();
      }
      pdf.addImage(imgData, "PNG", 0, 0, 1920, 1080);
    });

    pdf.save("slides.pdf");
  });
});
