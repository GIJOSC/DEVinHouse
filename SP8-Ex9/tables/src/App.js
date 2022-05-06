import React from "react";
import Table from "./Table";

function App() {
  const data = [
    { id: 1, event: "Curso de Java", comment: "Do Zero ao Profissional" },
    { id: 2, event: "Curso de React", comment: "Do Básico ao Avançado" },
    { id: 3, event: "Curso de Spring", comment: "Curso Completo 2022" },
    { id: 4, event: "Curso de PHP", comment: "Do Zero ao Profissional" },
    { id: 5, event: "Curso de Javascript", comment: "Do Básico ao Avançado" },
    { id: 6, event: "Curso de Python", comment: "Curso Completo 2022" }
  ]
  const head = {
    id: "Cógigo",
    event: "Curso",
    commentt: "Comentário"
  }
  
  return (
    <> 
     <div>
       <h1> Tabela de Cursos do DEVinHouse</h1>
       <h2>Parcerias para desenvolver a sua carreira</h2>
      </div>   
      <div>
         <Table data={data} head={head}/>
      </div>
      </>
  );  
}

export default App;
