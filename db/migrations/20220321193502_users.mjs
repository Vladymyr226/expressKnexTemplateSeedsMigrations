export const up = async (knex) => {
    return knex.schema
        .createTable('users', function (table) {
            table.increments('id').primary()
            table.string('name', 50).notNullable()
            table.string('phone', 15).notNullable()
            table.string('email', 50).notNullable()
            table.string('password').notNullable()
        })
}

export const down = async (knex) =>{
    return knex.schema
        .dropTable("users")
}