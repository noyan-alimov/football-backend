import request = require('supertest');
import { app } from "../../../index";

it('should return status code 200 and times by dateId', async (done) => {
    const res = await request(app).get('/api/date/1/times');

    expect(res.status).toBe(200);
    expect(res.body.success).toBeTruthy();
    expect(res.body.data).toBeDefined();
    done();
});

it('should return status code 404 and an error message', async (done) => {
    const res = await request(app).get('/api/date/1000/times');

    expect(res.status).toBe(404);
    expect(res.body.success).toBeFalsy();
    expect(res.body.message).toBe('date not found');
    done();
});