
exports.up = function(knex) {
    return knex.schema.createTable("clucks", (t) => {
    t.bigIncrements("id");
    t.string('username');
    t.text('img_url')
    t.text('content');
    t.timestamp('created_at').defaultTo(knex.fn.now());
    t.timestamp('updated_at').defaultTo(knex.fn.now());
})
};

exports.down = function(knex) {
    return knex.schema.dropTable('quiz1');
};
