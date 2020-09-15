import Movies from '../movies';

export const movieMutations = {
    Mutation: {
        async addMovie(_, { movie }) {
            try {
                const newMovie = await Movies.create({
                    ...movie
                })

                return newMovie
            } catch (err) {
                console.error(err)
            }
        }
    }
}