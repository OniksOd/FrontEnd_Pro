const table = document.getElementById("pifagor");
for (let i = 1; i <= 10; i++) {
  const tr = document.createElement("tr");
  for (let j = 1; j <= 10; j++) {
    const td = document.createElement("td");
    td.innerText = i * j;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
