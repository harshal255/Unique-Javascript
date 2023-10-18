function acceptInput() {
    let input = document.getElementById("accept-nos");
    let inputValues = input.value;
    let items = inputValues.split(" ");
    console.log(items);
    return items;
    //   sortByBubble(items);
  }
  
  function acceptInputForMerge() {
    let input = document.getElementById("accept-nos");
    let arrEl = document.getElementById("merge-ele");
    let inputValues = input.value;
    let arr = inputValues.split(" ");
    let arr_size = arr.length;
    console.log(arr);
    console.log(arr_size);
  
    let ogArr = stringToArray();
    mergeSort(ogArr, 0, arr_size - 1);
    arrEl.textContent = ogArr;
  }
  
  function stringToArray() {
    let numberArray = acceptInput();
    let arr = [];
    length = numberArray.length;
    for (var i = 0; i < length; i++) arr.push(parseInt(numberArray[i]));
    return arr;
  }
  
  function sortByBubble() {
  
    console.time("BubbleSort")
    let arrEl = document.getElementById("bubble-ele");
    let arr = stringToArray();
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    console.log(arr);
    arrEl.textContent = arr;
    console.timeEnd("BubbleSort");
  }
  
  function merge(arr, l, m, r) {
    var n1 = m - l + 1;
    var n2 = r - m;
  
    var L = new Array(n1);
    var R = new Array(n2);
  
    for (var i = 0; i < n1; i++) L[i] = arr[l + i];
    for (var j = 0; j < n2; j++) R[j] = arr[m + 1 + j];
  
    var i = 0;
  
    var j = 0;
  
    var k = l;
  
    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = R[j];
        j++;
      }
      k++;
    }
  
    while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
    }
  
    while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
    }
  }
  
  function mergeSort(arr, l, r) {
    if (l >= r) {
      return;
    }
    var m = l + parseInt((r - l) / 2);
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);
  }
  
  function sortByFunction() {
    let arrEl = document.getElementById("function-ele");
    let arr_el = stringToArray();
  
    arr_el.sort(function (a, b) {
      return a - b;
    });
    arrEl.textContent = arr_el;
  }
  