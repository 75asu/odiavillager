const mongoose = require('mongoose');

const seriesModel = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
    },
    director: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Director is required'],
        ref: "Directors"
    },
    description: {
        type: String,
        default: "",
        require: false
    },
    releaseDate: {
        type: String,
        required: [true, 'Release Date is required'],
    },
    seasons: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seasons'
    }],
    genres: {
        type: [String],
        enum: [
            'action',
            'comedy',
            'drama',
            'horror',
            'science fiction',
            'fantasy',
            'romance',
            'thriller',
            'mystery',
            'documentary',
            'adventure',
            'crime',
            'musical',
            'western',
            'animation',
            'war'
        ],
        required: [true, 'Genres is required'],
    },
    category: {
        type: [String],
        enum: [
            'action',
            'comedy',
            'drama',
            'horror',
            'science fiction',
            'fantasy',
            'romance',
            'thriller',
            'mystery',
            'documentary',
            'adventure',
            'crime',
            'musical',
            'western',
            'animation',
            'war'
        ],
        required: [true, 'Category is required']
    },
    country: {
        type: String,
        required: [true, 'Country is required']
    },
    language: {
        type: String,
        required: [true, 'Language is required']
    },
    ageRating: {
        type: String,
        default: null
        // required: [true, 'Age Rating is required']
    },
    //! Must change
    productionCompany: {
        type: String,
        default: null
        // required: [true, 'Production Company is required']
    },
    rottenRating: {
        type: Number,
        required: [true, 'Rotten Rating is required']
    },
    imdbRating: {
        type: Number,
        required: [true, 'IMDB Rating is required']
    },
    awards: [{
        name: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        }
    }],
    boxOffice: {
        budget: {
            type: Number,
            // required: true
        },
        gross: {
            type: Number,
            // required: true
        }
    },
    top250rank: {
        type: Number,
        required: false,
        min: 1,
        max: 250
    },
    pictures: {
        type: [String],
        required: false
    },
    thumbnail: {
        type: String,
        required: [true, 'Thumbnail is required']
    },
    cover: {
        type: String,
        required: [true, 'Cover is required!']
    },
    trailer: {
        type: String,
        required: [true, 'Trailer is required']
    },
    releaseStatus: {
        type: String,
        enum: ['now showing', 'coming soon', 'expired'],
        // required: [true, 'Release Status is required']
        default: 'now showing'
    },
    actors: {
        type: [mongoose.Schema.Types.ObjectId],
        default: [],
        required: false,
        ref: "Actors"
    },
});

module.exports = mongoose.model('Series', seriesModel);