--BAGIAN A--
CREATE DATABASE db_akademik;
USE db_akademik;
CREATE TABLE siswa (
    id_siswa INT AUTO_INCREMENT Primary key,
    nama VARCHAR (100) not null,
    kelas VARCHAR(50),
    umur INT
);
CREATE TABLE mata_pelajaran (
    id_mapel INT AUTO_INCREMENT Primary key,
    nama_mapel VARCHAR (100) not null
);
CREATE TABLE nilai (
    id_nilai INT Primary key,
    id_siswa INT ,
    id_mapel INT ,
    nilai INT,
    Foreign key (id_siswa) REFERENCES siswa(id_siswa),
    Foreign key (id_mapel) REFERENCES mata_pelajaran(id_mapel)
);

--BAGIAN B--
INSERT INTO siswa (nama, kelas, umur)
VALUE ('andi','12 IPA','17'),('budi','12 IPS','18'),('citra','11 IPA','16');

INSERT INTO mata_pelajaran 
VALUE ('matematika','fisika','ekonomi');



