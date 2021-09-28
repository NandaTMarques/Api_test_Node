"use strict";

const Joi = require("joi");

const schema_pets = Joi.object().keys({
    id: Joi.number().required(),
    category: Joi.object().keys({
        id: Joi.number().required(),
        name: Joi.string().required()
    }),
    name: Joi.string(),
    photoUrls: Joi.array().items(
        Joi.string()
    ),
    tags: Joi.array().items(
        Joi.object().keys({
            id: Joi.number().required(),
            name: Joi.string().required()
        })
    ),
    status: Joi.string().required(),
});

const schema_pets_id = Joi.object().keys({
    id: Joi.number().required(),
    category: Joi.object().keys({
        id: Joi.number().required(),
        name: Joi.string().required()
    }),
    name: Joi.string(),
    photoUrls: Joi.array().items(
        Joi.string()
    ),
    tags: Joi.array().items(
        Joi.object().keys({
            id: Joi.number().required(),
            name: Joi.string().required()
        })
    ),
    status: Joi.string().required(),
});

const schema_pets_by_status = Joi.array().items(Joi.object().keys({
    id: Joi.number().required(),
    category: Joi.object().keys({
        id: Joi.number().required(),
        name: Joi.string()
    }),
    name: Joi.string().required(),
    photoUrls: Joi.array().items(
        Joi.string()
    ),
    tags: Joi.array().items(
        Joi.object().keys({
            id: Joi.number().required(),
            name: Joi.string().required()
        })
    ),
    status: Joi.string().required(),
}));

module.exports = {
    schema_pets,
    schema_pets_id,
    schema_pets_by_status,
};