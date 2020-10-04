import request = require('supertest');
import { app } from "../../../index";
import dotenv = require('dotenv');
dotenv.config();

const token = process.env.TEST_TOKEN;

it('should return status code 201 and date data', async (done) => {
    const req = {
        userId: 'randomUserId',
        date: '02-10-2020'
    };
    const res = await request(app)
        .post('/api/footballPitch/1/date')
        .send(req)
        .set('Authorization', token);

    expect(res.status).toBe(201);
    expect(res.body.success).toBeTruthy();
    expect(res.body.data).toBeDefined();
    done();
});

it('should return status code 404 and an error message', async (done) => {
    const req = {
        userId: 'randomUserId',
        date: '02-10-2020'
    };
    const res = await request(app)
        .post('/api/footballPitch/1000/date')
        .send(req)
        .set('Authorization', token);

    expect(res.status).toBe(404);
    expect(res.body.success).toBeFalsy();
    expect(res.body.message).toBe('football pitch not found');
    done();
});