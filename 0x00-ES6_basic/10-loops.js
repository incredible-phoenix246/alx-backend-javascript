function appendToEachArrayValue(array, appendString) {
  return array.map((value) => appendString + value);
}

export default appendToEachArrayValue;
