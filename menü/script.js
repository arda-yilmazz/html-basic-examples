let buttons = document.querySelectorAll("ul.menu li");

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    buttons.forEach((button) => button.classList.remove("active"));
    e.currentTarget.classList.add("active");
    e.preventDefault();
  })
);

console.log(
  localStorage.setItem(
    "active",
    buttons.forEach((button) => button.innerHTML)
  )
);
