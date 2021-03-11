import { Document, Model, Error } from "mongoose";

type Doc = {
  [k: string]: undefined;
};

type Fails = {
  [k: string]: Error.ValidatorError | Error.CastError;
};

/**
 * checks document paths if they have required option set to true
 * paths não é necessário, ele pega os requiredPaths por padrão
 */
export default async (
  model: Model<Document>,
  ...paths: string[]
): Promise<{ pass: boolean; fails: Fails }> => {
  // It gets all required model paths if none is provided
  const normalizedPaths =
    paths.length === 0 ? model.schema.requiredPaths() : paths.flat();

  let pass: boolean;
  const fails: Fails = {};

  const doc: Doc = normalizedPaths
    .flat()
    .reduce((attrs, path) => Object.assign(attrs, { [path]: undefined }), {});

  pass = true;

  try {
    await model.validate(doc, normalizedPaths);
    // It should throw a error if exists some path
    paths.length > 0 && (pass = false);
  } catch (_err) {
    const err: Error.ValidationError = _err;

    // store validation errors
    for (const error of Object.keys(err.errors)) {
      const validationError = err.errors[error];
      pass &&= validationError.kind === "required";
      fails[error] = err.errors[error];
    }
  }

  return { pass, fails };
};
