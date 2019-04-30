import React from 'react';

const NpcList = ({ary}) => (
  <ul>
    {ary.map((item)=> <li>{item}</li>)}
  </ul>
);

export default NpcList;