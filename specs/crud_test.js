"use strict";

var request = require("supertest"),
    expect = require("chai").expect,
    joiAssert = require("joi-assert");

const {
    schema_users,  
} = require("../data/schema_users.js");

const request_timeout = 15000;
const URL = process.env.NODE_ENV;
const ENDPOINT = '/users';
const USERS = {
    name: "Danilo",
    location: "SP"
}

const UPDATE = '/users/2';
const UPDATE_USERS = {
    name: "Danilo Policarpo",
    location: "SP"
}

describe("Gamefication test_api e contrato", function() {
    it.only("Realizar uma requisição GET",function(done) {
    this.timeout(request_timeout);
    request(URL)
    .get(ENDPOINT)
    .expect("Content-Type", /json/)
    .end(function(err, res) {
        expect(res.status).to.be.eql(200);
        joiAssert(res.body, schema_users);
        done(err);
        });
    });

    it("Realizar uma requisição POST",function(done) {
    this.timeout(request_timeout);
    request(URL)
    .post(ENDPOINT)
    .send(USERS)
    .expect("Content-Type", /json/)
    .end(function(err, res) {
        expect(res.status).to.be.eql(201);
        done(err);
        });
    });

    it("Realizar uma requisição PUT",function(done) {
    this.timeout(request_timeout);
    request(URL)
    .put(UPDATE)
    .send(UPDATE_USERS)
    .expect("Content-Type", /json/)
    .end(function(err, res) {
        expect(res.status).to.be.eql(200);
        done(err);
        });
    });

});

describe("Gamefication test_api DELETE", function() {
it("Realizar uma requisição DELETE",function(done) {
    this.timeout(request_timeout);
    request(URL)
    .delete(UPDATE)
    .expect("Content-Type", /json/)
    .end(function(err, res) {
        expect(res.status).to.be.eql(200);
        done(err);
        });
    });
});