'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const seeds = [
      { name: 'XYZ Trading' },
      { name: 'ABC Corp.' },
      { name: 'Helzig Maritime' },
      { name: 'DEF Inc.' }
    ];

    return queryInterface.bulkInsert('Providers', seeds.map(seed => ({ ...seed, createdAt: new Date(), updatedAt: new Date() })));
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Providers', null, {});
  }
};
