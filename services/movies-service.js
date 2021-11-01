let movies = [
    {_id: '123', title: 'Aliens', stars: 4.5},
    {_id: '234', title: 'Terminator', stars: 4.8},
    {_id: '345', title: 'Avatar', stars: 4.7}
];

module.exports = (app) => {
    const getAllMovies = (req, res) => res.json(movies);
    const deleteMovie = (req, res) => {
        const id = req.params['mid'];
        movies = movies.filter(m => m._id !== id);
        res.json(movies);
    };
    app.delete('/api/movies/:mid', deleteMovie);
    app.get('/api/movies', getAllMovies);
};
