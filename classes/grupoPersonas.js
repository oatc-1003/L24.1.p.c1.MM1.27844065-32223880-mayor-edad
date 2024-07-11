export default class GrupoPersonas{
    constructor(){
        this.contPersonas=0;
        this.contMayoresEdad=0;
    }

    procesarPersona(persona){
        this.contPersonas++

        if(persona.edad>=18){
            this.contMayoresEdad++
        }

    }


    porcentajeMayoresEdad(){
        return ((this.contMayoresEdad/this.contPersonas) * 100).toFixed(2)
    }


}