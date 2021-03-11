import { Document, Model } from "mongoose";

/**
 * Recognize all required paths and run a test for it
 */
function addTests(Model: Model<Document>): void {
  const paths = Model.schema.requiredPaths();

  // se tiver caminhos deeps
  describe(`${Model.modelName} required options`, () => {
    test.each(paths)(`${Model.modelName} toHaveRequired path %s`, path => {
      expect(Model).toHaveRequired(path);
    });
  });
}

export default addTests;
