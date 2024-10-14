import {Component} from "react";

class DibujosComplejosReactRender extends Component{
    //en state tendremos un conjunto de nombres 
    state = {
        nombres: ["Lucia", "Adrian", "Antonia", "Diana", "Sofia", "Carlos"]
    }
    //metodo para generar un nombre
    generarNombre = () => {
        this.state.nombres.push("Nuevo nombre");
        //actualizamos state
        this.setState({
            nombres: this.state.nombres
        });
    }

    render(){
        return(
            <div>
                <h1>Dibujos complejos react Collection</h1>
                {/* btn para generar nuevo nombre */}
                {/* Tambien se le puede llamar al metodo asi
                () => this.generarNombre() Y ES LO MISMO!!!! */}
                <button onClick={this.generarNombre}>Generar nombre</button>
                {
                    //ESTO ES CODIGO REACT, ES DISTINTO AL JS
                    //ES CODIGO LOGICO CON SINTAXIS JSX
                    //EL CODIGO LOGICO DEBE CONTENER RETURN
                    this.state.nombres.map((name, index) => {
                        //este codigo nunca debe estar vacio, siempre tiene que devolver un return
                        return (
                            <h1 key={index} style={{color:"blue"}}>{name}</h1>
                        )
                    })
                }
            </div>
        )
    }
}
export default DibujosComplejosReactRender;