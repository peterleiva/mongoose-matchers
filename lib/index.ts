// polyfill
import "core-js/stable"
import "regenerator-runtime/runtime"

import expect from "expect"
import * as matchers from "./matchers"

if (expect !== undefined) {
  expect.extend(matchers)
} else {
  console.error("Unable to find Jest's global expect.")
}
