import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import termsData from '../../mock/terms';
import Title from '../Title/Title';
// import { TermsContext } from '../../context/context';

const Terms = () => {
  const [terms, setTerms] = useState([]);

  useEffect(() => {
    setTerms([...termsData]);
  }, []);

  return (
    <section id="terms">
      <Container>
        <Fade bottom duration={1000} delay={500} distance="30px">
          <Title title="Termos de uso e serviço" />
          <p className="text-center">
            IMPORTANTE: ESTES TERMOS DE SERVIÇO REGULAM O USO DESTE SITE, DISPONIBILIZADO PELA
            EUPOIESE. AO ACESSÁ-LO, VOCÊ ATESTA SEU CONHECIMENTO E CONCORDÂNCIA COM ESTES TERMOS DE
            USO. ESTES TERMOS DE USO PODEM SER ALTERADOS A QUALQUER TEMPO E SEM AVISO. A UTILIZAÇÃO
            DESTE SITE APÓS ALTERAÇÕES IMPLICA EM SEU CONHECIMENTO E ACEITAÇÃO DAS MUDANÇAS. POR
            FAVOR, CONSULTE OS TERMOS DE USO ANTES DE CADA USO PARA AVERIGUAR MODIFICAÇÕES.
          </p>
          {terms.map((term) => {
            const { id, h, p } = term;
            return (
              <div key={id}>
                <h1>{h}</h1>
                <p>{p}</p>
              </div>
            );
          })}
        </Fade>
      </Container>
    </section>
  );
};

export default Terms;
