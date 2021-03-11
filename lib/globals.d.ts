import ".";
declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveRequired(paths: string[]): R;
      toHaveRequired(...paths: string[]): R;
      toBeTrimmed(attribute: string): R;
    }
  }
}
