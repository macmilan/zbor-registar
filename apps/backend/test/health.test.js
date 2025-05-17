import request from 'supertest';
import app from '../index.js';

describe('API status', () => {
    it('should return hello world', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toContain('Zdravo');
    });
});
