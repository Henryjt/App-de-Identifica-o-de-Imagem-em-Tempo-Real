function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet',modelLoaded)
}

function modelLoaded() {
    console.log('Model Loaded');
}


function draw() {
  image(video, 0, 0, 300, 300);
  classifier.classify(video, gotResult)
}


function gotResult(error, results) {

  if (error == true){
    console.log("deu erro")
  }else{
    console.log(results)
    nome = results[0].label
    confianca = results[0].confidence
    if(confianca > 0.20){
    document.getElementById("objeto").innerHTML = nome;
    document.getElementById("precisão").innerHTML = confianca * 100 + "%";
    }
  }
}