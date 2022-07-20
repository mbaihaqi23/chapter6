'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert (
    'Products',[
      {
        product : 'iphone13',
        description : 'mobile phone apple',
        stok : '100',
        createdAt : new Date(),
        updatedAt : new Date(),
        available : true,
      },
      {
        product : 'iphone14',
        description : 'mobile phone apple',
        stok : 70,
        createdAt : new Date(),
        updatedAt : new Date(),
        available : true,
      },
      {
        product : 'iphone14',
        description : 'mobile phone apple',
        stok : 90,
        createdAt : new Date(),
        updatedAt : new Date(),
        available : true,
      },
      {
        product : 'blackshark 4',
        description : 'mobile phone xiaomi',
        stok : 150,
        createdAt : new Date(),
        updatedAt : new Date(),
        available : true,
      },
      {
        product : 'rog phone 5',
        description : 'mobile phone asus',
        stok : 100,
        createdAt : new Date(),
        updatedAt : new Date(),
        available : true,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Products', null, {});
  },
};
