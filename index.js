const downloadBtn = document.getElementById("dwnld-btn");

downloadBtn.addEventListener("click", () => {
  const element = this.document.getElementById("pdf");
  var opt = {
    margin: 1,
    filename: "Shifin-Resume-2023.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  html2pdf(element, opt);
});
