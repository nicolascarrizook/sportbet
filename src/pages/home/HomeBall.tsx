import NavBar from "./NavBar";

const url = "https://api-football-v1.p.rapidapi.com/v3/timezone";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "30943a890bmsh13ba9508aaca905p17c466jsnd560fd6335c1",
    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
export const HomeBall = () => {
  return (
    <>
      <NavBar />
      <header>
        <p>hola</p>
      </header>
    </>
  );
};
