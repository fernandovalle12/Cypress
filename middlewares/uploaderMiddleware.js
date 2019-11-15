var multer  = require('multer');
var path = require('path');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/')
  },
  filename: function (req, file, cb) {
    var fileExt = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + Date.now() + fileExt);
  }
});

var upload = multer({ storage: storage });

module.exports = upload;