import request = require('supertest');
import { app } from "../../../index";
import dotenv = require('dotenv');
dotenv.config();

it('should return status code 200 and football pitch data', async (done) => {
    const req = {
        name: 'Old Trafford',
        address: 'Manchester',
        contactNumber: '06646 888 959',
        pricePerHour: 100  
    };
    const token = process.env.TEST_TOKEN;
    const res = await request(app)
        .post('/api/football-pitch')
        .send(req)
        .set('Authorization', token);
    expect(res.status).toBe(200);
    expect(res.body.success).toBeTruthy();
    expect(res.body.data).toBeDefined();
    done();
});

it('should return status code 401', async (done) => {
    const req = {
        name: 'Old Trafford',
        address: 'Manchester',
        contactNumber: '06646 888 959',
        pricePerHour: 100  
    };
    const res = await request(app)
        .post('/api/football-pitch')
        .send(req)
    expect(res.status).toBe(401);
    done();
});