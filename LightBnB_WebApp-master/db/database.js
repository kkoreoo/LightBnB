const { Pool } = require('pg');
const properties = require("./json/properties.json");
const users = require("./json/users.json");

/// DB connection
const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'lightbnb'
});

/// Users

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function(email) {
  return pool
    .query(`SELECT * FROM users WHERE email = $1;`, [email])
    .then((response) => {
      if (Object.keys(response.rows[0]).length === 0) {
        console.log('Not a user');
        return null;
      }
      console.log('User:', response.rows[0]);
      return response.rows[0];
    })
    .catch((error) => {
      console.log(error.message);
    });
};

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function(id) {
  return pool
    .query(`SELECT * FROM users WHERE id = $1;`, [id])
    .then((response) => {
      if (Object.keys(response.rows[0]).length === 0) {
        console.log('Not a user');
        return null;
      }
      console.log('User:', response.rows[0]);
      return response.rows[0];
    })
    .catch((error) => {
      console.log(error.message);
    });
};

/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser = function(user) {
  return pool
    .query(
      `INSERT INTO users (name, email, password)
      VALUES ($1, $2, $3)
      RETURNING *;
      `, [user.name, user.email, user.password])
    .then(() => {
      console.log('Successfully added a user');
    })
    .catch((error) => {
      console.log(error.message);
    });
};

/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
const getAllReservations = function(guest_id, limit = 10) {
  return pool
    .query(
      `SELECT reservations.*, properties.*, avg(rating) as average_rating
      FROM reservations
      JOIN properties ON properties.id = property_id
      JOIN property_reviews ON reservations.id = reservation_id
      WHERE reservations.guest_id = $1
      GROUP BY  reservations.id, properties.id
      ORDER BY start_date
      LIMIT $2; 
      `, [guest_id, limit])
    .then((response) => {
      return response.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

/// Properties

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */
const getAllProperties = function(options, limit = 10) {
  return pool
    .query(`SELECT * FROM properties LIMIT $1;`, [limit])
    .then((result) => {
      return result.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function(property) {
  return pool
    .query(
      `INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, street, city, province, post_code, country, parking_spaces, number_of_bathrooms, number_of_bedrooms)
      VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
      RETURNING *;`, [property.owner_id,
    property.title,
    property.description,
    property.thumbnail_photo_url,
    property.cover_photo_url,
    property.cost_per_night,
    property.street,
    property.city,
    property.province,
    property.post_code,
    property.country,
    property.parking_spaces,
    property.number_of_bathrooms,
    property.number_of_bedrooms])
    .then((response) => {
      return response.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

module.exports = {
  getUserWithEmail,
  getUserWithId,
  addUser,
  getAllReservations,
  getAllProperties,
  addProperty,
};
