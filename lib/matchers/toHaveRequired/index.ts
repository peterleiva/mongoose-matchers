/**
 * Custom matcher to test required field for mongoose documents
 */

import type { Document, Model } from "mongoose"
import message from "utils/message"
import predicate from "./predicate"

async function toHaveRequired(
  received: Model<Document>,
  paths: string[]
): Promise<jest.CustomMatcherResult>

async function toHaveRequired(
  received: Model<Document>,
  ...paths: string[]
): Promise<jest.CustomMatcherResult>

async function toHaveRequired(
  this: jest.MatcherContext,
  received: Model<Document>,
  paths: string[] | string
): Promise<jest.CustomMatcherResult> {
  const options = {
    isNot: this.isNot,
    promise: this.promise,
    expand: this.expand,
  }

  const pass = await predicate(received, ...paths)

  console.log({ pass })
  return {
    pass,
    message: message(paths, received.schema.requiredPaths(), options),
  }
}

export default { toHaveRequired }
