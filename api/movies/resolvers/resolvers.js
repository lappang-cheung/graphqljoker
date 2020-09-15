export const movieResolvers = {
    Query: {
        async movies() {
            console.log('return movies')
            return [
                {
                    _id: 'some id',
                    title: "Joker 1",
                    quote: "I am happy man",
                    line: "Some some some",
                    trailer: "www.youtube.com"
                }
            ]
        }
    }
}