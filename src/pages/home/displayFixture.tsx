export function displayFixture(data: { response: any[] }) {
  const fixture = data.response[0];

  const html = `
    <h2>${fixture.league.name}</h2>
    <p>${fixture.teams.home.name} vs ${fixture.teams.away.name}</p>
    <p>${fixture.fixture.date}</p>
  `;
  document.getElementById("fixture").innerHTML = html;
}
