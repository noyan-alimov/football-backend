import request = require('supertest');
import { app } from "../../../index";
import dotenv = require('dotenv');
dotenv.config();

const token = process.env.TEST_TOKEN;

it('should return status code 200 and dateId', async (done) => {
    const req = {
        userId: 'randomUserId'
    };
    const res = await request(app)
        .delete('/api/time/3')
        .send(req)
        .set('Authorization', token);

    expect(res.status).toBe(200);
    expect(res.body.success).toBeTruthy();
    expect(res.body.data).toBeDefined();
    done();
});

it('should return status code 403 and an error message', async (done) => {
    const req = {
        userId: 'someOtherRandomId'
    };
    const res = await request(app)
        .delete('/api/time/2')
        .send(req)
        .set('Authorization', token);

    expect(res.status).toBe(403);
    expect(res.body.success).toBeFalsy();
    expect(res.body.message).toBe('you are unauthorized to delete this date');
    done();
});