
//Form with validation connected to html and css start ..

const form = document.getElementById('my-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = form.elements['name'].value;
  const email = form.elements['email'].value;
  const password = form.elements['password'].value;

  if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
    errorMessage.textContent = 'All fields are required';
    errorMessage.style.display = 'block';
    return;
  }

  // the form won't accept pressing the enter button unless password meets requirements 
  if (password.length < 6) {
    errorMessage.textContent = 'Password must be at least 6 characters long';
    errorMessage.style.display = 'block';
    return;
  }

  // Form is valid, submit it
  form.submit();
});



//Form with validation completion


//Prompt asking how old they are /responsive javascript 
function checkAge() {
    let age = prompt("How old are you?");
    if (age >= 18) {
      alert("Surprise! are old enough for the adult package");
    } else {
      alert("Surprise! you are the perfect age for our youth package");
    }
  }

  //adding RAPID API FOR LOVERS test game
  const url = 'https://love-calculator.p.rapidapi.com/getPercentage?sname=Alice&fname=John';
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': '1d6c5d4029msha242d04c8a2f71ep1cea29jsnde5f73d3e49f',
          'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
      }
  };
  
  try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
  } catch (error) {
      console.error(error);
  }
