const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

 /*  companies.forEach(function(Company,index,companies){
console.log(Company.category);
  });


  companies.forEach(company => {
  console.log(company.category);    
  }); */

  //filter vs for loop

/* 
const canDrink=[];
  for(let i=0;i<ages.length;i++){
      if(ages[i]<18){
console.log(ages[i]);
canDrink.push(ages[i]);


  }}
  console.log(canDrink);


  const canDrinki= ages.filter(function(age){
if(age>18){
    return true;
}

  })
console.log(canDrinki);
  const canDrink2=ages.filter(age=>age>=21);
  console.log(canDrink2);


// get 80's companies
const eightiescomapny= companies.filter(company=>company.start>=1980 && company.start<=1990);

console.log(eightiescomapny);

//lasted 10 years
const lasted10years= companies.filter(company=>company.end-company.start>=10);

console.log(lasted10years); */


//map in action

/* const testMap= companies.map(function(company){
return `${company.name}[${company.start}][${company.end}]`;

})
console.log(testMap);

testMap.forEach(company => { 
    console.log(company);
});
 */
/* const testMapu = companies.map(company=>company.name);
console.log(); */

// sort babe

/* const sort=companies.sort(function(c1,c2){
if(c1.start>c2.start){
    return 1;
}else if(c1.start<c2.start){
    return -1;
}else if(c1.start==c2.start){
    return 0;
}
})

console.log(sort);

const sorted= companies.sort((a, b)=> (a.start > b.start ?1 :-1));

console.log(sorted);

 */

 //rock and roll with reduce vs for loop



