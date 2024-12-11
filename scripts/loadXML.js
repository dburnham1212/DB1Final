fetch("./data/ontario.xml")
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        console.log(data);
    
        const tableBody = document.getElementById('data-table');
        
        const vehicles = data.querySelectorAll("Vehicle");

        for(const vehicle of vehicles) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${vehicle.querySelector("make").textContent}</td>
                <td>${vehicle.querySelector("model").textContent}</td>
                <td>${vehicle.querySelector("model_year").textContent}</td>
                <td>${vehicle.querySelector("plate").textContent}</td>
                <td>${vehicle.querySelector("vin_number").textContent}</td>
            `;

            tableBody.appendChild(row);
        }
    

});

