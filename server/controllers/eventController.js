import eventsdb from '../models/eventsData';
/**
 *
 *
 * @class Event
 */
export default class Events {
  // get all events (api/vi/events)
  /**
   *
   *
   * @param {any} req
   * @param {any} res
   * @returns {json}gets all events
   * @memberof events
   */
  getAllEvents(req, res) {
    res.json({
      events: eventsdb,
      status: 'success'
    });
  }


  /**
   *
   *
   * @param {any} req
   * @param {any} res
   * @returns {json} adds new events
   * @memberof Events
   */
  createEvent(req, res) {
    if (!req.body.name || !req.body.description || !req.body.date) {
      return res.status(400).json({
        message: 'Please fill in all required fields',
        error: true
      });
    }
    eventsdb.push(req.body);
    return res.json({
      message: 'Success',
      error: false
    });
  }
  /**
   *
   *
   * @param {any} req
   * @param {any} res
   * @returns {json} gets events by ID
   * @memberof Events
   */
  getEventById(req, res) {
    for (let i = 0; i < eventsdb.length; i++) {
      if (eventsdb[i].id === parseInt(req.params.eventId, 10)) {
        return res.json({
          event: eventsdb[i],
          message: 'success',
          error: false
        });
      }
    }
    res
      .status(404)
      .json({
        message: 'Error! event not found',
        error: true
      });
  }

  /**
   *
   *
   * @param {any} req
   * @param {any} res
   * @returns {json} edits events by ID
   * @memberof Events
   */
  editEventById(req, res) {
    for (let i = 0; i < eventsdb.length; i++) {
      if (eventsdb[i].id === parseInt(req.params.eventId, 10)) {
        eventsdb[i].name = req.body.name;
        eventsdb[i].description = req.body.description;
        eventsdb[i].date = req.body.date;
        return res.json({
          message: 'this event has been modified successfully',
          error: false
        });
      }
    }
    return res.status(404).json({
      message: 'error! event not found',
      error: true
    });
  }

  /**
   *
   *
   * @param {any} req
   * @param {any} res
   * @returns {json} deletes events by ID
   * @memberof Events
   */
  deleteEventById(req, res) {
    for (let i = 0; i < eventsdb.length; i++) {
      if (eventsdb[i].id === parseInt(req.params.eventId, 10)) {
        eventsdb.splice(i, 1);
        return res.json({
          message: 'This event has been deleted successfully',
          error: false
        });
      }
    }
    return res
      .status(404)
      .json({ message: 'error! event not found', error: true });
  }
}
