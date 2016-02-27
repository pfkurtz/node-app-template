import r from 'rethinkdbdash'

const db = r({
    servers: [
        { host: 'localhost', port: 28015 }
    ]
})

export default db
