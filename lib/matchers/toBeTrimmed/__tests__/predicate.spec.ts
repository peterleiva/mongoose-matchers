import mongoose, { MongooseDocument, Schema } from "mongoose";
import predicate from "../predicate";

describe("tobeTrimmed predicate", () => {
  let document: MongooseDocument;

  describe("With trim set to true", () => {
    beforeAll(() => {
      const connection = mongoose.createConnection();
      const TestModel = connection.model(
        "Test",
        new Schema({
          name: { type: String, trim: true },
        })
      );

      document = new TestModel();
    });

    it("Return false when name is undefined", () => {
      document.set("name", undefined);
      expect(predicate(document, "name")).toBe(false);
    });

    it("Return false when name is null", () => {
      document.set("name", null);
      expect(predicate(document, "name")).toBe(false);
    });

    it("Return true with whitespaced attribute", () => {
      document.set("name", "\t \nsome attribute\n\t ");
      expect(predicate(document, "name")).toBe(true);
    });
  });

  describe("With trim set to false", () => {
    beforeAll(() => {
      const connection = mongoose.createConnection();
      const TestModel = connection.model(
        "Test",
        new Schema({
          name: { type: String, trim: false },
        })
      );

      document = new TestModel();
    });

    it("Return false when name is undefined", () => {
      document.set("name", undefined);
      expect(predicate(document, "name")).toBe(false);
    });

    it("Return false when name is null", () => {
      document.set("name", null);
      expect(predicate(document, "name")).toBe(false);
    });

    it("Get false when attribute is whitespaced", () => {
      document.set("name", "\t \nsome attribute\n\t");
      expect(predicate(document, "name")).toBe(false);
    });
  });
});
