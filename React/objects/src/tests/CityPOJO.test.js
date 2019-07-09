import CityPOJO from "../containers/CityPOJO";

test("test citypojo", () => {
  console.log(
    "....................................................................................START"
  );
  const city = new CityPOJO(1, "Calgary", 1, 51.0486, 114.0708);
  expect(city.onShow()).toBe(
    "1 Calgary: Population: 1, Latitude: 51.0486, Longitude: 114.0708"
  );

  // expect(city.movedIn(5)).toBe(6);
  // expect(city.movedOut(2)).toBe(4);
  // expect(city.howBig("Calgary")).toBe("Hamlet");
});

// test("create a new city and check attributes ", () => {
//   const cityTest = new CityPOJO(1, "Bangkok", 9, 51, 114);
//   expect(cityTest.cityId).toBe(1);
//   expect(cityTest.name).toBe("Bangkok");
//   expect(cityTest.population).toBe(9);
//   expect(cityTest.latitude).toBe(51);
//   expect(cityTest.longitude).toBe(114);

//   console.log("test show method");
//   console.log(cityTest.onShow());

//   console.log("test movedIn method");
//   cityTest.movedIn(200);
//   expect(cityTest.population).toBe(1267500);

//   console.log("test movedOut method");
//   cityTest.movedOut(40);
//   expect(cityTest.population).toBe(1267460);
// });

// test("should test the howBig method", () => {
//   const city1 = new CityPOJO(1, "Vancouver", 126000, 51.05, 114.07);
//   const city2 = new CityPOJO(2, "Paris", 90000, 17.49, 88.19);
//   const city3 = new CityPOJO(3, "New York", 5600, 47.65, 101.41);
//   const city4 = new CityPOJO(4, "London", 80, 51.99, 104.83);
//   const city5 = new CityPOJO(5, "Haney", 9, 48.88, 104.79);

//   console.log("test for a City 1");
//   // expect(city1.howBig()).toBe("Town");
//   expect(city1.howBig()).toBe("City");

//   console.log("test for a Large Town");
//   // expect(city2.howBig()).toBe("City");
//   expect(city2.howBig()).toBe("Large Town");

//   console.log("test for a Town");
//   // expect(city3.howBig()).toBe("City");
//   expect(city3.howBig()).toBe("Town");

//   console.log("test for a Village");
//   // expect(city4.howBig()).toBe("City");
//   expect(city4.howBig()).toBe("Village");

//   console.log("test for a Hamlet");
//   // expect(city5.howBig()).toBe("City");
//   expect(city5.howBig()).toBe("Hamlet");
// });

// test("object reference verification ", () => {
//   const newCity = new CityPOJO();
// });
