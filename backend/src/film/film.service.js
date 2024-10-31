import filmModel from "./film.schema.js";

export class FilmService {
  static createFilm = async (filmData) => {
    try {
      const {
        name
      } = filmData;
      const foundFilm = await filmModel.findOne({
        name
      }).lean();
      if (foundFilm) {
        return {
          msg: `Film ${name} already exists`,
          success: false,
          status: 400
        };
      }
      const film = await filmModel.create(filmData);
      return {
        msg: film,
        success: true,
        status: 201
      };
    } catch (err) {
      return {
        msg: `Failed to add film: ${err._message}`,
        success: false,
        status: 500
      };
    }
  };

  static deleteFilm = async (filmId) => {
    try {
      const foundFilm = await filmModel.findById(filmId).lean();
      if (!foundFilm) {
        return {
          msg: `No film found with ID: ${filmId}`,
          success: false,
          status: 404
        };
      }

      await filmModel.findByIdAndDelete(filmId);

      return {
        msg: `Film with ID: ${filmId} has been successfully deleted`,
        success: true,
        status: 200
      };
    } catch (err) {
      return {
        msg: `Failed to delete film: ${err._message}`,
        success: false,
        status: 500
      };
    }
  };

  static getFilm = async (filmId) => {
    try {
      const foundFilm = await filmModel.findOne({
        _id: filmId
      }).lean();

      if (!foundFilm) {
        return {
          msg: `No film found with ID: ${filmId}`,
          success: false,
          status: 404
        };
      }
      return {
        msg: foundFilm,
        success: true,
        status: 200
      };
    } catch (err) {
      return {
        msg: `Failed to retrieve film: ${err._message}`,
        success: false,
        status: 500
      };
    }
  };

  static updateFilm = async (filmId, filmData) => {
    try {
      const updatedFilm = await filmModel.findByIdAndUpdate(filmId, filmData);
      if (!updatedFilm) {
        return {
          msg: `No film found with ID: ${filmId}`,
          success: false,
          status: 404
        };
      }
      return {
        msg: updatedFilm,
        success: true,
        status: 200
      };
    } catch (err) {
      return {
        msg: `Failed to update film`,
        success: false,
        status: 500
      };
    }
  };
}