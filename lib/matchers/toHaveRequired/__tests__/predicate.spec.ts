import { model, Schema, SchemaDefinitionProperty } from "mongoose";
import casual from "casual";
import predicate from "../predicate";
import database from "database/database-test-env";
import "core-js/stable";
import "regenerator-runtime/runtime";

function setupModel(def: SchemaDefinitionProperty = {}) {
  const schema = new Schema(def);
  const Model = model(`${casual.word}_${casual.integer(0)}`, schema);

  Model.schema.requiredPaths = jest.fn(Model.schema.requiredPaths);
  return Model;
}

describe("toHaveRequired predicate", () => {
  database();

  test.skip("return true when model has empty schema", async () => {
    const Model = setupModel();
    await expect(predicate(Model)).resolves.toBe(true);
  });

  it("hit model.schema if paths is empty", async () => {
    const Model = setupModel({});
    await predicate(Model);
    expect(Model.schema.requiredPaths).toHaveBeenCalledTimes(1);
  });

  it.todo("");
});
