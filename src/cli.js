const { Command } = require('commander');
const mongoose = require('mongoose');
const dbUrl = process.env.MONGO_URL || 'mongodb://localhost/gradtrak';   
const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const connect = async () => {
  await mongoose.connect(dbUrl, CONFIG);

  console.log('MongoDB connected');

  return mongoose.connection;
};
const Course = require('../models/course');


module.exports.program = program = new Command();

program.name('gradtrak');

program.command('tag <tag-id> <course-ids...>').action(async(tagId, courseIds) => {
  await connect();
  let courses = await Course.find({}, { _id: 0, __v: 0 })
  courses = courses.filter(course => {
    return courseIds.includes(course.id);
  })
  courses.forEach(course => {
    course.tagIds.push(tagId);
    course.save();
    console.log(`tagged ${course.id} with ${tagId}`)
  })
})
