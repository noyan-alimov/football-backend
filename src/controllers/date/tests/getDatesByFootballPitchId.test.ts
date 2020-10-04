import request = require('supertest');
import { app } from "../../../index";

it('should return status code 200 and dates by football pitch id', async (done) => {
    const res = await request(app).get('/api/footballPitch/1/dates');

    expect(res.status).toBe(200);
    expect(res.body.success).toBeTruthy();
    expect(res.body.data).toBeDefined();
    done();
});

it('should return status code 404', async (done) => {
    const res = await request(app).get('/api/footballPitch/1000/dates');

    expect(res.status).toBe(404);
    expect(res.body.success).toBeFalsy();
    expect(res.body.message).toBe('football pitch not found');
    done();
});