-- Get a list of the most visited cities
SELECT city, COUNT(reservations) as total_reservations
FROM properties
JOIN reservations ON property_id = properties.id
GROUP BY city
ORDER by total_reservations DESC;