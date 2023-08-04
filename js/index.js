let nombreUsuario = prompt("Bienvenido, para registrarse ingrese su nombre")

if(nombreUsuario != ""){
  alert("Bienvenido" + " " + nombreUsuario)
} else{
  alert("Usted no ha ingresado nada")
}

console.log(nombreUsuario)

let edad = parseInt(prompt("Por favor" + " " + nombreUsuario + ", " + "ingresa tu edad"))

if(edad >= 18){
  alert("Felicidades" + " " + nombreUsuario + " " + "su registro se realizo correctamente.")
} else if(edad < 18){
  alert("Usted no cumple con los requisitos para acceder al sitio")
} else if(isNaN(edad)){
  alert("Usted no ingreso un numero valido")
}

console.log(edad)

for (let i = 1; i <= 10; i++) {
let nombreturno = prompt("Ingrese su nombre para sacar un turno")
console.log(nombreturno + ", usted tiene el numero"+ " " + i)
}

let corte = prompt("Elija entre corte o corte con barba");

while (corte != "ESC") {
  switch (corte) {
    case "corte":
      alert("Usted eligio corte");
      break;
    case "corte y barba":
      alert("Usted eligio corte y barba");
      break;
    default:
      alert("Perdon, no entendí")
      break;
  }
  corte = prompt("Elija entre corte o corte con barba")
}


const turnosLibres = [
  { hora: '09:00', cliente: null },
  { hora: '10:00', cliente: null },
  { hora: '11:00', cliente: null },
  { hora: '12:00', cliente: null },
  { hora: '13:00', cliente: null },
  { hora: '14:00', cliente: null },
  { hora: '15:00', cliente: null },
  { hora: '16:00', cliente: null },
  { hora: '17:00', cliente: null },
  { hora: '18:00', cliente: null }
];

function mostrarTurnosLibres() {
  console.log('Turnos libres:');
  turnosLibres.forEach((turno) => {
    if (turno.cliente === null) {
      console.log(turno.hora);
    }
  });
}

function reservarTurno(hora, cliente) {
  const turnoEncontrado = turnosLibres.find((turno) => turno.hora === hora);

  if (turnoEncontrado) {
    if (turnoEncontrado.cliente === null) {
      turnoEncontrado.cliente = cliente;
      console.log("Turno reservado para " + cliente + "a las " + hora )
    } else {
      console.log("El turno a las " + hora + "ya está reservado.");
    }
  } else {
    console.log('Hora inválida. Por favor, elija una hora disponible.');
  }
}