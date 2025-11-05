let vote =  Promise((resolve, reject) => {
    if (age >= 18) {
      resolve(" You are eligible to vote!");
    }
     else  (age < 18)   
     {
     reject(" You are not eligible to vote (below 18).");
    }
  });