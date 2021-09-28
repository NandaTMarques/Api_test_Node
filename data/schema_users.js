"use strict";

const Joi = require("joi");

const schema_users = Joi.array().items(Joi.object().keys({
    id: Joi.number(),
    name: Joi.string().required(),
    location: Joi.string().required()
}));


module.exports = {
    schema_users,
};