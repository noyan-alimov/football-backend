import request = require('supertest');
import { app } from "../../../index";

it('should return status code 201 and football pitch data', async (done) => {
    const req = { 
        userId: 1, 
        name: 'Stamford Bridge',
        address: 'London',
        contactNumber: '07747 237 456',
        pricePerHour: 50  
    };
    const res = await request(app).post('/api/football-pitch').send(req);
    expect(res.status).toBe(201);
    expect(res.body.success).toBeTruthy();
    expect(res.body.data).toBeDefined();
    done();
});