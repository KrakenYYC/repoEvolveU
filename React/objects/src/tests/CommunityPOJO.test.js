import CommunityPOJO from "../containers/CommunityPOJO";

test("check community controller ", () => {
  const communityTest = new CommunityPOJO();
  expect(communityTest.cityList.length).toBe(0);

  communityTest.onCreate("Calgary", 1267300, 51.05, 114.07);
  expect(communityTest.cityList.length).toBe(1);
  expect(communityTest.cityList[0].cityId).toBe(1);
  expect(communityTest.cityList[0].name).toBe("Calgary");
  expect(communityTest.cityList[0].population).toBe(1267300);
  expect(communityTest.cityList[0].latitude).toBe(51.05);
  expect(communityTest.cityList[0].longitude).toBe(114.07);

  communityTest.onCreate("Vancouver", 57169, 17.49, 88.19);
  expect(communityTest.cityList.length).toBe(2);
  expect(communityTest.cityList[1].cityId).toBe(2);
  expect(communityTest.cityList[1].name).toBe("Vancouver");
  expect(communityTest.cityList[1].population).toBe(57169);
  expect(communityTest.cityList[1].latitude).toBe(17.49);
  expect(communityTest.cityList[1].longitude).toBe(88.19);

  communityTest.onCreate("London", 1453, 47.65, 101.41);
  expect(communityTest.cityList.length).toBe(3);
  expect(communityTest.cityList[2].cityId).toBe(3);
  expect(communityTest.cityList[2].name).toBe("London");
  expect(communityTest.cityList[2].population).toBe(1453);
  expect(communityTest.cityList[2].latitude).toBe(47.65);
  expect(communityTest.cityList[2].longitude).toBe(101.41);

  communityTest.onCreate("Paris", 427, 51.99, 104.83);
  expect(communityTest.cityList.length).toBe(4);
  expect(communityTest.cityList[3].cityId).toBe(4);
  expect(communityTest.cityList[3].name).toBe("Paris");
  expect(communityTest.cityList[3].population).toBe(427);
  expect(communityTest.cityList[3].latitude).toBe(51.99);
  expect(communityTest.cityList[3].longitude).toBe(104.83);

  communityTest.onCreate("Sidney", 101101, -33.87, 151.21);
  expect(communityTest.cityList.length).toBe(5);
  expect(communityTest.cityList[4].cityId).toBe(5);
  expect(communityTest.cityList[4].name).toBe("Sidney");
  expect(communityTest.cityList[4].population).toBe(101101);
  expect(communityTest.cityList[4].latitude).toBe(-33.87);
  expect(communityTest.cityList[4].longitude).toBe(151.21);
  // expect(communityTest.getPopulation()).toBe(1326349);
  expect(communityTest.getPopulation()).toBe(1427450);
  expect(communityTest.getMostNorthern()).toBe(51.99);
  // expect(communityTest.getMostSouthern()).toBe(17.49);
  expect(communityTest.getMostSouthern()).toBe(-33.87);
  expect(communityTest.whichSphere(0)).toBe("Northern Hemisphere");
  expect(communityTest.whichSphere(4)).toBe("Southern Hemisphere");
  communityTest.onDelete(2);
  expect(communityTest.cityList.length).toBe(4);
  communityTest.onDelete(4);
  expect(communityTest.cityList.length).toBe(3);
});
