const lastname = document.querySelector("#lastname"),
  first_name = document.querySelector("#firstname"),
  email = document.querySelector("#email"),
  date = document.querySelector("#age"),
  btn = document.querySelector("#submit");

const People = {
  Name: "",
  firstName: "",
  dateOfBirth: 0,
};

const getData = () => {
  const { Name, dateOfBirth, firstName } = People;

  (People["Name"] = lastname.value),
    (People["firstName"] = first_name.value),
    (People["dateOfBirth"] = date.value);

  console.log(Name, dateOfBirth, firstName);

  localStorage.setItem("lastname", Name);
  localStorage.setItem("firstname", firstName);
  localStorage.setItem("dateOfBirth", dateOfBirth);
};

const printStorage = () => {
  if (localStorage.getItem("lastname") != null) {
    lastname.value = localStorage.getItem("lastname");
  }
  if (localStorage.getItem("firstname") != null) {
    first_name.value = localStorage.getItem("firstname");
  }
  if (localStorage.getItem("dateOfBirth") != null) {
    date.value = localStorage.getItem("dateOfBirth");
  }
};

btn.addEventListener("click", getData);

window.addEventListener("load", function () {
  printStorage();
  console.log("'Todos los recursos terminaron de cargar!");
});
