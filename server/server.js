import express from "express";
import cors from "cors";
import mysql from "mysql";


const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "countries"
})

// FETCH DATA
app.get('/', (req, res)=> {
    const sql = "SELECT * FROM country";
    db.query(sql, (err, result) => {
        if (err) return res.json({Message: "Error inside server"})
        return res.json(result);
    })
})

//VIEW DATA
app.get('/details/:id', (req, res) => {
    const sql = "SELECT * FROM country WHERE id = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
        if (err) return res.json({Message: "Error inside server"})
        return res.json(result)
    })
})

//UPDATE DATA
app.put('/update/:id', (req, res) => {
    const sql = "UPDATE country SET `flag_name` = ?, `flag_official` = ?, `flag_desc` = ?, `flag_pop` = ?, `flag_timezone` = ?, `flag_continent` = ? WHERE id = ?";
    const id = req.params.id;
    db.query(sql, [req.body.flag_name, req.body.flag_official, req.body.flag_desc, req.body.flag_pop, req.body.flag_timezone, req.body.flag_continent, id], (err, result) => {
        if (err) return res.json({Message: "Error inside server"})
        return res.json(result)
    })

})

// DELETE DATA
app.delete('/delete/:id', (req, res) => {
    const sql = "DELETE FROM country WHERE id = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
        if (err) return res.json({Message: "Error inside server"})
        return res.json(result)
    })
})

app.listen(8081, () => {
    console.log("Server Listen");
})

