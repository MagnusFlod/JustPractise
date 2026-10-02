// Modellen skal lære seg at Y∈{0,1} Y kan ha verdien 0 eller 1

let weight1 = 0.5;
let weight2 = 0.5;

let weight3 = -0.3;
let weight4 = 0.7;

let weight5 = 0.5;
let weight6 = 0.5;

let bias1 = 0.5;
let bias2 = 0.5;

// Selve modellen. Denne tar to inputs
// Første input ganges med første vekt
// Andre input ganges med andre vekt
// Resultatene av multiplikasjonene adderes
function aiModel(input1, input2, weight1, weight2)
{
    return input1 * weight1 + input2 * weight2 + bias1;
}

function aiModel2(input1, input2, weight3, weight4)
{
    return input1 * weight3 + input2 * weight4 + bias2;
}

// Sigmoid funksjon. Denne tar resultatet av aiModel og regner ut et tall mellom 1 og 0 basert på dette resultatet
function sigmoid(z)
{
    return 1 / (1 + Math.exp(-z));
}

/*
function classify(prediction)
{
    if (prediction < 0.5)
    {
        return 0;
    }
    else
    {
        return 1;
    }
}
*/

// Flere treningspar som skal matche mønsteret Y∈{0,1}

let trainingData =
[
    {
        input1: 0,
        input2: 0,
        target: 0
    },
    {
        input1: 1,
        input2: 0,
        target: 1
    },
    {
        input1: 0,
        input2: 1,
        target: 1
    },
    {
        input1: 1,
        input2: 1,
        target: 0
    }
];


// Loss funksjon
function loss(prediction, target)
{
    return (target - prediction) ** 2;
}


// Læringsrate
let learningRate = 0.01;


// Første gradient
function gradient1(input1, input2, target, weight1, weight2)
{
    // Kaller aiModel som returnerer weight1 * input1 + weight2 * input2
    let z = aiModel(input1, input2, weight1, weight2);

    // Tar resultatet av z(aiModel) og utfører sigmoid på det. Hva blir dette resultatet i et tall mellom 1 og 0
    let prediction = sigmoid(z);

    // Hvor mye endrer loss seg når prediction endres
    let predictionError = -2 * (target - prediction);

    // Gradient på sigmoid. Hvor mye endrer sigmoid seg når z endrer seg
    let sigmoidGradient = prediction * (1 - prediction);

    // Finner den faktiske gradienten. Hvor mye loss gir en endring av vekt
    return sigmoidGradient * predictionError * input1;
}


// Andre gradient
function gradient2(input1, input2, target, weight1, weight2)
{
    let z = aiModel(input1, input2, weight1, weight2);

    let prediction = sigmoid(z);

    let predictionError = -2 * (target - prediction);

    let sigmoidGradient = prediction * (1 - prediction);

    return sigmoidGradient * predictionError * input2;
}

function gradient3(input1, input2, target, weight3, weight4)
{
    let z = aiModel2(input1, input2, weight3, weight4);

    let prediction = sigmoid(z);

    let predictionError = -2 * (target - prediction);

    let sigmoidGradient = prediction * (1 - prediction);

    return sigmoidGradient * predictionError * input1;
}

function gradient4(input1, input2, target, weight3, weight4)
{
    let z = aiModel2(input1, input2, weight3, weight4);

    let prediction = sigmoid(z);

    let predictionError = -2 * (target - prediction);

    let sigmoidGradient = prediction * (1 - prediction);

    return sigmoidGradient * predictionError * input2;
}

function gradient5(prediction, prediction2, target, weight5, weight6)
{
    let combinedResult = prediction * weight5 + prediction2 * weight6;

    let finalPrediction = sigmoid(combinedResult);

    let predictionError = -2 * (target - finalPrediction);

    let sigmoidGradient = finalPrediction * (1 - finalPrediction);

    return sigmoidGradient * predictionError * prediction;
}

function gradient6(prediction, prediction2, target, weight5, weight6)
{
    let combinedResult = prediction * weight5 + prediction2 * weight6;

    let finalPrediction = sigmoid(combinedResult);

    let predictionError = -2 * (target - finalPrediction);

    let sigmoidGradient = finalPrediction * (1 - finalPrediction);

    return sigmoidGradient * predictionError * prediction2;
}

function gradientBias1(input1, input2, target, weight1, weight2)
{
    let z = aiModel(input1, input2, weight1, weight2);

    let prediction = sigmoid(z);

    let predictionError = -2 * (target - prediction);

    let sigmoidGradient = prediction * (1 - prediction);

    return sigmoidGradient * predictionError;
}

function gradientBias2(input1, input2, target, weight3, weight4)
{
    let z = aiModel2(input1, input2, weight3, weight4);

    let prediction = sigmoid(z);

    let predictionError = -2 * (target - prediction);

    let sigmoidGradient = prediction * (1 - prediction);

    return sigmoidGradient * predictionError;
}

// Trenings-løkke
for (let i = 0; i < 20; i++)
{
    // Henter ett treningspar fra trainingData
    let data = trainingData[i % trainingData.length];

    // Henter input1, input2 og target fra treningsparet
    let input1 = data.input1;
    let input2 = data.input2;
    let target = data.target;

    // Kaller matematikken i aiModel
    let result = aiModel(input1, input2, weight1, weight2);

    let result2 = aiModel2(input1, input2, weight3, weight4);

    
    // Bruker sigmoid på dette resultatet
    let prediction = sigmoid(result);
    
    let prediction2 = sigmoid(result2);
    
    let combinedResult = prediction * weight5 + prediction2 * weight6;
    
    let finalPrediction = sigmoid(combinedResult);

    let outputGradient = -2 * (target - finalPrediction) * finalPrediction * (1 - finalPrediction);

    let hiddenGradient1 = outputGradient * weight5;

    let hiddenSigmoidGradient1 = prediction * (1 - prediction);

    // Viser hvor høy loss er på foreløpig prediction
    let error = loss(finalPrediction, target);

    let error2 = loss(prediction2, target);

    // Viser helningen til begge gradients
    let currentGradient1 = gradient1(input1, input2, target, weight1, weight2);

    let currentGradient2 = gradient2(input1, input2, target, weight1, weight2);

    let currentGradient3 = gradient3(input1, input2, target, weight3, weight4);

    let currentGradient4 = gradient4(input1, input2, target, weight3, weight4);

    let currentGradient5 = gradient5(prediction, prediction2, target, weight5, weight6);

    let currentGradient6 = gradient6(prediction, prediction2, target, weight5, weight6);

    let currentGradientBias1 = gradientBias1(input1, input2, target, weight1, weight2);

    let currentGradientBias2 = gradientBias2(input1, input2, target, weight3, weight4);

    // Justerer begge vekter
    weight1 = weight1 - (currentGradient1 * learningRate);

    weight2 = weight2 - (currentGradient2 * learningRate);

    weight3 = weight3 - (currentGradient3 * learningRate);

    weight4 = weight4 - (currentGradient4 * learningRate);

    weight5 = weight5 - (currentGradient5 * learningRate);

    weight6 = weight6 - (currentGradient6 * learningRate);

    bias1 = bias1 - (currentGradientBias1 * learningRate);

    bias2 = bias2 - (currentGradientBias2 * learningRate);

    console.log("Input1:", input1);
    console.log("Input2:", input2);
    console.log("Target:", target);

    console.log("Prediction:", prediction);
    console.log("Loss:", error);
    console.log("Loss2:", error2);

    console.log("Gradient1:", currentGradient1);
    console.log("Gradient2:", currentGradient2);
    console.log("Gradient3:", currentGradient3);
    console.log("Gradient4:", currentGradient4);
    console.log("Gradient5:", currentGradient5);
    console.log("Gradient6:", currentGradient6);

    console.log("\n");

    console.log("HiddenGradient1:", hiddenGradient1);

    console.log("\n");

    console.log("HiddenSigmoidGradient1:", hiddenSigmoidGradient1);

    console.log("\n");

    console.log("Weight1:", weight1);
    console.log("Weight2:", weight2);
    console.log("Weight3:", weight3);
    console.log("Weight4:", weight4);
    console.log("Weight5:", weight5);
    console.log("Weight6:", weight6);
    console.log("Bias1:", bias1);
    console.log("Bias2:", bias2);
    console.log("OutputGradient:", outputGradient);
    console.log("CombinedResult:", combinedResult);

    console.log("FinalPrediction:", finalPrediction);

    console.log("----------------------");
}