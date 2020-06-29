if (!global.db) {
    const pgp = require('pg-promise')();
    db = pgp(process.env.DB_URL);
}

function list(searchText = '', start) {
    const where = [];
    if (searchText)
        where.push(`text ILIKE '%$1:value%'`);
    if (start)
        where.push('id < $2');
    const sql = `
        SELECT *
        FROM posts
        ${where.length ? 'WHERE ' + where.join(' AND ') : ''}
        ORDER BY id DESC
        LIMIT 10
    `;
    return db.any(sql, [searchText, start]);
}

function create(mood, text, title, location, userName) {
    const sql = `
        INSERT INTO posts ($<this:name>)
        VALUES ($<mood>, $<text>, $<title>, $<location>, $<userName>)
        RETURNING *
    `;
    return db.one(sql, {mood, text, title, location, userName});
}

module.exports = {
    list,
    create
};
