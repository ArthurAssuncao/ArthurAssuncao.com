import React from 'react';
import ScientificProductionStyle from './ScientificProduction.style';
import Paper from '../../../components/Paper';

const ScientificProduction = () => {
  return (
    <ScientificProductionStyle>
      <Paper
        title='Vehicle Driver Monitoring through the Statistical Process Control'
        author={['Arthur N. Assuncao', 'Andre L. L. Aquino', 'Ricardo C. Câmara de M. Santos', 'Rodolfo L. M. Guimaraes', 'Ricardo A. R. Oliveira']}
        publisher='Sensors (Basel) Journal'
        year={2019}
        qualisCC='A1'
        impactFactor={3031}
        sjr={0.59}
        hIndex={132}
        issn='1424-8220'
        url='https://doi.org/10.3390/s19143059'
      />
    </ScientificProductionStyle>
  );
};

export default ScientificProduction;
