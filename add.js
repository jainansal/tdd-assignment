export function add(nums) {
  if (nums.length > 0) {
    // /[\n,]+/ is a regex which corresponds to either '\n' or ','
    const numsSplit = nums.split(/[\n,]+/);
    const sum = numsSplit.reduce((res, num) => {
      return res + parseInt(num);
    }, 0);
    return sum;
  }
  return 0;
}
