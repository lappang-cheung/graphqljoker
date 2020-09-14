import mongoose, { Schema } from 'mongoose';

export const MoviesSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

export default mongoose.models.movies || mongoose.model('movies', MoviesSchema);