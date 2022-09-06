async function fetchData() {
  const res = await fetch("https://api.coronavirus.data.gov.uk/v1/data");
  const result = await res.json();
  document.getElementById("date").innerHTML = result.data[0].date;
  document.getElementById("areaName").innerHTML = result.data[0].areaName;
  document.getElementById("latestBy").innerHTML = result.data[0].latestBy;
  document.getElementById("deathNew").innerHTML = result.data[0].deathNew;
}
fetchData();
