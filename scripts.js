const passwordInput = document.querySelector("#passwordInput");

passwordInput.addEventListener("input", function () {
  const password = this.value;

  const strengthIndicator = document.querySelector(
    "#password-strength-indicator"
  );

  const strengthText = document.querySelector("#password-strength-text");

  const strengths = {
    1: "Muito fraca",
    2: "Fraca",
    3: "Moderada",
    4: "Forte",
    5: "Muito Forte",
  };

  let score = 0;

  // Requisitos
  if (password.length >= 8) score++;
  if (password.match(/[a-z]/)) score++;
  if (password.match(/[A-Z]/)) score++;
  if (password.match(/[0-9]/)) score++;
  if (password.match(/[^a-zA-Z0-9]/)) score++;

  //  Calculo da %, pq a largura vai ser em %
  const width = (score / 5) * 100;

  strengthIndicator.style.width = `${width}%`;




  switch (score) {
  
    case 1:
      strengthIndicator.style.backgroundColor = "#FF0000";
      break;
    case 2:
      strengthIndicator.style.backgroundColor = "#FF6347";
      break;
    case 3:
      strengthIndicator.style.backgroundColor = "#FFA500";
      break;
    case 4:
      strengthIndicator.style.backgroundColor = "#008000";
      break;
    case 5:
        strengthIndicator.style.backgroundColor = "#006400";
      break;

    default:
      strengthIndicator.style.backgroundColor = "transparent";
      break;
  }


  if (password.length > 0) {
    strengthText.innerHTML = `Força: ${strengths[score]}`;
  } else{
    strengthText.innerHTML = "";
  }
});