import chai from 'chai';

import chaiHttp from 'chai-http';

import app from '../app';

const { expect } = chai;

chai.use(chaiHttp);
describe('Events API Test', () => {
  describe('GET /', () => {
    // Test for undefined routes
    it(' should Return 404 for unexistent route', (done) => {
      chai
        .request(app)
        .get('/an/undefined/route')
        .end((err, res) => {
          expect(res)
            .to
            .have
            .status(404);
          done();
        });
    });
  });
  describe('POST event', () => {
    it('Should return 200 when you post an event', (done) => {
      chai
        .request(app)
        .post('/api/v1/events')
        .send({
          id: 9,
          name: 'GDG Lagos',
          description: 'yam festival',
          date: 20 - 3 - 2015
        })
        .end((err, res) => {
          expect(res)
            .to
            .have
            .status(200);
          done();
        });
    });
  });
  describe('DELETE Event', () => {
    it('Should return 200 for succesful delete request', (done) => {
      chai
        .request(app)
        .delete('/api/v1/events/1')
        .end((err, res) => {
          expect(res)
            .to
            .have
            .status(200);
          done();
        });
    });
  });
  describe('POST event without name', () => {
    it('should return 400 for bad request', (done) => {
      chai
        .request(app)
        .post('/api/v1/events')
        .send({
          id: 9,
          name: '',
          description: 'yam festival',
          date: 20 - 3 - 2015
        })
        .end((err, res) => {
          expect(res)
            .to
            .have.status(400);
          done();
        });
    });
  });
  describe('POST event without description', () => {
    it('should return 400 for bad request', (done) => {
      chai
        .request(app)
        .post('/api/v1/events')
        .send({
          id: 9,
          name: 'GDG DEVS',
          description: '',
          date: 20 - 3 - 2015
        })
        .end((err, res) => {
          expect(res)
            .to
            .have.status(400);
          done();
        });
    });
  });
});


describe('Centers API Test', () => {
  describe('GET /', () => {
    // Test for undefined routes
    it(' should Return 404 for unexistent route', (done) => {
      chai
        .request(app)
        .get('/an/undefined/route')
        .end((err, res) => {
          expect(res)
            .to
            .have
            .status(404);
          done();
        });
    });
  });
  describe('POST center', () => {
    it('Should return 200 when you post a center', (done) => {
      chai
        .request(app)
        .post('/api/v1/centers')
        .send({
          id: 9,
          name: 'GDG Lagos',
          location: 'yam festival',
          facilities: ['Air conditioner', 'Generators', 'Porjectors']
        })
        .end((err, res) => {
          expect(res)
            .to
            .have
            .status(200);
          done();
        });
    });
  });
  describe('DELETE Center', () => {
    it('Should return 200 for succesful delete request', (done) => {
      chai
        .request(app)
        .delete('/api/v1/centers/1')
        .end((err, res) => {
          expect(res)
            .to
            .have
            .status(200);
          done();
        });
    });
  });
  describe('POST center without name', () => {
    it('should return 400 for bad request', (done) => {
      chai
        .request(app)
        .post('/api/v1/centers')
        .send({
          id: 9,
          name: '',
          location: 'Lagos',
          facilities: 'Projectors, Electricity'
        })
        .end((err, res) => {
          expect(res)
            .to
            .have
            .status(400);
          done();
        });
    });
  });
  describe('POST center without Location', () => {
    it('should return 400 for bad request', (done) => {
      chai
        .request(app)
        .post('/api/v1/centers')
        .send({
          id: 9,
          name: 'Ruby hall',
          location: '',
          facilities: 'Projectors, Electricity'
        })
        .end((err, res) => {
          expect(res)
            .to
            .have
            .status(400);
          done();
        });
    });
  });
});
