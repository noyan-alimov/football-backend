import request = require('supertest');
import { app } from "../../../index";
import dotenv = require('dotenv');
dotenv.config();

const token = process.env.TEST_TOKEN;

it('should return status code 200 and football pitch data', async (done) => {
    const req = {
        userId: 'randomUserId',
        name: 'Old Trafford',
        address: 'Manchester',
        contactNumber: '06646 888 959',
        pricePerHour: 100  
    };
    const res = await request(app)
        .put('/api/football-pitch/1')
        .set('Authorization', token)
        .send(req);
    expect(res.status).toBe(200);
    expect(res.body.success).toBeTruthy();
    expect(res.body.data).toBeDefined();
    done();
});

it('should return status code 403', async (done) => {
    const req = {
        userId: 'someotherRandomUserId',
        name: 'Old Trafford',
        address: 'Manchester',
        contactNumber: '06646 888 959',
        pricePerHour: 100  
    };
    const res = await request(app)
        .put('/api/football-pitch/1')
        .set('Authorization', token)
        .send(req);
    expect(res.status).toBe(403);
    expect(res.body.success).toBeFalsy();
    expect(res.body.message).toBe('you are unauthorized to update this football Pitch');
    done();
});