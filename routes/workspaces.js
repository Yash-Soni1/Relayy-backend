const express = require("express");
const router = express.Router();
const supabase = require("../config/supabase");

router.get("/", async (req, res) => {
  const { data, error } = await supabase.from("workspaces").select("*");
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

router.post("/", async (req, res) => {
  const { name, owner_id } = req.body;
  if (!name || !owner_id)
    return res.status(400).json({ error: "Name and owner_id are required" });

  const { data, error } = await supabase
    .from("workspaces")
    .insert([{ name, owner_id }])
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
});

module.exports = router;
