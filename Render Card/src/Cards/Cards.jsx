import "./Cards.css";
function Card({ nome, cargo, imagem }) {
  return (
  
      <div className="card">
        <img src={imagem} alt={nome} className="foto-perfil" />
        <div className="info">
        <h2 className="nome"> {nome} </h2>
        <p className="cargo"> {cargo}</p>
        </div>
      </div>

  );
}

export default Card;
