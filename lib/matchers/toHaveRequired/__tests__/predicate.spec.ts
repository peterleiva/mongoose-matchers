import { model, Schema, SchemaDefinitionProperty } from "mongoose"
import casual from "casual"
import predicate from "../predicate"
import database from "database-test-env"

function setupModel(def: SchemaDefinitionProperty = {}) {
  const schema = new Schema(def)
  const Model = model(`${casual.word}_${casual.integer(0)}`, schema)

  return Model
}

describe("toHaveRequired predicate", () => {
  const requiredDef = {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: String,
  }

  // const allOptionalDef = {
  //   title: String,
  //   name: String,
  //   description: String,
  // }

  database()

  test("return true when model has empty schema", async () => {
    const Model = setupModel()

    await expect(predicate(Model)).resolves.toBe(true)
  })

  test("hit model.schema if paths is empty", async () => {
    const Model = setupModel({})
    jest.spyOn(Model.schema, "requiredPaths")
    await predicate(Model)

    expect(Model.schema.requiredPaths).toHaveBeenCalledTimes(1)
  })

  describe("With no paths", () => {
    test("returns false when if has required path", async () => {
      const Model = setupModel({
        title: { type: String, required: true },
        description: String,
      })
      await expect(predicate(Model)).resolves.toBe(false)
    })

    test.todo("model.schema.requiredPaths returns required fields only")
  })

  describe("With paths", () => {
    test("model.schema.requiredPaths gets all required paths", async () => {
      const Model = setupModel(requiredDef)
      jest.spyOn(Model.schema, "requiredPaths")
      await predicate(Model)
      expect(Model.schema.requiredPaths).toHaveReturnedWith(["name", "title"])
    })

    test("returns false when all required paths isn't set", async () => {
      const Model = setupModel(requiredDef)
      await expect(predicate(Model, "title", "description")).resolves.toBe(true)
    })

    test.todo("returns false when at least one required paths isn't set")
    test.todo("returns true when model has no required path")
    test.todo("returns true when all required path is set")
  })
})
