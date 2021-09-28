"use strict";

var request = require("supertest"),
    expect = require("chai").expect,
    joiAssert = require("joi-assert");

const {
    schema_pets,
    schema_pets_id,
    schema_pets_by_status,
} = require("../data/schema_pets.js");

const request_timeout = 15000;
const URL = process.env.NODE_ENV;
const ENDPOINT = "/v2/pet";

const PET_CREATED = {
    id: 0,
    category: {
        id: 0,
        name: "Dog",
    },
    name: "Brutus",
    photoUrls: ["string"],
    tags: [
        {
            id: 0,
            name: "string",
        },
    ],
    status: "available",
};

describe("Cadastrar informações sobre o pet", function () {
    it("Cadastrar um novo pet na loja", function (done) {
    this.timeout(request_timeout);
    request(URL)
        .post(ENDPOINT)
        .send(PET_CREATED)
        .expect("Content-Type", /json/)
        .end(function (err, res) {
            expect(res.status).to.be.eql(200);
            joiAssert(res.body, schema_pets);
            done(err);
        });
    });
});

const ENDPOINT_BY_ID = '/v2/pet/9223372000001114122';
const ENDPOINT_BY_STATUS = '/v2/pet/findByStatus?status=available';

describe("Buscar informações sobre o pet", function() {
    it("Realizar uma busca de pet por ID",function(done) {
        this.timeout(request_timeout);
        request(URL)
        .get(ENDPOINT_BY_ID)
        .expect("Content-Type", /json/)
        .end(function(err, res) {
            expect(res.status).to.be.eql(200);
            joiAssert(res.body, schema_pets_id);
            done(err);
        });
    });
    it("Realizar uma busca de pets por status",function(done) {
        this.timeout(request_timeout);
        request(URL)
        .get(ENDPOINT_BY_STATUS)
        .expect("Content-Type", /json/)
        .end(function(err, res) {
            expect(res.status).to.be.eql(200);
            joiAssert(res.body, schema_pets_by_status,);
            done(err);
        });
    });
});
