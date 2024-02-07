INSERT INTO users (name, email, password) 
VALUES ('Ben', 'b@b.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Anthony', 'a@a.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Calvin', 'c@c.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

INSERT INTO properties (owner_id,title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code, active)
VALUES ('1', 'Broadway', 'description', 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg?auto=compress&cs=tinysrgb&h=350', 93051, 5, 1, 4, 'Brazil', 'Seasame Street', 'Londo', 'Ontario', 'A5W 7V1', true),
('2', 'Mickey Mouse Club House', 'description', 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg?auto=compress&cs=tinysrgb&h=350', 35051, 6, 4, 8, 'Canada', '1235 Street', 'Toronto', 'Ontario', 'A5W 7V1', true),
('3', 'Noot Noot Igloo', 'description', 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg?auto=compress&cs=tinysrgb&h=350', 25051, 2, 4, 6, 'USA', 'Hooligan Street', 'Queens', 'Ontario', 'A5W 7V1', true);

INSERT INTO reservations (start_date, end_date, property_id, guest_id)
VALUES ('2019-12-22', '2019-12-30', 2, 3),
('2015-09-15', '2015-10-02', 2, 3),
('2020-03-09', '2020-03-12', 3, 1);

INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message)
VALUES (3, 2, 1, 4, 'messages'),
(3, 2, 2, 3, 'messages'),
(1, 3, 3, 5, 'messages');