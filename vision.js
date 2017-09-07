const gcloud = require('google-cloud')({
  projectId: 'speech-api-test-178122',
  keyFilename: 'apikey.json'
});
const vision = gcloud.vision();

console.log("started...");

let gcs = gcloud.storage();
let otherGcs = gcloud.storage({
  keyFilename: '/path/to/other/keyfile.json'
});

const file = 'testfiles/images/' + 'pablo2.jpg';

// not sure if this works
// vision.annotate(file).then(data => {
//   let annotations = data[0];
//   let apiResponse = data[1];
//   console.log(data);
// }, data => {
//   console.log("error", data);
// });

// vision.detectText('file', (err, text, apiResponse) => {
//   if (err) {
//     console.log("error", err.message);
//   } else {
//     console.log(text, apiResponse);
//   }
// });

vision.detectFaces(file, (err, results, apiResponse) => {
  if (err) {
    console.log("error", err.message);
  } else {
    // console.log(faces);
    const faces = results;
    console.log('Image:', file);
    console.log('Faces:');
    faces.forEach((face, i) => {
      console.log(face);
      // console.log(`Face #${i + 1}:`);
      // console.log(`Joy: ${face.joyLikelihood}`);
      // console.log(`Anger: ${face.angerLikelihood}`);
      // console.log(`Sorrow: ${face.sorrowLikelihood}`);
      // console.log(`Surprise: ${face.surpriseLikelihood}`);
    });
  }
});

console.log("running");

/**
 * Face Detection
 */









// The path to the local image file, e.g. "/path/to/image.png"
const fileName = 'testfiles/images/pablo1.jpg';

// vision.faceDetection({ source: { filename: fileName } })
//   .then((results) => {
//     const faces = results[0].faceAnnotations;

//     console.log('Faces:');
//     faces.forEach((face, i) => {
//       console.log(`  Face #${i + 1}:`);
//       console.log(`    Joy: ${face.joyLikelihood}`);
//       console.log(`    Anger: ${face.angerLikelihood}`);
//       console.log(`    Sorrow: ${face.sorrowLikelihood}`);
//       console.log(`    Surprise: ${face.surpriseLikelihood}`);
//     });
//   })
//   .catch((err) => {
//     console.error('ERROR:', err);
//   });



// detect logos
vision.logoDetection({ source: { filename: fileName } })
  .then((results) => {
    const logos = results[0].logoAnnotations;
    console.log('Logos:');
    logos.forEach((logo) => console.log(logo));
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });