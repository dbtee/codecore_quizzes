const express = require('express');
const router = express.Router();
const knex = require("../db/client");
const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 7;

router.get("/", (req, res) => {
    knex
      .select("*")
      .from("clucks")
      .limit(10)
      .orderBy("created_at", "DESC")
      .then(clucks => {
        res.send(clucks);
      })
  });


router.get('/cluck', (req, res) => {
    res.render('cluck');
});

router.get("/:id", (req, res) => {
    const cluckId = req.params.id;

    knex
      .select("*")
      .from("clucks")
      .where("id", cluckId)
      .first()
      .then(cluck => {
        if(cluck) {
          res.render("index", {
            cluck: cluck,
          });
        } else {
          res.send(`Cannot find cluck with id ${cluckId}`);
        }
      });
  });

router.post("/", (req, res) => {
    const img_url = req.body.img_url;
    const content = req.body.content;
    const username = req.cookies.username;
  
    knex("clucks")
      .insert({
        username: username,
        img_url: img_url,
        content: content,
        created_at: created_at,
        updated_at: updated_at,
      })
      .returning("*")
      .then(data => {
        res.send(data);
      });
  })

module.exports = router;