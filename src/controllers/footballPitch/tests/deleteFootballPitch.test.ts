import request = require('supertest');
import { app } from "../../../index";
import dotenv = require('dotenv');
dotenv.config();

const token = process.env.TEST_TOKEN;

it('should return status code 200 and deleted football pitch id', async (done) => {
    const req = { userId: 'randomUserId' };
    const res = await request(app)
        .delete('/api/footballPitch/3')
        .set('Authorization', `${token}`)
        .send(req);
    expect(res.status).toBe(200);
    expect(res.body.success).toBeTruthy();
    expect(res.body.data).toBeDefined();
    done();
});

it('should return status code 404', async (done) => {
    const res = await request(app)
        .delete('/api/footballPitch/1000')
        .set('Authorization', `${token}`);
    expect(res.status).toBe(404);
    expect(res.body.success).toBeFalsy();
    expect(res.body.message).toBe('football pitch not found');
    done();
});