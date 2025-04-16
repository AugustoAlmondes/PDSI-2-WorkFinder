import React from 'react';
import './InfoJob.css';  // Estilos específicos da tela

const InfoJob = () => {
  return (
    <main className="jobforms">
      <div className="infojob">
        <h1>Informações da <span>Vaga</span></h1>
      </div>

      <div className="display-job-info">
        <h3>Informações Principais</h3>
        <div className="job-info-2">
          <p><span>Descrição:</span> Desenvolvimento de aplicações web</p>
          <p><span>Benefícios:</span> Vale alimentação, home office</p>
        </div>
      </div>

      <div className="display-job-info">
        <h3>Informações Adicionais</h3>
        <div className="job-info">
          <p><span>Empresa:</span> Tech Solutions</p>
          <p><span>Título:</span> Desenvolvedor Front-End</p>
          <p><span>Habilidades:</span> React, JavaScript, CSS</p>
          <p><span>Local:</span> São Paulo - SP</p>
          <p><span>Tipo de Contrato:</span> CLT</p>
          <p><span>Modalidade:</span> Remoto</p>
          <p><span>Quantidade de Vagas:</span> 2</p>
          <p><span>Área de Atuação:</span> Tecnologia da Informação</p>
          <p><span>PCD:</span> Não</p>
          <p><span>CNH:</span> B</p>
          <p><span>Salário:</span> R$ 5.000,00</p>
        </div>
      </div>

      <button className="candidatar">Candidatar</button>
    </main>
  );
};

export default InfoJob;
