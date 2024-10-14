import {Component} from "react";

class DibujosComplejos extends Component{
    //DIBUJAR UNA SERIE DE NUMEROS EN FORMATO HTML USANDO UN ARRAY CON <li>
    //creamos el metodo para dibujar
    dibujarNumeros = () => {
        //declaramos el array para almacenar el dibujo
        //dentro de los metodos, si declramos var, let...
        var lista = [];
        //realizamos bucle para rellenar numeros dinamicos
        for (var i =1; i<=7; i++){
            //creamos un numero aleatorio
            var numero = parseInt(Math.random()*100) + 1;
            //añadimos el numero creado al array
            lista.push(<li key={i}>{numero}</li>);
        }
        //hacer que el metodo devuelva la lista para que se pinte
        return lista;
    }

    render(){
        return(
            <div>
                <h1>Dibujos complejos HTML</h1>
                <ul>
                    {this.dibujarNumeros()}
                </ul>
            </div>
        )
    }
}
export default DibujosComplejos;