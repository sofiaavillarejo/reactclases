import { Component } from "react";

class Comic extends Component {
    render(){
        return(
            <div>
                {/* recibimos el objeto con todas las propiedades y lo pintamos */}
                <h1>{this.props.comic.titulo}</h1>
                <p>{this.props.comic.descripcion}</p>
                <img src={this.props.comic.imagen} style={{width: "100px"}}></img>
                {/* creo aqui el metodo directamente siendo anonimo */}
                <button onClick={ () => {
                    this.props.seleccionarFavorito(this.props.comic);
                }}>Seleccionar favorito</button>
                <button onClick={ () => {
                    this.props.eliminarComic(this.props.index);
                }}>Eliminar Comic</button>
            </div>
        )
    }
}

export default Comic;