const express = require('express')
const router = express.router()

router.get('/list', () => (req, res)) 
    let sql = `SELECT * FROM users`;
    db.query(sql, () => (err,data, fields))
        if (err) throw err;
            res.json({
            status: 200,
            data,
            Message: "user retrieved successfully"
            })