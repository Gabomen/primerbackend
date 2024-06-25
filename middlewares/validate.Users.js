const db = require('../db');

const validateUser = (req, res, next) => {
    const userId = Number(req.query.userId);

    if (!userId){
        return res.sendStatus(403);
    }

    const user = db.prepare('SELECT * FROM user HERE user_ide = ?').get(userId);
    if (!user){
        return res.sendStatus(403);
    }
    
    res.user.user_id;
    return next();
};

module.exports = validateUser;