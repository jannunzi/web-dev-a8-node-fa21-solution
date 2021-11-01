let movies = [
    {_id: '123', title: 'Aliens', stars: 4.5},
    {_id: '234', title: 'Terminator', stars: 4.8},
    {_id: '345', title: 'Avatar', stars: 4.7}
];

module.exports = (app) => {
    const getAllMovies = (req, res) => res.json(movies);
    app.get('/api/movies', getAllMovies);
};
