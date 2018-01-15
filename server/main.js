import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

Meteor.startup(() => {
  // code to run on server at startup

  // const petSchema = new SimpleSchema({
  //   name: {
  //     type: String,
  //     min: 1,
  //     max: 200,
  //     optional: true
  //   },
  //   age: {
  //     type: Number,
  //     min: 0
  //   },
  //   contactNumber: {
  //     type: String,
  //     optional: true,
  //     regEx: SimpleSchema.RegEx.Phone
  //   }
  // });
  //
  // petSchema.validate({
  //   name: "Spot",
  //   age: 23,
  //   contactNumber: '9493424170'
  // });

  const employeeSchema = new SimpleSchema({
    name: {
      type: String,
      min: 1,
      max: 200
    },
    hourlyWage: {
      type: Number,
      min: 0
    },
    email: {
      type: String,
      regEx: SimpleSchema.RegEx.Email
    }
  });

  employeeSchema.validate({
    name: 'Gordon',
    hourlyWage: 35,
    email: 'gordon.chen94@gmail.com'
  })
});
