export const npcTemplate = {
  attributes: {
    primary: {
      WS: 35,
      BS: 30,
      S: 35,
      T: 45,
      I: 20,
      Ag: 25,
      Dex: 20,
      Int: 25,
      WP: 35,
      Fel: 20
    },
    secondary: { M: 4, W: 14 }
  },
  combat: {
    options: {
      chanceTwoHanded: 25,
      chanceShield: 75
    },
    oneHanded: ['Cleaver', 'Axe', 'Spear', 'Club', 'Unarmed'],
    twoHanded: ['Ball and Chain', 'Great Axe'],
    shield: ['Large Shield', 'Medium Shield'],
    backup: ['Dagger', 'Throwing Axe']
  },
  skills: {
    options: {
      minPrimary: 2,
      minSecondary: 0,
      minBonus: 5,
      maxBonus: 15
    },
    primary: [
      'Athletics',
      'Climb',
      'Cool',
      'Endurance',
      'Intimidate',
      'Outdoor Survival',
      'Perception'
    ],
    secondary: [
      'Dodge',
      'Intuition',
      'Leadership',
      'Play (War Drum)',
      'Ride (Boar)',
      'Set Trap',
      'Stealth',
      'Swim',
      'Track'
    ]
  },
  traits: {
    options: {
      chancePrimary: 95,
      chanceSecondary: 5
    },
    primary: [
      'Animosity (Greenskins)',
      'Armour 3',
      'Belligerent',
      'Die Hard',
      'Infected',
      'Night Vision'
    ],
    secondary: ['Painless', 'Size (Large)']
  },
  talents: {
    options: {
      minPrimary: 2,
      minSecondary: 0
    },
    primary: [
      'Berserk Charge',
      'Dirty Fighting',
      'Enclosed Fighter',
      'Fearless (Group)',
      'Hatred (Group)',
      'Implacable',
      'In-Fighter',
      'Iron Jaw',
      'Iron Will',
      'Menacing',
      'Resolute',
      'Strike Mighty Blow',
      'Strong Back'
    ],
    secondary: [
      'Ambidexterous',
      'Break and Enter',
      'Careful Strike',
      'Combat Master',
      'Combat Reflexes',
      'Dual Wielder',
      'Frenzy',
      'Frightening',
      'Furious Assault',
      'Reaction Strike',
      'Sprinter',
      'Stout-hearted',
      'Strike to Injure',
      'Strike to Stun'
    ]
  }
};
