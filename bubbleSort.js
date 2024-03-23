function bubbleOnePass() {
    for (let i = 0; i < n-1; i++) {
      for (let j = 0; j < n-1; j++) {
        if (nums[j] > nums[j+1]) {
          let temp = nums[j];
          nums[j] = nums[j+1];
          nums[j+1] = temp;
          leftAt = i;
          // return;
          currJ = j;
        }
      }
    return;
    }
  }

function toggleBub() {
    doBub++;
}