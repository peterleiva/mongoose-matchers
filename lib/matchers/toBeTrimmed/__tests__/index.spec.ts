import mongoose, { MongooseDocument, Schema } from "mongoose";
import toBeTrimmed from "..";

expect.extend(toBeTrimmed);

describe("toBeTrimmed", () => {
  let document: MongooseDocument;

  describe("with trim set to true", () => {
    beforeAll(() => {
      const connection = mongoose.createConnection();
      const Model = connection.model(
        "Test",
        new Schema({ name: { type: String, trim: true } })
      );

      document = new Model();
    });

    it("Get trimmed when trim is true", () => {
      expect(document).toBeTrimmed("name");
    });
  });

  describe("without trim option", () => {
    beforeAll(() => {
      const connection = mongoose.createConnection();
      const Model = connection.model(
        "Test",
        new Schema({ name: { type: String, trim: false } })
      );

      document = new Model();
    });
    it("Do not trim", () => {
      expect(document).not.toBeTrimmed("name");
    });
  });
});
