import {Component} from "react";
import HijoNumeroCorreccion from "./HijoNumeroCorreccion";

class PadreNumeroCorreccion extends Component{
    //lo que quiero que vaya a cambiar, se pone en state
    state = {
        numeros: [5,11],
        suma: 0 //valor para que el dibujo cambie en la pagina
    }

    generarNumero = () => {
        var numero = parseInt(Math.random()*100) + 1;
        //coge los numeros y añade uno nuevo
        this.state.numeros.push(numero);
        //dibuja el nuevo numero porque actualiza el estado
        this.setState({
            numeros: this.state.numeros
        });
    }
    //necesito el valor para sumar el numero y el hijo lo envia
    sumarNumero = (valor) => {
        console.log("Sumando numero:" + valor)
        this.setState({
            //actualizo el estado del numero sumandole al anterior, el nuevo numero
            suma: this.state.suma + valor //el valor es cada uno de los elemenos que hagamos click en los hijos
        });
    }

    render(){
        return(
            <div>
                <h1 style={{color:"red"}}>Padre Numeros</h1>
                <h2 style={{backgroundColor: "yellow"}}>La suma es: {this.state.suma}</h2>
                <button onClick={this.generarNumero}>Nuevo Número</button>
                {
                    this.state.numeros.map((numero, index)=>{
                        //el padre envia al hijo aqui el numero
                        //adem,as cada hijo debe enviar el metodo del padre al hijo para que haga la suma
                        return (<HijoNumeroCorreccion key={index} numero={numero} sumarNumero={this.sumarNumero}/>) 
                    })
                }
            </div>
        )
    }
}
export default PadreNumeroCorreccion;