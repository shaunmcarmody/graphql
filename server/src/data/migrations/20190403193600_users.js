exports.up = knex =>
  knex.schema
    .createTable('users', tbl => {
      tbl
        .increments();
      
      tbl
        .string('username', 128)
        .notNullable()
        .unique();

      tbl
        .string('password', 128)
        .notNullable()

      tbl
        .string('department', 128)
        .notNullable();
    })

exports.down = knex => knex.schema.dropTableIfExists('users');