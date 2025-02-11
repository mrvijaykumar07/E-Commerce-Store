import React from 'react';
import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'MERN Shop | Odisha Masala ',
  description:
    'Buy Organic Masala',
  keywords:
    'electronics, gadgets, smartphones, laptops, online shopping, tech accessories'
};

export default Meta;
