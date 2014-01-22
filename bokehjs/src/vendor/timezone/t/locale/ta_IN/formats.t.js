#!/usr/bin/env node
require("../../proof")(5, function (tz, equal) {
  var tz = tz(require("timezone/ta_IN"));
  // ta_IN date representation
  equal(tz("2000-09-03", "%x", "ta_IN"), "ஞாயிறு 03 செப்டம்பர் 2000", "date format");

  // ta_IN time representation
  equal(tz("2000-09-03 08:05:04", "%X", "ta_IN"), "08:05:04  UTC", "long time format morning");
  equal(tz("2000-09-03 23:05:04", "%X", "ta_IN"), "11:05:04  UTC", "long time format evening");

  // ta_IN date time representation
  equal(tz("2000-09-03 08:05:04", "%c", "ta_IN"), "ஞாயிறு 03 செப்டம்பர் 2000 08:05:04 காலை UTC", "long date format morning");
  equal(tz("2000-09-03 23:05:04", "%c", "ta_IN"), "ஞாயிறு 03 செப்டம்பர் 2000 11:05:04 மாலை UTC", "long date format evening");
});