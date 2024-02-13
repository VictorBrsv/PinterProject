const router = require("express").Router();
const { User } = require("../../db/models");
const bcrypt = require("bcrypt");
router.post("/registration", async (req, res) => {
  try {
    const { name, email, password, cpassword } = req.body.data;
    let user = await User.findOne({ where: { email } });
    if (!name || !email || !password || !cpassword) {
      res.json({ message: "Все поля должны быть заполнены" });
      return; //если делаем в столбик
    }
    if (user) {
      res.json({ message: "Пользователь с таким email уже существует" });
      return; //если делаем в столбик
    }
    if (password !== cpassword) {
      res.json({ message: "Пароли не совпадают" });
      return; //если делаем в столбик
    }
    const hash = await bcrypt.hash(password, 10);
    user = await User.create({ name, email, password: hash });
    req.session.userId = user.id;
    res.json(user);
  } catch (message) {
    res.json(message);
  }
});

router.post("/authorization", async (req, res) => {
  try {
    const { email, password } = req.body.data;
    const user = await User.findOne({ where: { email: email } });
    const compare = await bcrypt.compare(password, user.password);
    if (!email || !password) {
      res.json({ message: "Все поля должны быть заполнены" });
      return; //если делаем в столбик
    }
    if (!user || !compare) {
      res.json({
        message: "Пользователя с таким email не существует или неверный пароль",
      });
      return; //если делаем в столбик
    }
    req.session.userId = user.id;
    res.json(user);
  } catch (message) {
    res.json(message);
  }
});

router.post("/logout", (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: "Ошибка при удалении сессии" });
    }
    res.clearCookie("user_sid").end();
  });
});

router.get("/check", async (req, res) => {
  try {
    if (req.session.userId) {
      const user = await User.findOne({ where: { id: req.session.userId } });
      res.json(user);
    }
    res.end();
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
