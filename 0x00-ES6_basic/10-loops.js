function appendToEachArrayValue(array, appendString) {
  /*
   * TODO: find out map didnt work properly
   *  array.map((value) => appendString + value);
   */
  let idx = 0;
  for (const elm of array) {
    const value = elm;
    array[idx] = appendString + value;
    idx += 1;
  }

  return array;
}
export default appendToEachArrayValue;
