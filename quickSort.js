async function quickSort(arr, start, end) {
    if (start >= end) {
      return;
    }
    let index = await partition(arr, start, end);
    await Promise.all([quickSort(arr, start, index-1), 
      quickSort(arr, index+1, end)]);
  }
  
  async function partition(arr, start, end) {
    let pivot = start; 
    let pivotVal = arr[end];
    for (let i = start; i < end; i++) {
      if (arr[i] < pivotVal) {
        await swap(arr, i, pivot);
        pivot++;
      }
    }
    await swap(arr, pivot, end);
    return pivot;
  }
  
  async function swap(arr, i, j) {
    await sleep(10);
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function doQuickSort() {
    quickSort(nums, 0, nums.length-1);
  }