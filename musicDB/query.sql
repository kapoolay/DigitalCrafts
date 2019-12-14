SELECT * FROM albums 
INNER JOIN tracks ON tracks.album_id = albums.id
INNER JOIN songs ON tracks.song_id = songs.id
WHERE albums.title = 'Metallica'




SELECT artists.name AS "Artist Name", albums.title AS "Album Title", albums.year AS "Release Year"
FROM albums
INNER JOIN artists ON albums.artist_id = artists.id
WHERE artists.name LIKE '%ca'