import {
  FilmService
} from "./film.service.js";

class FilmController {
  createFilm = async (req, res) => {
    try {
      let data = await FilmService.createFilm(req.body);
      return res.status(data.status).json({
        msg: data.msg,
        success: data.success
      });
    } catch (error) {
      return res.status(500).json({
        msg: error.stack,
        success: false
      });
    }
  }

  deleteFilm = async (req, res) => {
    try {
      let data = await FilmService.deleteFilm(req.params.id);
      return res.status(200).json({
        msg: data.msg,
        success: data.success
      });
    } catch (error) {
      return res.status(500).json({
        msg: error.stack,
        success: false
      });
    }
  }

  getFilm = async (req, res) => {
    try {
      let data = await FilmService.getFilm(req.params.id);
      return res.status(data.status).json({
        msg: data.msg,
        success: data.success
      });
    } catch (error) {
      return res.status(500).json({
        msg: error.stack,
        success: false
      });
    }
  };

  updateFilm = async (req, res) => {
    try {
      let data = await FilmService.updateFilm(req.params.id, req.body);
      return res.status(data.status).json({
        msg: data.msg,
        success: data.success,
      });
    } catch (error) {
      return res.status(500).json({
        msg: error.stack,
        success: false
      });
    }
  };

}

export default new FilmController();