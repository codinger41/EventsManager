
import centerdb from '../models/centerData';

/**
 *
 *
 * @class center
 */
export default class Centers {
// get all centers (api/vi/centers)
/**
   *
   *
   * @param {any} req
   * @param {any} res
   * @returns {json}gets all centers
   * @memberof centers
   */
  getAllCenters(req, res) {
    res.status(200).json({
      centers: centerdb,
      status: 'success'
    });
  }

  /**
   *
   *
   * @param {any} req
   * @param {any} res
   * @returns {json}gets all centers
   * @memberof centers
   */
  addACenter(req, res) {
    if (!req.body.name || !req.body.location) {
      return res.status(400).json({
        message: 'Please do fill in the required fields',
        error: true
      });
    }
    centerdb.push(req.body);
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
   * @returns {json}gets all centers
   * @memberof centers
   */
  getCenterById(req, res) {
    for (let i = 0; i < centerdb.length; i++) {
      if (centerdb[i].id === parseInt(req.params.centerId, 10)) {
        return res.status(200).json({
          center: centerdb[i],
          message: 'success',
          error: false
        });
      }
    }
    res
      .status(404)
      .json({ message: 'Error! Center not found', error: true });
  }

  /**
   *
   *
   * @param {any} req
   * @param {any} res
   * @returns {json} edits centers by ID
   * @memberof centers
   */
  editCenterById(req, res) {
    for (let i = 0; i < centerdb.length; i++) {
      if (centerdb[i].id === parseInt(req.params.centerId, 10)) {
        centerdb[i].name = req.body.name;
        centerdb[i].location = req.body.description;
        centerdb[i].facilities = req.body.facilities;
        return res.json({
          message: 'this center has been modified successfully',
          error: false
        });
      }
    }
    return res.status(404).json({
      message: 'error! center not found',
      error: true
    });
  }
  /**
   *
   *
   * @param {any} req
   * @param {any} res
   * @returns {json} edits centers by ID
   * @memberof centers
   */
  deleteCenterById(req, res) {
    for (let i = 0; i < centerdb.length; i++) {
      if (centerdb[i].id === parseInt(req.params.centerId, 10)) {
        centerdb.splice(i, 1);
        return res.json({ message: 'This center has been deleted successfully', error: false });
      }
    }
    return res
      .status(404)
      .json({ message: 'error! center not found', error: true });
  }
}
