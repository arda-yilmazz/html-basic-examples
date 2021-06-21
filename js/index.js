{
  let buttons = document.querySelectorAll("button") 

  function notification(msg) {
    let old_div = document.querySelector(".alert") 

    if (old_div) {
      old_div.parentNode.removeChild(old_div) 
    }
    let alert = document.createElement("div") 
    alert.innerHTML = msg 
    alert.className = "alert" 
    document.body.appendChild(alert) 

    setTimeout(() => alert.classList.add("active"), 1) 
    setTimeout(() => alert.classList.remove("active"), 1000) 
    setTimeout(() => alert.parentNode.removeChild(alert), 2000) 
  }

  buttons.forEach((button) =>
    button.addEventListener("click", (e) => {
      let buttonValue = e.currentTarget.innerHTML 

      notification(buttonValue) 
    })
  ) 
}
