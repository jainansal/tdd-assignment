export function add(numsString) {
  if (numsString.length > 0) {
    var delimiter = "";
    var nums = numsString;
    if (nums.startsWith("//")) {
      delimiter = nums.split("\n")[0].substring(2);
      nums = nums.split("\n")[1];
    }
    // /[\n,]+/ is a regex which corresponds to either '\n' or ','
    const numsSplit =
      delimiter == "" ? nums.split(/[\n,]+/) : nums.split(delimiter);
    const sum = numsSplit.reduce((res, num) => {
      return res + parseInt(num);
    }, 0);
    return sum;
  }
  return 0;
}
