  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }, 
  {
    name: 'Michelle',
    profession: 'Developer',
    yrsExperience: 12
  }
];

// Totaling a specific object property
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience);

// Grouping by a property, and totaling it too
// {Developer: 12, Designer: 4} is what we want to achieve

let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession; 
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience; 
  }
  return acc;
}, {}); 

console.log(experienceByProfession); 

let professionMembers = teamMembers.reduce((acc, curr) => {
  let key = curr.profession; 
  if (!acc[key]) {
    acc[key] = [curr.name];
  } else {
    acc[key].push(curr.name);
  }
  return acc;
}, {})

console.log(professionMembers);

const justDevelopers = teamMembers.filter(member => member.profession === 'Developer');
console.log(justDevelopers); 

let mostExperiencedDeveloper = justDevelopers.reduce((acc, curr) => {
  if (curr.yrsExperience > acc.yrsExperience) {
    acc.name = curr.name; 
    acc.yrsExperience = curr.yrsExperience;
  };

  return acc;
})

console.log(mostExperiencedDeveloper);

let nameMostExperiencedDev = mostExperiencedDeveloper.name;
console.log(nameMostExperiencedDev);