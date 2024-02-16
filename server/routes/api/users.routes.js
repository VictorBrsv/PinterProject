const router = require('express').Router();
const bcrypt = require("bcrypt");
const { User } = require('../../db/models');
const generateTokens = require("../../utils/authUtils");
const cookiesConfig = require("../../config/cookiesConfig");

router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users)
        
    } catch ({ message }) {
        res.json({ message: 'Error while reading users' });
    }
})

router.put('/profile', async (req, res) => {
    const { id, name, email, password } = req.body.data;
    // console.log('========', req.body.data);
    
    try {
        const user = await User.findOne ({ where: { id } });
        const compare = await bcrypt.compare(password, user.password);
        if (!compare) {
            const hash = await bcrypt.hash(password, 10);
            const userUpd = await User.update({ name, email, password: hash }, { where: { id } });
            if (userUpd.length > 0) {
                const user = await User.findOne({ where: { id }});

                const { accessToken, refreshToken } = generateTokens({
                    user: { id: user.id, email: user.email, name: user.name, password: user.password },
                  });
                res
                    .clearCookie(cookiesConfig.refresh)
                    .clearCookie(cookiesConfig.access)
                    .cookie(cookiesConfig.refresh, refreshToken, {
                        maxAge: cookiesConfig.maxAgeRefresh,
                        httpOnly: true,
                    })
                    .cookie(cookiesConfig.access, accessToken, {
                        maxAge: cookiesConfig.maxAgeAccess,
                        httpOnly: true,
                    })
                    .status(201)
                    .json(user);
                return;
            }

        } else {
            const userUpd = await User.update( { name, email }, { where: { id } });
            if (userUpd.length > 0) {
                const user = await User.findOne({ where: { id }});

                const { accessToken, refreshToken } = generateTokens({
                    user: { id: user.id, email: user.email, name: user.name, password: user.password },
                  });

                res
                    .clearCookie(cookiesConfig.refresh)
                    .clearCookie(cookiesConfig.access)
                    .cookie(cookiesConfig.refresh, refreshToken, {
                        maxAge: cookiesConfig.maxAgeRefresh,
                        httpOnly: true,
                    })
                    .cookie(cookiesConfig.access, accessToken, {
                        maxAge: cookiesConfig.maxAgeAccess,
                        httpOnly: true,
                    })
                    .status(201)
                    .json(user);
                return;
            }
        }
        
    } catch ({ message }) {
        res.json({ message: 'Error while updating user' });
    }
})

module.exports = router