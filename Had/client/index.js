const form = document.querySelector("form");

const sendDatas = async (e) => {
  e.preventDefault();

  const datas = new FormData(form);

  const lastName = datas.get("nom");
  const firstName = datas.get("prenom");
  const password = datas.get("password");
  const classe = datas.get("classe");
  const email = datas.get("email");
  const ecole = datas.get("ecole");
  const telephone = datas.get("telephone");
  const appointmentDate = datas.get("appointmentDate");
  const appointmentTime = datas.get("appointmentTime");

  const jsonDatas = {
    lastName,
    firstName,
    password,
    classe,
    email,
    ecole,
    telephone,
    appointmentDate,
    appointmentTime,
  };
  try {
    const response = await fetch("http://127.0.0.1:3000/api/addUser", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(jsonDatas),
    });

    if (!response.ok) {
      console.log(`Imposible d'ajouter qlq1`);
    }
    alert("Vos données sont envoyées");
  } catch (e) {
    console.log(`Impossible d'envoyer ${e.message}`);
  }
};

form.addEventListener("submit", sendDatas);
