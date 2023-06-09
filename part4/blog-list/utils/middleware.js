const logger = require('../utils/logger')

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint'})
}

const errorHandler = (error, request, response, next) => {
    logger.error('================ middleware error here ================')
    if (error.name === 'ValidationError') {
        logger.error(error.message)
        return response.status(400).json({ error: error.message })
    }
    logger.error('other error solved by express')
    next(error)
}

module.exports = {
    unknownEndpoint,
    errorHandler
}