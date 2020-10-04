import request = require('supertest');
import { app } from "../../../index";

it('should return status code 200 and all dates', async (done) => {
    const res = await request(app).get('/api/dates');

    expect(res.status).toBe(200);
    expect(res.body.success).toBeTruthy();
    expect(res.body.data).toBeDefined();
    done();
});

it('should return status code 404', async (done) => {
    const res = await request(app).get('/api/datessss');

    expect(res.status).toBe(404);
    done();
});