const randomFolks = document.querySelector(".random-peeps");


const getData = async function () {
    let usersRequest = await fetch("https://randomuser.me/api?results=5");
    let data = await usersRequest.json();
    let usersResult = data.results;
    displayUsers(usersResult);
}


getData();


const displayUsers = function (usersResult) {
    randomFolks.innerHTML = "";
    for (const user of usersResult) {
        let name = user.name.first;
        let country = user.location.country;
        let imageUrl =  user.picture.medium;
        console.log(`${name}${country}${imageUrl}`)

        const userDiv = document.createElement("div");
        userDiv.innerHTML = `
        <h3>${name}</h3>
        <p> ${country} </p>
        <img src=${imageUrl} alt="ALT" />` 
        randomFolks.append(userDiv)
    };
    
}