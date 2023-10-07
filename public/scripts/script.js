const select = document.querySelector("select");

  select.addEventListener("change", (event) => {
    window.location.href = "/"+event.target.value;
  });