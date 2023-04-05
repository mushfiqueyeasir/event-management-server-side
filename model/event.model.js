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
      type: Number,
      required: [true, "Please Provide Event Start Time!"],
      min: [1, "Minimum Time Must Be 1 o'clock"],
      max: [24, "Maximum Time Must Be 24 o'clock"],
    },
    endTime: {
      type: Number,
      required: [true, "Please Provide Event Start Time!"],
      min: [1, "Minimum Time Must Be 1 o'clock"],
      max: [24, "Maximum Time Must Be 24 o'clock"],
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
