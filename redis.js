const express = require("express");
const redis = require("redis");
const { join } = require("path");


const client = redis.createClient();
const app = express();

app.use(express.json());



app.post("/user", (req, res) => {
    const { name, jobArea } = req.body;

    client.set(
        name,
        JSON.stringify({
            name,
            jobArea
        }),
        () => {
            res.sendStatus(201);
        }
    );

});

app.get("/user", (req, res) => {
    client.keys("*", async (_err, keys) => {
        if (_err) {
            res.sendStatus(500);
            return;
        }
        const users = [];
        for (const name of keys) {
            const value = await redisGet(name);


            console.log({ name, value });

            try {
                users.push(JSON.parse(value));
            }
            catch (_) {
                users.push({
                    name,
                    value
                });
            }



        }
        res.json(users);
    });
});

app.delete("/user/:name", (req, res) => {
    const { name } = req.params;
    client.del(name, (_err, response) => {
        console.log({ deleted: response });
        res.sendStatus(200);
    });
});

const redisGet = async (key) => new Promise((ok, _err) => {
    client.get(key, (err, value) => {
        if (err) {
            _err(err);
            return;
        }
        ok(value);
    });
});

app.use(express.static(join(__dirname)));
app.listen(8080, () => console.log("Servidor iniciado en puerto 8080"));
