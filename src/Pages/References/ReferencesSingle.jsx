import React from 'react';
import { useParams } from 'react-router-dom';

function ReferencesSingle() {
  const { id } = useParams();

  return <div>Details for Reference ID: {id}</div>;
}

export default ReferencesSingle;
