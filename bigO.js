//1:  O(1)/Constant. This should be constant. No matter how many people are in the room, someone can just stand up and yell when we make the request.
//1-2: O(n)/Linear. This will scale linearly with the number of people you need to ask. 

// 2 - Even or odd: O(1)/Constant. No matter how big the number is that you feed into the algorithm, there is always just one operation

// 3 - Are you here?: O(n^2)/Quadratic. There are nested arrays involved in this function. For every index added to one array, we also need to do another operation within the other array. Therefore, this will scale exponentially. 

// 4 - Doubler: O(n)/Linear. There is only one operation done to each element in the array. As the array length increases, we add operations in a direct proportion to the number of elements.

// 5 - Naive search: O(n)/Linear. We can assume that the worst case here is that the target item is always the last item in the array. If that is the case, then for every item we add to the array we have to perform another operation to reach our target item. Therefore, we are scaling linearly. 

// 6 - Creating pairs: O(n^2)/Quadratic. For every item added to the array, we need to go back and do an operation on every item in the array. If there are two items in the array, adding a third only adds two more operations. However, if we go from a million items to a million and one items, we are actually adding a million operations. Therefore, this is quadratic. 

// 7 Compute the sequence: This sequence generates a fibonacci sequence. This will scale linearly. If you increase the size your input you add a directly proportional number of operations.

// 8 - An efficient search: O(log n)/logarithmic: This efficient search is cutting the array size in half each time it runs(unless it finds the answer in he middle). Therefore, doubling the size of the array only adds one more round of operations, meaning it scales logarithmically. 

// 9 - Random element: O(1)/constant. This function will always access a single random element in an array, regardless of length. No matter what the length of the array is, it will always perform the same number of operations.

// 10 - What am I: This function will return true if the number entered is a prime number. The big O is O(n)/Linear. Assume worst case(the numbers entered are integers), every time you increase the number you have to do one more operation. Each time you increase the number by one, you have to check whether the previous number is divisible by the one number one less than itself. 

// 11: The tower of Hanoi!

function towerOfHanoi(disk, start, spare, dest) {
  if (disk > 0) {
    towerOfHanoi(disk - 1, start, dest, spare);
    console.log(
      'Move disk ' + disk + ' from ' + start + ' to ' + dest
    );
    towerOfHanoi(disk - 1, spare, start, dest);
  }
}

towerOfHanoi(4, 'a', 'b', 'c')

// 12: Iterative version:

function countSheep(num) {
  for(i = 0; i < num; i++){
    console.log('Another sheep jump over the fence');
  }
  console.log('All sheep jumped over the fence')
}

function powerCalculator(int, exp) {
  let product = 1;
  for(i = 0; i < exp; i++){
    product *= int
  }
  return product;
}

function reverseString(str){
  let result = ''; 
  for(let i = 1; i <= str.length; i++){
    result += str[str.length-i];
  }
  return result
}

function triangle(num){
  let result = 0;
  for(let i = 1; i <= num; i ++){
    result += i;
  }
  return result
}

function stringSplitter(str, separator){
  let result = '';
  for(let i = 0; i < str.length; i++){
    if(str[i] === separator){
      null;
    } else{
      result += str[i]
    }
  }
  return result;
}

function findFibonacci(num){
  let result = [];
  for(i=0; i < num; i++){
    if (i === 0 || i === 1) {
      result.push(1);
  } else {
    result.push(result[i-1] + result[i-2])
  }
  }
  return result[result.length-1]
}

function fibonacciSequence(num){
  let result = [];
  for(i=0; i < num; i++){
    if (i === 0 || i === 1) {
      result.push(1);
  } else {
    result.push(result[i-1] + result[i-2])
  }
  }
  return result

}

function factorial(num){
  let result = 1;
  for(let i = 1; i <= num; i ++){
    result *= i;
  }
  return result
}



// 13 Recursive bigO:

// countSheep: O(n)
// powerCalculator: O(n)
// reverseString: O(n)
// triangle: O(n)
// stringSplitter: O(n)
// fibonacciArr: O(n)
// fibonacci: O(n)
// factorial: O(n)
// maze: O(n^2) ???
// maze all: O(n^2) ???
// anagrams: O(n^2)
// organization: O(n^2)
// binaryRep: O(n)

// 14: Iterative bigO:

// countSheep: O(n)
// powerCalculator: O(n)
// reverseString: O(n)
// triangle: O(n)
// stringSplitter: O(n)
// findFib: O(n)
// fibSeq: O(n)
// factorial: O(n)