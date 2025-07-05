import './Tarjeta.css';

function Tarjeta() {
    // Definición de información estática de la tarjeta
    const nombre = "Isaac Luviano";
    const profesion = "Estudiante de Desarrollo Web";
    const mensaje = "¡Bienvenido a mi tarjeta de presentación!";

    // Retornar JSX que representa a la tarjeta
    return (
        //Los atributos en JSX se escriben con sintaxis de objeto en Javascript (style={{ propiedad: 'valor' }})
        <div className='tarjeta'>
            {/* JSX permite incrustar variables en HTML utilizando llaves {}*/ }
            <h2>{nombre}</h2>
            <h4>{profesion}</h4>
            <p>{mensaje}</p>
        </div>
    );
}

export default Tarjeta;