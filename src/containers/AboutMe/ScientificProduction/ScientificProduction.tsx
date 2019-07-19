import React from 'react';
import ScientificProductionStyle from './ScientificProduction.style';
import Paper from '../../../components/Paper';

const ScientificProduction = () => {
  return (
    <ScientificProductionStyle>
      <Paper
        title='Vehicle Driver Monitoring through the Statistical Process Control'
        author={['Arthur N. Assuncao', 'Andre L. L. Aquino', 'Ricardo C. C. de M. Santos', 'Rodolfo L. M. Guimaraes', 'Ricardo A. R. Oliveira']}
        publisher='Sensors (Basel) Journal'
        year={2019}
        qualisCC='A1'
        impactFactor={3031}
        sjr={0.59}
        hIndex={132}
        issn='1424-8220'
        url='https://doi.org/10.3390/s19143059'
      />
      <Paper
        title='Análise de Sensores para um Ambiente de Testes Automotivos'
        author={['Fábio O. de Paula', 'Arthur N. Assuncao', 'Ricardo A. R. Oliveira ']}
        publisher='XXI Congresso Brasileiro de Automática (CBA)'
        year={2016}
        qualisCC='B4'
        issn='2525-8311'
        url='https://ssl4799.websiteseguro.com/swge5/PROCEEDINGS/PDF/CBA2016-0575.pdf'
      />
      <Paper
        title='Vehicle Driver Monitoring through the Statistical Process Control'
        author={['Arthur N. Assuncao', 'Fábio O. de Paula', 'Ricardo A. R. Oliveira']}
        publisher='13th ACM International Symposium on Mobility Management and Wireless Access (MobiWac 2015)'
        year={2015}
        qualisCC='B2'
        sjr={0.18}
        isbn='978-1-4503-3758-8'
        url='http://dx.doi.org/10.1145/2810362.2810378'
      />
      <Paper
        title='KITT - Sistema de Carro Inteligente com Apoio à Segurança do Motorista'
        author={['Arthur N. Assuncao', 'Ricardo C. C. de M. Camara', 'Luiz Janeiro', 'Rafael Vitor', 'Fabio O. de Paula', 'Ricardo A. R. Oliveira']}
        publisher='V Brazilian Symposium on Computing Systems Engineering (SBESC)'
        year={2015}
        qualisCC='B2'
        sjr={0.18}
        isbn='00002015'
        url='http://sbesc.lisha.ufsc.br/sbesc2015/proceedings/146713.pdf'
      />
    </ScientificProductionStyle>
  );
};

export default ScientificProduction;
