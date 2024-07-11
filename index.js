// 2. MAYORES DE EDAD
// Sea el nombre y la edad de varias personas. Se necesita un programa que lea estos datos y reporte al final el porcentaje de personas que son mayores de edad.
// Se tienen las siguientes personas: Luis (15), Ana (19), José (21), Carmen (17), Rosa (18), José (22), María (17), Luz (19), Rafael (23), Liz (15), Marcos (20) y Leo (16); la salida requerida presenta el siguiente formato:
// Cantidad de personas: 12
// Cantidad de personas mayor de edad: 7
// Porcentaje de personas mayor de edad: 58.33%

import GrupoPersonas from "./classes/grupoPersonas.js";
import Persona from "./classes/persona.js";

let _persona1=new Persona("Luis",15);
let _persona2=new Persona("Ana",19);
let _persona3=new Persona("Jose",21);
let _persona4=new Persona("Carmen",17);
let _persona5=new Persona("Rosa",18);
let _persona6=new Persona("Jose",22);
let _persona7=new Persona("Maria",17);
let _persona8=new Persona("Luz",19);
let _persona9=new Persona("Rafael",23);
let _persona10=new Persona("Liz",15);
let _persona11=new Persona("Marcos",20);
let _persona12=new Persona("Leo",16);

let _grupo=new GrupoPersonas()

_grupo.procesarPersona(_persona1)
_grupo.procesarPersona(_persona2)
_grupo.procesarPersona(_persona3)
_grupo.procesarPersona(_persona4)
_grupo.procesarPersona(_persona5)
_grupo.procesarPersona(_persona6)
_grupo.procesarPersona(_persona7)
_grupo.procesarPersona(_persona8)
_grupo.procesarPersona(_persona9)
_grupo.procesarPersona(_persona10)
_grupo.procesarPersona(_persona11)
_grupo.procesarPersona(_persona12)



document.body.innerHTML=`
<br>
Cantidad de personas: ${_grupo.contPersonas}
<br>
Cantidad de personas mayor de edad: ${_grupo.contMayoresEdad}
<br>
Porcentaje de personas mayor de edad: ${_grupo.porcentajeMayoresEdad()}% 


`