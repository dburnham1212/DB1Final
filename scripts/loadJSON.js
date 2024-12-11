fetch("./data/alberta.json")
  .then((response) => response.json())
  .then((data) => {

    const tableBody = document.getElementById('data-table');

    data.vehicles.forEach(vehicle => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${vehicle.make}</td>
            <td>${vehicle.model}</td>
            <td>${vehicle.model_year}</td>
            <td>${vehicle.plate}</td>
            <td>${vehicle.vin_number}</td>
        `;

        tableBody.appendChild(row);
  });
});