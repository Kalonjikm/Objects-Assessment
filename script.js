const ol = document.querySelector("ol");

const movies = [
    {
        name: "Chronicle",
        year: 2012,
        director: "Josh Trank",
        picture: "https://m.media-amazon.com/images/M/MV5BYmRkY2RhM2QtMjQwNC00NDVjLTk4MTQtZGNiMjYxMmJmODVhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg"
    }, 
    {
        name: "Speed Racer",
        year: 2008,
        director: "Lilly & Lana Wachowski",
        picture: "https://pbs.twimg.com/media/FvO6zraXgAUjEHI.jpg"
    }, 
    {
        name: "Little Miss Sunshine",
        year: 2006,
        director: "Valerie Faris & Johnathan Dayton",
        picture: "https://m.media-amazon.com/images/M/MV5BMTgzNTgzODU0NV5BMl5BanBnXkFtZTcwMjEyMjMzMQ@@._V1_.jpg"
    }
];

const template = movies.map(movie => `
    <li>
        <p>Name: ${movie.name}</p>
        <p>Year: ${movie.year}</p>
        <p>Director(s): ${movie.director}</p>
        <img src="${movie.picture}" alt="Movie Poster" style="width:200px;height:300px;">
    </li>
`);

ol.innerHTML = template.join(" ");