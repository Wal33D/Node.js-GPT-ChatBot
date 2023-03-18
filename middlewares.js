function setContentType(req, res, next) {
    if (req.path.endsWith(".js")) {
        res.setHeader("Content-Type", "application/javascript");
    }
    next();
}

module.exports = { setContentType };
