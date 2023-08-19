function calculateTriangleArea(){
  //get triangle base value
  const baseField = document.getElementById("triangle-base");
  const baseValueText = baseField.value;
  const base = parseFloat(baseValueText);

  //get triangle height value
  const heightField = document.getElementById("triangle-height");
  const heightValueText = heightField.value;
  const height = parseFloat(heightValueText);

  const area = 0.5 * base * height;
  console.log(area);

  //show area triangle

  const areaSpan = document.getElementById("triangle-area");
  areaSpan.innerText = area;
//
  addToCalculationEntry("triangle", area);
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

 //add to calculation entry
  addToCalculationEntry("rectangle", area);
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



    //add to calculation entry
    addToCalculationEntry('Parallelogram' ,area);
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






//add to calculation entry
// 1.get the element 
//2. create an element you want to add
//3.set innerhtml  it will bedynamic template string 
function addToCalculationEntry(areaType ,area){
    console.log('addimg soon')
    const calculationEntry = document.getElementById("calculation-entry");
//dynamic 1,2,3
const count = calculationEntry.childElementCount;

    const p =document.createElement('p');
    p.classList.add('my-4');//margin gap 
    // p.innerHTML = areaType + ' ' +  area;
    p.innerHTML = `${count + 1}. ${areaType}  ${area} cm<sup>2</sup> <button class="btn btn-success">convert</button>`;
    calculationEntry.appendChild(p);
}