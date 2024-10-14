import {Component} from "react";

class HijoNumero extends Component{

    sumarNumero = () => {
        //almaceno en la variable el numero que le paso por props en el padre al component hijo
        var numero = this.props.numero;
        //a la funcion del padre de sumar, le paso el numero almacenado que es el del btn que hago click
        this.props.sumarNumero(numero);
    }
    render(){
        return(
            <div>
                <h1>Hijo con el número: {this.props.numero}</h1>
            {/* al hacer click, coge la funcion pasada por props en el padre y 
            le pasamos el valor del num que contiene el btn y realiza la suma */}
                <button onClick={this.sumarNumero}>Sumar {this.props.numero}</button>
            </div>
        )
    }
}
export default HijoNumero;