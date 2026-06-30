import "./App.css";
import Card from "./Cards/Cards";
import Ana from "./assets/Ana.png";
import Carlos from "./assets/Carlos.png";
import João from "./assets/João.png";
import Maria from "./assets/Maria.png";
import Thiago from "./assets/Thiago.png";
const pessoas = [

  { nome: "Thiago", cargo: "Desenvolvedor Front-End", imagem:Thiago },
  { nome: "Ana", cargo: "UX designer" , imagem:Ana},
  { nome: "Carlos", cargo: "Desenvolvedor Back-End", imagem:Carlos },
  { nome: "Maria", cargo: "QA", imagem:Maria },
  { nome: "João", cargo: "DevOps", imagem:João },
];

function App() {
  return (
    <>
      <div className="container">
      {pessoas.map((pessoa) => (
        <Card
          imagem={pessoa.imagem}
          key={pessoa.nome}
          nome={pessoa.nome}
          cargo={pessoa.cargo}
        />
       
      ))}
       </div>
    </>
  );
}

export default App;
