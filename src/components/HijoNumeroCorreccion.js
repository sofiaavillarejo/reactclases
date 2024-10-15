import {Component} from "react";

class HijoNumeroCorreccion extends Component{

    sumarNumeroHijo = () => {
        //almaceno en la variable el numero que le paso por props en el padre al component hijo
        var numero = parseInt(this.props.numero);
        //a la funcion del padre de sumar, le paso el numero almacenado que es el del btn que hago click
        this.props.sumarNumero(numero);
    }

    render(){
        return(
            <div>
                {/* como sabemos que el padre envía algo llamado numero, lo recuperamos */}
                <h1>Hijo con el número: {this.props.numero}</h1>
                {/* al pulsar el btn, enviar num al padre */}
                <button onClick={this.sumarNumeroHijo}>Sumar {this.props.numero}</button>
            </div>
        )
    }
}
export default HijoNumeroCorreccion;