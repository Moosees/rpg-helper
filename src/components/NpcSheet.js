import React from 'react';
import NpcAttributes from './NpcAttributes';
import NpcList from './NpcList';

const NpcSheet = ({ npc }) => (
  <div>
    <NpcAttributes attributes={npc.attributes} />
    <div>
      <NpcList ary={npc.combat} />
      <NpcList ary={npc.skills} />
    </div>
    <div>
      <NpcList ary={npc.traits} />
      <NpcList ary={npc.talents} />
    </div>
  </div>
);

export default NpcSheet;
