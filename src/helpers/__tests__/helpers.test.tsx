import { toDate, toMinutesAndSecods } from "../helpers";

describe("Helpers", () => {
  describe("Dates", () => {
    it("should format dates to MM/DD/YYYY", () => {
      let date = "2019-04-24T03:23:00Z";
      let formattedDate = "04/23/2019";
      expect(toDate(date)).toEqual(formattedDate);

      date = "1988-12-24T13:00:00Z";
      formattedDate = "12/24/1988";
      expect(toDate(date)).toEqual(formattedDate);
    });
    it("should format dates from miliseconds to minutes and seconds", () => {
      let miliseconds = 600;
      let formatedTime = "0:01";
      expect(toMinutesAndSecods(miliseconds)).toEqual(formatedTime);

      miliseconds = 120000;
      formatedTime = "2:00";
      expect(toMinutesAndSecods(miliseconds)).toEqual(formatedTime);
    });
  });
});
