import React from 'react';
import PropTypes from 'prop-types';
import PaperStyle from './Paper.style';
import { InferPropTypes } from '../../types';

const paperPropTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.number.isRequired,
  publisher: PropTypes.string.isRequired,
  impactFactor: PropTypes.number,
  sjr: PropTypes.number.isRequired,
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

const Paper = (props: PaperProps) => {
  return (
    <PaperStyle>
      <div className='paper-title'><a href={props.url} aria-label={props.title}>{props.title}</a></div>
      <div>{props.author.join(', ')}</div>
      <div>{props.publisher}</div>
      <div><span>Qualis: {props.qualisCC}</span>&nbsp;<span>Impact Factor: {props.impactFactor}</span></div>
    </PaperStyle>
  );
};

export default Paper;
