import mongoose from "mongoose";
const Schema = mongoose.Schema;

const DOCUMENT_NAME = 'Film';
const COLLECTION_NAME = 'Films';

const filmSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    avatarImage: {
        type: String,
        required: true
    },
    coverImage: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 10
    },
    duration: {
        type: Number,
        required: true
    },
    releaseDate: {
        type: Date,
        required: true
    },
    ageLimit: {
        type: Number,
        required: true
    },
    tagId: {
        type: Schema.Types.ObjectId,
        ref: 'Tag',
        required: true
    },
    statisticId: {
        type: Schema.Types.ObjectId,
        ref: 'Statistic',
        required: true
    }
}, {
    timestampsL: true,
    collection: COLLECTION_NAME,
});

export default mongoose.model(DOCUMENT_NAME, filmSchema);