-- Show all reservations for a user.
-- Select the reservation id, property title, reservation start_date, property cost_per_night and the average rating of the property. You'll need data from both the reservations and properties tables.
-- The reservations will be for a single user, so just use 1 for the user_id.
-- Order the results from the earliest start_date to the most recent start_date.
-- Limit the results to 10.

SELECT reservations.id, title, cost_per_night, start_date,  avg(rating) as average_rating
FROM reservations
JOIN properties ON properties.id = property_id
JOIN property_reviews ON reservations.id = reservation_id
WHERE reservations.guest_id = '1'
GROUP BY  reservations.id, title, cost_per_night
ORDER BY start_date
LIMIT 10;