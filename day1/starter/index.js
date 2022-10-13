// 1. Api call
function fetchDataFromApi (){
    let data = fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .then((res) => renderData(res.users));
}

// 2. Card layout
function renderData(data) {
    let mainContainer = document.getElementsByClassName("main-container")[0];

    data.forEach((user) => {
        let cardContainer = document.createElement("div");
        cardContainer.setAttribute("class", "card-container");

        let img = document.createElement("img");
        img.setAttribute("class", "user-img");
        img.setAttribute("src", user["image"]);
        
        cardContainer.appendChild(img);

        config.forEach((field) => {
            let {label, value, formatter}  = field;
            value = formatter != null ? formatter(user) : user[value];
            
            cardContainer.appendChild(createDetailsAttribute(label, value));
        })

        mainContainer.append(cardContainer);
    })

}

function createDetailsAttribute(label, value) {
    let detailsContainer = document.createElement("div");
    detailsContainer.setAttribute("class", "details");

    let details = document.createElement("div");
    details.setAttribute("class", "name-details");
    let detailsLabel = document.createElement("span");
    detailsLabel.setAttribute("class", "label");
    detailsLabel.textContent = label;
    let detailsValue = document.createElement("span");
    detailsValue.textContent = value;

    details.appendChild(detailsLabel);
    details.appendChild(detailsValue);
    detailsContainer.appendChild(details);

    return detailsContainer;
}


// 3. Configurable fields
const nameFormatter = (user) => `${user.firstName} ${user.lastName}`;
const companyPositionFormatter = (user) => `${user.company.title}`;
const companyNameFormatter = (user) => `${user.company.name}`;

config = [
    {
      label: "Name ",
      value: "name",
      formatter: nameFormatter,
    },
    {
      label: "Age",
      value: "age",
    },
    {
      label: "Phone ",
      value: "phone",
    },
    {
      label: "Blood Group",
      value: "bloodGroup",
    },
    {
      label: "Company",
      value: "name",
      formatter: companyNameFormatter,
    },
    {
      label: "Position",
      value: "name",
      formatter: companyPositionFormatter,
    },
    {
      label: "Weight ",
      value: "weight",
    },

]

fetchDataFromApi();
