"use strict";

// import { DataType } from "sequelize-typescript";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.changeColumn("users", "banReason", {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },
  async down(queryInterface, Sequelize) {
    return await queryInterface.changeColumn("users", "banReason", {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    });
  },
};
