function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/uN5QiWhLI/model.json", modelReady);
}

function modelReady()
{
    clssifier.classify(gotResults);
}

function gotResults(error, results)
{
    console.log("Got Result");
}