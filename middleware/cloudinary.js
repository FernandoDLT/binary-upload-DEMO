const cloudinary = require("cloudinary").v2;

require("dotenv").config({ path: "./config/.env" });

cloudinary.config({ 
  cloud_name: 'one100devs', 
  api_key: '436478914517416',
  // api_secret: process.env.API_SECRET,
  api_secret: 'UOId4CmTCIqoJSkvnEbbsuoFbmw' 
});


// cloudinary.config({ 
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
//   api_key: process.env.CLOUDINARY_API_KEY, 
//   api_secret: process.env.CLOUDINARY_API_SECRET 
// });



// cloudinary.config({ 
//   cloud_name: 'one100devs', 
//   api_key: '674222146271512', 
//   api_secret: '***************************' 
// });


// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET,
// });

module.exports = cloudinary;
