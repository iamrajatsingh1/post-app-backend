const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token || token !== '123') {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
};

module.exports = authenticateToken;