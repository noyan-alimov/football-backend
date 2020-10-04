import request = require('supertest');
import { app } from "../../../index";
import dotenv = require('dotenv');
dotenv.config();

const token = process.env.TEST_TOKEN;

it('should return status code 201 and football pitch data', async (done) => {
    const req = { 
        userId: 'randomUserId', 
        name: 'Etihad',
        address: 'Manchester',
        contactNumber: '07747 237 456',
        pricePerHour: 80
    };
    const res = await request(app)
        .post('/api/football-pitch')
        .send(req)
        .set('Authorization', token);
    expect(res.status).toBe(201);
    expect(res.body.success).toBeTruthy();
    expect(res.body.data).toBeDefined();
    done();
});

it('should return status code 401', async (done) => {
    const req = { 
        userId: 'authUserId', 
        name: 'Stamford Bridge',
        address: 'London',
        contactNumber: '07747 237 456',
        pricePerHour: 50  
    };
    const res = await request(app)
        .post('/api/football-pitch')
        .send(req)
    expect(res.status).toBe(401);
    done();
});