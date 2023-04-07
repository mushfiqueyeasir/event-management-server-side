const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
  {
    eventTitle: {
      type: String,
      required: [true, "Please Provide Event Title!"],
      minLength: [3, "Event Title Must Be At Least 3 Characters!"],
      maxLength: [100, "Event Title Must Be Maximum 100 Characters!"],
    },

    eventDescription: {
      type: String,
      required: [true, "Please Provide Event Description!"],
      minLength: [3, "Event Description Must Be At Least 3 Characters!"],
    },
    eventLocation: {
      type: String,
      required: [true, "Please Provide Event Location!"],
      minLength: [3, "Event Location Must Be At Least 3 Characters!"],
      maxLength: [30, "Event Location Must Be Maximum 30 Characters!"],
    },
    eventCreator: {
      type: String,
      required: [true, "Please Provide Event Host Email!"],
      match: [
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Please Enter A Valid Email Address!",
      ],
    },
    startDate: {
      type: Date,
      required: [true, "Please Provide Event Start Date!"],
    },
    endDate: {
      type: Date,
      required: [true, "Please Provide Event Start Date!"],
    },
    startTime: {
      type: String,
      required: [true, "Please Provide Event Start Time!"],
      maxLength: [5, "Maximum  Start Time Must Be 5 Character"],
    },
    endTime: {
      type: String,
      required: [true, "Please Provide Event Start Time!"],
      maxLength: [5, "Maximum End Time Must Be 5 Character"],
    },
    eventView: {
      type: Number,
      min: [0, "Minimum Time Must Be 0"],
      default: 0,
    },
    eventAttendees: {
      type: [
        {
          email: {
            type: String,
            match: [
              /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              "Please Enter A Valid Email Address!",
            ],
          },
          avatar: { type: String },
        },
      ],
    },
  },
  { timestamps: true }
);
const events = mongoose.model("events", eventSchema);
module.exports = events;
