const form = document.getElementById("form");
const responseModal = document.getElementById("responseModal");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const datos = new FormData(form);
  fetch("send.php", {
    method: "POST",
    body: datos
  })
  .then(res => res.json())
  .then(data => {
    if(data === "error"){
      responseModal.innerHTML = `
        <div class="alert alert-danger" role="alert">
          Error al enviar los datos 🤷‍♀️.
        </div>
      `;
      setTimeout(() => {
        responseModal.innerHTML = "";
      }, 2000);
    } else {
      responseModal.innerHTML = `
        <div class="alert alert-success" role="alert">
          ${data}
        </div>
      `;
    }
    form.reset();
  })
});