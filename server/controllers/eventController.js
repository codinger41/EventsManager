import eventsdb from '../models/eventsData';
/**
 *
 *
 * @class Recipe
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

  // add new event
  /**
   *
   *
   * @param {any} req
   * @param {any} res
   * @returns {json} adds a recipe
   * @memberof Recipe
   */
  createEvent(req, res) {
    if (!req.body.name) {
      return res.json({ message: 'Event Name missing', error: true });
    }
    eventsdb.push(req.body);
    return res.json({ message: 'Success', error: false });
  }

  // edit or modify event
  /**
   *
   *
   * @param {any} req
   * @param {any} res
   * @returns {json} adds a recipe
   * @memberof Recipe
   */
}
// Get event by id (/api/v1/events:eventid)
/* getEventById(req, res) {
  eventsdb.forEach((ev) => {
        if (eventsdb[i].id === parseInt(req.params.id, 10)) {
          return res.json({
            event1: eventsdb[i],
            message: 'success',
            error: false
          });
        }
      },
      res
        .status(404)
        .json({message: 'Error! event not found', error: false})
    },

  */
