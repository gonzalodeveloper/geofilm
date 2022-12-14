const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema(
  {
    title: String,

    director: String,

    year: Number,

    plotLocal: String,

    awards: String,

    runtimeStr: String,

    releaseDate: String,

    writers: String,

    stars: String,

    genres: String,

    imDbRating: String,

    budget: String,

    cumulativeWorldwideGross: String,

    image: String,

    location: {
      type: {
        type: String
      },
      coordinates: [Number]
    },

    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User'
    },

    review: [{
      type: mongoose.Types.ObjectId,
      ref: 'Review'
    }]



  },

  {
    timestamps: true
  }


);


movieSchema.index({ location: '2dsphere' })
const Movie = mongoose.model('Movie', movieSchema)
module.exports = Movie;
