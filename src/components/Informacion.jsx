const Informacion = ({anioActualProps, comision}) => {
  //aqui va la logica del componente
  return (
    //puedo poner un poco de logica
    <>
      <h2>Conceptos de React {comision}</h2>
      <section>
        {/*aqui va todo el maquetado */}
        <p>
          React es una biblioteca de JavaScript desarrollada por Facebook que se
          utiliza para construir interfaces de usuario interactivas en
          aplicaciones web. Fue lanzada en 2013 y se ha vuelto muy popular en la
          comunidad de desarrollo web. <br/> comision:{anioActualProps}
        </p>
      </section>
    </>
  );
};

export default Informacion;
