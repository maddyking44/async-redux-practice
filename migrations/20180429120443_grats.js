
exports.up = function(knex, Promise) {

    return knex.schema.createTable('grats', function(table) {
        table.increments(),     
        table.string('Grats')
    });
  
};

exports.down = function(knex, Promise) {
  
    return knex.schema.dropTable('grats');
};
