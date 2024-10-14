//IMPORTAR Component PARA LA HERENCIA
import { Component } from "react";

//todo: PODEMOS DECLARAR METODOS FUERA DE LA CLASE Y ESTOS,
//todo: NO PUEDEN UTILIZAR NADA DEL Component -> se declaran con function
function metodoExterno() {
    console.log("Function externa de la clase");
}
class Contador extends Component{
    /*LAS VARIABLES Y METODOS SE DECLARAN FUERA DEL RENDER
    Y NO SE UTILIZAN PALABRAS CLAVE COMO var, let o const */
    numero = 1;

    //LOS METODOS SE DECLARAN AQUI
    incrementarNumero = () => {
        //PARA ACCEDER A LAS VARIABLES DE LA CLASE,
        //DEBEMOS USAR this
        this.numero = this.numero + 1;
        console.log("Valor del numero: " + this.numero);
    }
    //vamos a declarar una variable de estado que tendra el valor de props
    //estas son las que deseamos que sean cambiadas en el dibujo (pagian web)
    state = {
        valor: parseInt(this.props.inicio) //este es inicio, que se le pasa en index.js por props
    }
    //metodo para cambiar el valor del state
    incrementarValoraState = () => {
        //para modificar los elementos que tengamos dentro de state, se usa setState
        //con un JSON del objeto con las variables que deseemos modificar
        //las variables que no modifiquemos, no cambiaran 
        this.setState({
            valor: this.state.valor + 1
        });
    }

    render() {
        return(
            <div>
                <h1>Class Component Contador</h1>
                <h2 style={{color: "blue"}}>Inicio del contador: {this.props.inicio}</h2>
                <h2 style={{color: "red"}}>Valor del state: {this.state.valor}</h2>
                {/* LA LLAMADA A LOS METODOS ES MAS SENCILLO-> NO NECESITAMOS LAMBDA NI PARENTESIS */}
                <button onClick={this.incrementarValoraState}>Incrementar state</button>
                {/* VAMOS A USAR UNA FUNCION ANONIMA PARA LLAMAR A UN METODO */}
                <button onClick={ () => {
                    //SI DESEAMOS LLAMAR A UN METODO DE LA CLASE, SE USA this
                    this.incrementarNumero();
                    //!para llamar a un metodo externo del component, no se usa this, se le llama directamente
                    metodoExterno();
                }}>incrementar numero</button>
            </div>
        )
    }
}
export default Contador;