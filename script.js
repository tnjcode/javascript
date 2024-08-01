let video = document.getElementById("video");
let canvas = document.body.appendChild(document.createElement("canvas"));
let ctx = canvas.getContext("2d")

let width = 1280;
let height = 720;

const startSteam = () => {
    console.log("------start stream------");
    navigator.mediaDevices.getUserMedia({
        video : {width, height},
        audio : false
    }).then((stream) => {video.srcObject = stream});  
}

console.log(faceapi.nets);

console.log("------start load models------");
Promise.all([
    faceapi.nets.ageGenderNet.loadFromUri('models'),
    faceapi.nets.ssdMobilenetv1.loadFromDisk('./models'),
    faceapi.nets.tinyFaceDetector.loadFromUri('models'),
    faceapi.nets.facelandmark68Net.loadFromUri('models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('models'),
    faceapi.nets.faceExpressionNet.loadFromUri('models')
]).then(startSteam);

