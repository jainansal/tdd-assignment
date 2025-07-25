export function add(nums) {
  if (nums.length > 0) {
    const numsSplit = nums.split(",");
    if (numsSplit.length == 1) {
      return parseInt(numsSplit[0]);
    }
    return parseInt(numsSplit[0]) + parseInt(numsSplit[1]);
  }
  return 0;
}
