/* JS объект */
const person= {
    name: "Anton",
    age: 36,
    skills: ["Javascript","HTML","CSS"],
    salary: 80000,
  };
  
  const jsonPers = JSON.stringify(person);
  console.log(jsonPers);