import express from 'express';

const app = express();
app.get("/", (_, res) => res.send("Zdravo, sveta zajednico!"));
app.listen(3000);