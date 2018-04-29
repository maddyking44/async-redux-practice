
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('grats').del()
    .then(function () {
      // Inserts seed entries
      return knex('grats').insert([
        {grats: 'Living without pain'},
        {grats: 'The support of my family'},
        {grats: 'People who take the time to show they care'}
      ]);
    });
};
