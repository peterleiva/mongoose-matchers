import { model, Schema, SchemaDefinition } from "mongoose";
import casual from "casual";
import toHaveRequired from "..";

expect.extend(toHaveRequired);

/**
 * Mocks mongoose Model with a schema definition
 */
const setup = (schema: SchemaDefinition = {}) => {
  return model(`${casual.word}${casual.integer(0)}`, new Schema(schema));
};

describe(".toHaveRequired", () => {
  describe("Empty schema", () => {
    const Model = setup();

    it("pass with no paths", async () => {
      await expect(Model).toHaveRequired("");
    });

    it("pass with array of paths", async () => {
      await expect(Model).toHaveRequired(["a", "b", "c"]);
    });

    it("pass with a single path", async () => {
      await expect(Model).toHaveRequired("some.long.path");
    });
  });

  describe("With top-level required: true", () => {
    const Model = setup({
      a: { type: String, required: true },
      b: { type: Number, required: true },
      c: String,
      d: String,
    });

    it("pass with all required options", async () => {
      await expect(Model).toHaveRequired("a", "b");
    });

    it("pass with partial required option", async () => {
      await expect(Model).toHaveRequired("a");
    });

    it("fail when no required option is set", async () => {
      await expect(Model).not.toHaveRequired("c", "d");
    });

    it.only("pass when has at least one with required", async () => {
      await expect(Model).toHaveRequired("c", "a");
    });
  });

  describe("With nested required: true", () => {});
});
