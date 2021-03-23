import type { Document } from "mongoose"

export default (received: Document, attribute: string): boolean => {
  const actual = received.get(attribute)

  return !!actual && actual?.trim() === actual
}
