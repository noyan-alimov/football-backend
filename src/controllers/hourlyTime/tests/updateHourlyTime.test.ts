import request = require('supertest');
import { app } from "../../../index";
import dotenv = require('dotenv');
dotenv.config();

const token = process.env.TEST_TOKEN;

it('should return status code 200 and date data', async (done) => {
    const req = {
        userId: 'randomUserId',
        time: '20:00 - 21:00'
    };
    const res = await request(app)
        .put('/api/time/1')
        .send(req)
        .set('Authorization', token);

    expect(res.status).toBe(200);
    expect(res.body.success).toBeTruthy();
    expect(res.body.data).toBeDefined();
    done();
});

it('should return status code 403 and an error message', async (done) => {
    const req = {
        userId: 'someOtherRandomId',
        time: '20:00 - 21:00'
    };
    const res = await request(app)
        .put('/api/time/1')
        .send(req)
        .set('Authorization', token);

    expect(res.status).toBe(403);
    expect(res.body.success).toBeFalsy();
    expect(res.body.message).toBe('you are unauthorized to update this date');
    done();
});