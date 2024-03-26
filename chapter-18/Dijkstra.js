class City {
  name;
  routes;

  constructor(name) {
    this.name = name;
    this.routes = {};
  }

  addRoute(city, price) {
    this.routes[city] = price;
  }
}

const atlanta = new City("Atlanta");
const boston = new City("Boston");
const chicago = new City("Chicago");
const denver = new City("Denver");
const elPaso = new City("El Paso");

atlanta.addRoute(boston, 100);
atlanta.addRoute(denver, 160);
boston.addRoute(chicago, 120);
boston.addRoute(denver, 180);
chicago.addRoute(elPaso, 80);
denver.addRoute(chicago, 40);
denver.addRoute(elPaso, 140);

function dijkstraShortestPath(startingCity, finalDestination) {
  const cheapestPricesTable = {};
  const cheapestPreviousStopoverCityTable = {};

  let unvisitedCities = [];
  const visitedCities = {};

  cheapestPricesTable[startingCity.name] = 0;

  currentCity = startingCity;

  while (currentCity) {
    visitedCities[currentCity.name] = true;
    unvisitedCities = unvisitedCities.filter(
      (city) => city !== currentCity.name
    );

    for (const { adjacentCity, price } of currentCity.routes) {
      if (visitedCities[adjacentCity.name]) {
        unvisitedCities.push(adjacentCity.name);
      }

      let priceTroughCurrentCity =
        cheapestPricesTable[currentCity.name] + price;

      if (
        !cheapestPricesTable[adjacentCity.name] ||
        priceTroughCurrentCity < cheapestPricesTable[adjacentCity.name]
      ) {
        cheapestPricesTable[adjacentCity.name] = priceTroughCurrentCity;
        cheapestPreviousStopoverCityTable[adjacentCity.name] = currentCity.name;
      }
    }

    currentCity = unvisitedCities.reduce((minCity, city) => {
      if (cheapestPricesTable[city.name] < cheapestPricesTable[minCity.name]) {
        return city;
      } else {
        return minCity;
      }
    });
  }

  const shortestPath = [];

  const currentCityName = finalDestination.name;

  while (currentCityName !== startingCity.name) {
    shortestPath.push(currentCityName);

    currentCityName = cheapestPreviousStopoverCityTable[currentCityName];
  }

  shortestPath.push(startingCity.name);

  return shortestPath.reverse();
}
