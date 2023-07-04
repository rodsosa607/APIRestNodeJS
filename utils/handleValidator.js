const { validateResults } = require('express-validator');

const validateResults = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next(); //TODO le decimos continúa hacia el controlador
    } catch (error) {
        res.status(403)
        res.send({ errors: error.array() })
    }
}

module.exports = validateResults;