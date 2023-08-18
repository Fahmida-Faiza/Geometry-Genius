function calculateTriangleArea(){
    //get triangle base value
    const baseField = document.getElementById("triangle-base");
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);


    //get triangle height value
    const heightField = document.getElementById("triangle-height");
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);


    const area = 0.5 * base *height;
    console.log(area)

    //show area triangle

    const areaSpan = document.getElementById("triangle-area");
    areaSpan.innerText = area;
}

//reusable code added function in rectangle and paraligram
function calculateRectangleArea(){
 const width = getInputValue("rectangle-width");
 console.log(width)

 const length = getInputValue("reactangle-length");
 console.log(length)
 //area calculate
 const area = width * length;
 setElementInnerText("reactangle-area" , area);
}
//paralaligram
function calculateParallelogramArea(){
    const base = getInputValue("parallelogram-base");
    console.log(base)

    const height = getInputValue("parallelogram-height");
    console.log(height)
    //calculate area
    const area =base * height;
    setElementInnerText("parallelogram-area" ,area);
}

// get input value feild in number
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText =inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

//set span ,p,div etc text
function setElementInnerText(elementId , area){
    const element = document.getElementById(elementId)
    element.innerText = area;
}
