import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

const combinations = new Map();
const possible_values = pronoun.length * adj.length * noun.length


function combos(array1 ,array2, array3)
{
  let iterator= 0;
  for(const value1 of array1)
  {
    for(const value2 of array2)
    {
      for(const value3 of array3)
      {
        
        combinations.set(iterator,`${value1} ${value2} ${value3}`);
        iterator++;
      }
    }
  }

  return Array.from(combinations.values());

}


window.onload = function()
{
  const sentences = combos(pronoun, adj, noun); // Store return value
  const para = document.getElementById('combos');
  para.textContent = sentences.join('\n');

};
