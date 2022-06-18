const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// Question 1

const cat = {
  complain: function () {
    console.log("Meow!");
  },
};

cat.complain();

// Question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.className = "subheading";

// Question 5

const paragraphs = document.querySelectorAll("p");

for (i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

// Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>" + "New paragraph" + "</p>";
resultsContainer.style.background = "yellow";

// Question 7

function catNames(list) {
  for (i = 0; i < list.length; i++) {
    console.log(cats[i].name);
  }
}

catNames(cats);

// Question 8

const catContainer = document.querySelector(".cat-container");

let createHtml = "";

function createCats(cats) {
  for (i = 0; i < cats.length; i++) {
    let catAge = "Age unknown";

    if (cats[i].age) {
      catAge = cats[i].age;
    }
    createHtml =
      createHtml +
      `
    <div><h5>${cats[i].name}</h5></div>
    <div><p>${catAge}</p></div>
    `;
    catContainer.innerHTML = createHtml;
  }
}

createCats(cats);
