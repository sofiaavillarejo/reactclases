import {Component} from "react";
import HijoDeporte from "./HijoDeporte";

class PadreDeporte extends Component{
    //array estatico, por eso no le metemos en state
    deportes = ["baloncesto", "futbol", "volleyball", "poker", "petanca"];
    //necesitamos el método para dibujar el deporte hijo
    //recibiremos el deporte favorito seleccionado en dicho metodo
    mostrarFavorito = (deporteSeleccionado) => {
        //al pulsar, modifcamos el deporte favorito
        this.setState({
            favorito: deporteSeleccionado
        })
    }
    //creamos una variable state para mostrar el deporte seleccionado
    state = {
        favorito: ""
    }

    render(){
        return(
            <div>
                <h1 style={{color:"red"}}>Padre deporte</h1>
                <h4 style={{backgroundColor: "yellow"}}>Su deporte favorito es: {this.state.favorito}</h4>
                {
                    //recorremos todos los deportes y dibujamos etiquetas hijo por cada uno
                    this.deportes.map((deporte, index)=>{
                        return (<HijoDeporte key={index} nombre={deporte} mostrarFavorito={this.mostrarFavorito}/>) //la key es para que no de el error en consola
                        //mostrarFavorito no enviamos el método, enviamos la variable seleccionada
                    })
                }
            </div>
        )
    }
}
export default PadreDeporte;