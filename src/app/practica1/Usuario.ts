export class Usuario{
    nombre: string;
    apellidos: string;
    telefono: string;
    correo: string;
    edad: string;
    sexo: string;
    icono: string;
    private arregloIconos: Array<string> = new Array<string>('fa-apple','fa-deviantart','fa-github-alt','fa-facebook','fa-google','fa-tumblr','fa-steam','fa-youtube','fa-usb','fa-snapchat');

    constructor(nombre, apellidos, telefono, correo, edad, sexo){
        this.nombre = nombre ;
        this.apellidos = apellidos ;
        this.telefono = telefono ;
        this.correo = correo ;
        this.edad = edad ;
        this.sexo = sexo ;
        this.iconoRandom();
    }

    iconoRandom(){
        this.icono = this.arregloIconos[Math.floor(Math.random()*10)];
    }
}