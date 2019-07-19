import React from 'react';
import Project from '../../components/Project';
import imgGloboHistorias from '../../assets/images/projects/globo-historias/thumbnail.jpg';
import imgEntregaRapida from '../../assets/images/projects/entrega-rapida/thumbnail.jpeg';
import imgArthurAssuncaoSiteOld from '../../assets/images/projects/arthurassuncao-com2016/thumbnail-0.jpg';
import ProjectsStyle from './Projects.style';
import PropTypes from 'prop-types';
import { InferPropTypes } from '../../types';

const projectsDefaultProps = {

};

const projectsPropTypes = {
  sectionClassName: PropTypes.string.isRequired
};

type ProjectsProps = InferPropTypes<typeof projectsPropTypes, typeof projectsDefaultProps>;

const Projects = (props: ProjectsProps) => {

  return (
    <ProjectsStyle id="projects">
      <span className={props.sectionClassName}>Projects</span>
      <div className='projects-list'>
        <Project
          id={0}
          name={'Globo Histórias'}
          imgUrl={imgGloboHistorias}
          description={`Protótipo de Hackathon participante do Hackathon da Globo 2016.

          O app permite que pessoas de qualquer lugar, em qualquer momento, possam contar suas experiências, histórias para a Globo e a Globo, após moderação, pode incluir essas histórias em notícias relacionadas. Melhorando a experiência de que lê notícia em seus portais, além de aumentar a divulgação das notícias ao permitir que as pessoas que contaram suas histórias compartilhem links de notícias onde, ao final do texto, sua história está contada em vídeo.`}
          url={'https://github.com/ArthurAssuncao/globo-historias'}
        />
        <Project
          id={1}
          name={'EntregaRápida'}
          imgUrl={imgEntregaRapida}
          description={`Sistema colaborativo que permite o transporte de objetos dentro da região por meio de entregadores cadastrados. Desta forma diminuindo o custo e tempo no transporte desses objetos e, até, possibilitando entregas no mesmo dia.

          O EntregaRápida também permite o envio por meio do EcoPacote, um pacote que utiliza as ciclovias para a entrega. Essas ciclovias têm sido implementadas em diversas cidades do Brasil, como na cidade de Belo Horizonte.

          A partir das características do app é possível trazer uma série de melhorias para a sociedade, gerando novas oportunidades de négocio e, ao mesmo tempo, oferecer maior comodidade no envio e recebimento de objetos dentro da cidade, tornando-a mais morderna.

          O EntregaRápida foi vencedor do hackathon da Google Developer Group DevFest Sudeste.`}
          url={'http://github.com/ArthurAssuncao/EntregaRapida'}
        />
        <Project
          id={2}
          name={'Biblioteka App'}
          imgUrl={'https://armandoassuncao.com/static/img/portfolio/biblioteka/thumbnail.jpeg'}
          description={`Aplicativo criado com o objetivo de melhorar a utilização da biblioteca do IF Sudeste MG - Campus Barbacena.

          Fui colaborador do projeto de autoria do Armando Assunção.

          Tem as funcionalidades:

          Buscar Livros

          Reservar Livros

          Renovar Livros

          Exibir Extrato

          Notificação

          Renovação Autómatica

          Utilizado Java para o desenvolvimento do aplicativo e PHP/SlimFramework com arquitetura API rest no servidor.`}
          url={'https://play.google.com/store/apps/details?id=io.biblioteka.app'}
        />
        <Project
          id={3}
          name={'ArthurAssuncao.com old version'}
          imgUrl={imgArthurAssuncaoSiteOld}
          description={`Meu site pessoal onde divulgo meu currículo, meus projetos, etc e o mantenho atualizado com o que há de mais interessante e recente em termos de tecnologias web.

          História

          Em 2012, o site não tinha o código fonte aberto, utilizava PHP e Bootstrap 2.x.

          Em 2013, o site teve seu código fonte aberto e hospedado no Github.

          Em 2014, o site teve o Bootstrap atualizado para a versão 3.x.

          Em 2015, o site passou por várias reformulações, primeiro foi a interface material design com o MaterializeCSS, em seguida foi removido o PHP e deixado apenas estático. Uma versão em Material Design Lite foi iniciada, porém descontinuada devido a falta de recursos desse framework da Google. Nesta versão mais recente de 2015, o site é feito utilizando AngularJS e AngularJS Material, que oferecem muitos recursos com grande produtividade, além de um bom desempenho, mesmo neste último quesito sendo inferior ao ReactJS e AngularJS 2.0.

          Além de todas estas mudanças, em 2015, comecei a utilizar o SASS para melhorar a códificação CSS, Jade pra modularizar os HTML e, o mais interessante de todos, o Grunt como automatizador. O ganho em desempenho e produtividade que um automatizador gera é gigantesco.

          Agora em 2019, desenvolvi novamente o site utilizando ReactJS com styled components para um desenvolvimento mais ágil.`}
          url={'https://github.com/ArthurAssuncao/arthurassuncao_old.github.io'}
        />
      </div>
    </ProjectsStyle>
  );
};

export default Projects;
