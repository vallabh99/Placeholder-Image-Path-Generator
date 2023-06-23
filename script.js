// console.log("Hello World!");

const select = document.querySelector('select');
const inputAll = document.querySelectorAll('input')
const myImg = document.querySelector('img');
const textArea = document.querySelector('textarea');

let urlObj = {};

const removeHashTag=(str)=>{
    return str.replace("#","");
}

const addPlus = (str)=>{
    return str.split(" ").join("+");
}

function createAB(){

    urlObj.size = select.value;
    urlObj.text = addPlus(inputAll[0].value);
    urlObj.bgClr = removeHashTag(inputAll[1].value);
    urlObj.txtClr = removeHashTag(inputAll[2].value); 

 let urlPath = `https://via.placeholder.com/${urlObj.size}/${urlObj.bgClr}/${urlObj.txtClr}/?text=${urlObj.text}`

   myImg.src=urlPath;
   textArea.value=urlPath;

   textArea.focus();
    textArea.select();

    navigator.clipboard.writeText(textArea.value)
            .then(() => {
                console.log('Text copied to clipboard');
            })
            .catch(err => {
                console.error('Error copying text: ', err);
            });

}


inputAll.forEach((curElement)=>curElement.addEventListener('change', createAB));

select.addEventListener('change', createAB);

console.log(inputAll)