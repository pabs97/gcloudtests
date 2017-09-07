const gcloud = require('google-cloud')({
  projectId: 'speech-api-test-178122',
  keyFilename: 'apikey.json'
});
const vision = gcloud.vision();
const fs = require('fs');
const folder = 'testfiles/images';
let fullPath;
let opts = {
  verbose: true
};

// const vf = 'detectLandmarks';
// const vf = 'detectFaces';
// const vf = 'detectText';
// const vf = 'detectLabels';
const vf = 'detectLogos';

// Run on all files
// fs.readdir(folder, (err, files) => {
//   files.forEach(file => {
//     fullPath = folder + '/' + file;
//     vision[vf](fullPath, opts)
//       .then(data => {
//         console.log('file:', file, '\tdata:', data[0]);
//       });
//   });
// });

// Run on one file
vision[vf](folder + '/messi2.jpg')
  .then(data => {
    // console.log(data[0][0].features.lips);
    console.log(data[1].responses[0].logoAnnotations);
  });
