import Movies from '../movies';

export const movieResolvers = {
    Query: {
        async movies() {
            try {
                const movies = await Movies.find();
                return movies;
            } catch (err) {
                console.error(err);
            }
        }
    }
};