export const moviesResolvers = {
    Query: {
        async movies() {
            console.log('return movies')
            return [
                {
                    _id: 'some id',
                    title: "String"
                }
            ]
        }
    }
}