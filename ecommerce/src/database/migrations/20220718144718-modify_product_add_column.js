'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

      return await Promise.all([

        queryInterface.addColumn("Products", "available", {
        
        type: Sequelize.BOOLEAN,
        
        }),
        
        ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     return await Promise.all([

      queryInterface.removeColumn("Products", "available"),
      
      ]);
  }
};
