const insert = document.getElementById('insert');

window.addEventListener('keydown', (event) => {
  insert.innerHTML = `
  <div class="">
  <table>
  <thead>
  <th>Key</th>
  <th>Code</th>
  <thead>
  <tbody>
  <tr>
  <td>${event.key}</td>
  <td>${event.code}</td>
  </tr>
  </tbody>
  </table>
  </div>
  `;
});
