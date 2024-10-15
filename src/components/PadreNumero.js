import {Component} from "react";
import HijoNumero from "./HijoNumero";

class PadreNumero extends Component{
    state = {
        listaNumeros: [],
        sumaTotal: 0
    }
    generarNumero = () => {
        var numero = parseInt(Math.random()*100) + 1;
        //añado al array el nuevo numero (lo concateno)
        this.setState({
            listaNumeros: this.state.listaNumeros.concat(numero)

            //todo:otra forma de hacerlo
            // listaNumeros: [...this.state.listaNumeros, numero]

        });
    }

    sumarNumero = (numero) => {
        console.log("Sumando numero:" + numero)
        this.setState({
            //actualizo el estado del numero sumandole al anterior, el nuevo numero
            sumaTotal: this.state.sumaTotal + numero
        });
    }

    render(){
        return(
            <div>
                <h1 style={{color:"red"}}>Padre Numeros</h1>
                <button onClick={this.generarNumero}>Nuevo Número</button>
                <h1 style={{color:"red"}}>La suma es: {this.state.sumaTotal}</h1>
                {
                    
                    this.state.listaNumeros.map((numero, index)=>{
                        //!{numero} se saca del map
                        return (<HijoNumero key={index} numero={numero} sumarNumero={this.sumarNumero}/>) 
                    })
                }
            </div>
        )
    }
}
export default PadreNumero;