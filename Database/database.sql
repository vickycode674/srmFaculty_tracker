CREATE DATABASE CollegeTimetable;

USE CollegeTimetable;

CREATE TABLE Days (
  day_id INT AUTO_INCREMENT PRIMARY KEY,
  day_name VARCHAR(50) NOT NULL
);

INSERT INTO Days (day_name) VALUES
('Monday'),
('Tuesday'),
('Wednesday'),
('Thursday'),
('Friday');

CREATE TABLE Periods (
  period_id INT AUTO_INCREMENT PRIMARY KEY,
  period_number INT NOT NULL
);
-- Inserting period numbers into the Periods table
INSERT INTO Periods (period_number) VALUES
(1),
(2),
(3),
(4),
(5),
(6),
(7),
(8);

CREATE TABLE Faculty (
  faculty_id INT AUTO_INCREMENT PRIMARY KEY,
  faculty_name VARCHAR(100) NOT NULL,
  faculty_number VARCHAR(20) NOT NULL,
  faculty_subject_name VARCHAR(100) NOT NULL
);

ALTER TABLE timetable DROP FOREIGN KEY timetable_ibfk_3;

DROP TABLE Faculty; 

INSERT INTO Faculty (faculty_name,faculty_number,faculty_subject_name) VALUES
("S.Urmeela","+91 97919 58868","Data Center networking"),
("Dr.Kartheek","N/A","Cloud architecture"),
("Dr.R Neelaaveni","+91 9940 910598","Cryptography"),
("Mr.A.Madhu","+91 98418 46951","Formal Language Automata"),
("Dr.K.Ramachandran","+91 95663 20640","Probablity and Queueing Theory"),
("Mr.Iyyapan","+91 88073 43457" ,"Analytical and logical Thinkings skills"),
("Dr.G.Ramya","+91 98407 66774","Sensors and Transducer"),
("N/A(class abonded)","N/A","N/A"),
("S.Urmeela","+91 97919 58868","Data Center networking lab (MLCP)"),
("Mr.A.Madhu","+91 98418 46951","Seminar lab [BMS 501]");





CREATE TABLE Timetable (
  timetable_id INT AUTO_INCREMENT PRIMARY KEY,
  day_id INT,
  period_id INT,
  faculty_id INT,
  FOREIGN KEY (day_id) REFERENCES Days(day_id),
  FOREIGN KEY (period_id) REFERENCES Periods(period_id),
  FOREIGN KEY (faculty_id) REFERENCES Faculty(faculty_id) 
);

DROP table Timetable;

INSERT INTO Timetable(day_id,period_id,faculty_id) VALUES
(1,1,8),(1,2,8),(1,3,6),(1,4,6),(1,5,5),(1,6,8),(1,7,8),(1,8,8),
(2,1,5),(2,2,1),(2,3,7),(2,4,2),(2,5,8),(2,6,8),(2,7,8),(2,8,8),
(3,1,7),(3,2,5),(3,3,1),(3,4,4),(3,5,9),(3,6,9),(3,7,10),(3,8,10),
(4,1,2),(4,2,8),(4,3,4),(4,4,3),(4,5,1),(4,6,5),(4,7,8),(4,8,8),
(5,1,3),(5,2,7),(5,3,2),(5,4,4),(5,5,8),(5,6,8),(5,7,8),(5,8,8);




SELECT * FROM periods;

SELECT  Faculty.faculty_name,faculty_number
FROM Timetable
JOIN Days ON Timetable.day_id = Days.day_id
JOIN Periods ON Timetable.period_id = Periods.period_id
JOIN Faculty ON Timetable.faculty_id = Faculty.faculty_id
WHERE Days.day_name = 'Tuesday' AND Periods.period_number = 2;
