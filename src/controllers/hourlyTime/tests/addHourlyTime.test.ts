import request = require('supertest');
import { app } from "../../../index";
import dotenv = require('dotenv');
dotenv.config();

const token = process.env.TEST_TOKEN;

it('should return status code 201 and time data', async (done) => {
    const req = {
        userId: 'randomUserId',
        time: '11:00 - 12:00'
    };
    const res = await request(app)
        .post('/api/date/1/time')
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
        time: '11:00 - 12:00'
    };
    const res = await request(app)
        .post('/api/date/1000/time')
        .send(req)
        .set('Authorization', token);

    expect(res.status).toBe(404);
    expect(res.body.success).toBeFalsy();
    expect(res.body.message).toBe('date not found');
    done();
});