export function add(nums) {
  if (nums.length > 0) {
    const numsSplit = nums.split(",");
    const sum = numsSplit.reduce((res, num) => {
      return res + parseInt(num);
    }, 0);
    return sum;
  }
  return 0;
}
