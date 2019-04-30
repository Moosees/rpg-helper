import React, { Component } from 'react';
import NpcSheet from './NpcSheet';
import {npcMockup} from '../npcMockup';

class Npcs extends Component {
  constructor(props) {
    super(props);
    this.state = { npcs: [npcMockup] };
  }
  render() {
    return (
      <NpcSheet npc={this.state.npcs[0]} />
    );
  }
}

export default Npcs;