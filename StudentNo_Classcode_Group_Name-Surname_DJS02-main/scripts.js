const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

//grab div to be opened for critical error
const newWindow = document.getElementById("critical-error")

//variable to store division result
let answer = 0;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  // console.log( dividend)
  // console.log( divider)
  
  if(!(dividend === '' || divider==='')){

    answer = dividend / divider;
  
   
    if(isNaN(answer)){
      
      newWindow.style.display = 'block';
    }
    else{

      if(divider == 0){
          result.innerHTML = '<p class="error-message">Division not performed. Invalid number provided. Try again</p>' ;
          console.error('Invalid number provided');
     }
     else{
    
          if(answer>=1){
             answer = Math.floor(answer);

             result.innerText = answer;
         }
         else{
             result.innerText = answer
             }

       }

      }
     
    }
  else{
    result.innerHTML = `<p class="error-message"> Division not performed. Both values are required in inputs. Try again</p>`
  }
});