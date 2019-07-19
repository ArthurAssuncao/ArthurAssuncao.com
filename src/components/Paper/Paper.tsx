import React from 'react';
import PropTypes from 'prop-types';
import PaperStyle from './Paper.style';
import { InferPropTypes } from '../../types';
import { FaLink } from 'react-icons/fa';

const paperPropTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.number.isRequired,
  publisher: PropTypes.string.isRequired,
  impactFactor: PropTypes.number,
  sjr: PropTypes.number,
  qualisCC: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string,
  issn: PropTypes.string,
  isbn: PropTypes.string,
  hIndex: PropTypes.number
};

const paperDefaultProps = {
  url: '#',
  description: ''
};

type PaperProps = InferPropTypes<typeof paperPropTypes, typeof paperDefaultProps>;

const SpanIndicator = (props: PaperProps) => {
  const style = {
    marginLeft: '10px'
  };
  const generateStringIndicator = (props: PaperProps) => {
    if (props.impactFactor) {
      return `Impact Factor: ${props.impactFactor}`;
    }
    if (props.sjr) {
      return `SJR: ${props.sjr}`;
    }
    if (props.hIndex) {
      return `H-Index: ${props.hIndex}`;
    }
    return '';
  };
  return (
    <span style={style}>{generateStringIndicator(props)}</span>
  );
};

const Paper = (props: PaperProps) => {
  return (
    <PaperStyle>
      <div className='paper-title'>
        <a href={props.url} aria-label={props.title}>{props.title}<FaLink className='paper-title-icon' /></a></div>
      <div className='paper-info'>{props.author.join(', ')}</div>
      <div className='paper-info'>In: {props.publisher} <span>[{props.year}]</span></div>
      <div className='paper-info'><span>Qualis: {props.qualisCC}</span><SpanIndicator {...props} /></div>
    </PaperStyle>
  );
};

export default Paper;
