const mongoose = require("mongoose");

const GsiSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  linkedin: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  rating: {
    type: Number,
    required: false,
  },
  ratingCount: {
    type: Number,
    required: false,
  },
  classesTaught: {
    type: Array,
    required: false,
  },
  pronouns: {
    type: String,
    required: false,
  },
  major: {
    type: String,
    required: false,
  },
  semesters: {
    type: Array,
    required: true,
  },
  comments: {
    type: Array,
    required: true,
  },
});

// export model gsi with GsiSchema
module.exports = mongoose.model("GSI", GsiSchema);

// new module.exports({
//   name: "Mackenzie Moffit",
//   email: "hello@ca.edu",
//   linkedin: "linkedin.com",
//   rating: 4,
//   ratingCount: 20,
//   classesTaught: ["math"],
//   pronouns: "aksdjf",
//   major: "asdf",
//   semesters: ["1", "2"],
//   comments: [
//     {
//       id: 1,
//       name: "joe",
//       rating: 5,
//       review: "good teacher",
//     },
//     {
//       id: 2,
//       name: "jo",
//       rating: 1,
//       review: "bad teacher",
//     },
//   ],
// }).save();
