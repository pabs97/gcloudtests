const gcloud = require('google-cloud')({
  projectId: 'speech-api-test-178122',
  keyFilename: 'apikey.json'
});
const vision = gcloud.vision();

console.log("started...");

let gcs = gcloud.storage();
var otherGcs = gcloud.storage({
  keyFilename: '/path/to/other/keyfile.json'
});
let bucket = gcs.bucket('photos');



console.log("running");



