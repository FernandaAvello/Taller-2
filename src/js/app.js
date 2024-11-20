// Validaciones para prompt al ingresar datos del paciente
const validateEmail = (patientEmail) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(patientEmail);
};

const validatePhone = (patientPhone) => {
  return patientPhone.length === 9 && !isNaN(patientPhone);
};

document.getElementById('promptInfo').addEventListener('click', () => {
  let patientName = prompt("Por favor, ingrese su nombre");
  let patientLastName = prompt("Por favor, ingrese su apellido");
  let patientFullname = `${patientName} ${patientLastName}`;
  if (patientName === null || patientName === '' || patientLastName === null || patientLastName === '') {
    patientFullname = 'Paciente no identificado';
  }

  let patientEmail = prompt("Por favor, ingrese su email");
  let invalidEmail = !validateEmail(patientEmail);
  while (invalidEmail) {
    window.alert("El email ingresado no es válido. Intente nuevamente.");
    patientEmail = prompt("Por favor, ingrese su email nuevamente");
    invalidEmail = !validateEmail(patientEmail);
  }

  let patientPhone = prompt("Por favor, ingrese su teléfono. Recuerde que debe tener 9 dígitos");
  try {
    const numberPhone = parseInt(patientPhone);
    console.log(typeof numberPhone !== 'number');
    if (typeof numberPhone !== 'number') {
      throw new Error('El teléfono ingresado no es válido. Intente nuevamente.');
    }
    let invalidPhone = !validatePhone(patientPhone);
    while (invalidPhone) {
      window.alert("El teléfono ingresado no es válido. Intente nuevamente.");
      patientPhone = prompt("Por favor, ingrese su teléfono nuevamente");
      invalidPhone = !validatePhone(patientPhone);
    }
  }
  catch (error) {
    window.alert(error);
    patientPhone = prompt("Por favor, ingrese su teléfono nuevamente");
  }

  console.log(`Nombre del paciente: ${patientFullname}`);
  console.log(`Email del paciente: ${patientEmail}`);
  console.log(`Teléfono del paciente: ${patientPhone}`);

  window.alert(
    `Hola ${patientFullname}, gracias por registrarte. Te enviaremos un email a ${patientEmail} o te llamaremos al ${patientPhone} en caso de necesitar más información.`
  );
});

// Utilizo for para recorrer listado de Doctores de JSON y mostrarlos en la página web.
function listarDoctores() {
  fetch('./src/data/doctors.json')
    .then(response => response.json())
    .then(doctors => {
      const doctorsContainer = document.getElementById('doctores');
      doctorsContainer.innerHTML = '';
      for (let i = 0; i < doctors.length; i++) {
        const doctor = doctors[i];
        const doctorCard = `
          <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div class="card team__card mx-auto">
              <img src="./src/images/${doctor.image}" class="team__image" alt="doctor">
              <div class="card-body text-center">
                <h5 class="card-title">${doctor.name}</h5>
                <div class="card__chip">${doctor.specialty}</div>
                <p class="card-text">${doctor.description}</p>
              </div>
            </div>
          </div>
        `;
        doctorsContainer.innerHTML += doctorCard;
      }
    })
    .catch(error => console.error('Error fetching doctors:', error));
}

// Filtro para buscar por médicos con igual o más de 5 años de experiencia.
function showExperienceDoctors() {
  fetch('./src/data/doctors.json')
    .then(response => response.json())
    .then(doctors => {
      const doctorsContainer = document.getElementById('doctores');
      doctors = doctors.filter(doctor => doctor.years_of_experience >= 5);
      doctorsContainer.innerHTML = '';
      for (let i = 0; i < doctors.length; i++) {
        const doctor = doctors[i];
        const doctorCard = `
          <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div class="card team__card mx-auto">
              <img src="./src/images/${doctor.image}" class="team__image" alt="doctor">
              <div class="card-body text-center">
                <h5 class="card-title">${doctor.name}</h5>
                <div class="card__chip
                ">${doctor.specialty}</div>
                <p class="card-text">${doctor.description}</p>
              </div>
            </div>
          </div>
        `;
        doctorsContainer.innerHTML += doctorCard;
      }
    }
    )
    .catch(error => console.error('Error fetching doctors:', error));
}

const checkboxExperience = document.getElementById('checkYearsOfExperience');
checkboxExperience.addEventListener('change', (event) => {
  if (event.target.checked) {
    showExperienceDoctors();
  } else {
    listarDoctores();
  }
});

listarDoctores();
