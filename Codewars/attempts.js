function solution(str, ending)
{
  // TODO: complete
  let correctIndex = str.length - ending.length;
  for(let i = 0; i < ending.length; i++)
  {
    // Hvis alle indexene fra startindex og utover er samme som alle indexer i ending-argumentet
    if(str[correctIndex + i] === ending[i])
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}


// Arrange numbers so they descend
function descendingOrder(n)
{
  //...
  
  let input = n.toString();
  
  let digits = 0;
  
  let max = 0;
  
  for(let i = 0; i < input.length; i++)
  {
    // Find the highest value and update max
    if(max < input[i])
    {
      max = input[i];
    }
  }
  while(input.length > 0)
  {
    
    digits += max;
      
    input = input.replace(max, "");
    
    max = 0;
    
    for(let i = 0; i < input.length; i++)
    {
      if(max < input[i])
      {
        max = input[i];
      }
    }
    
  }
  
  return digits;
  
}

// Find sum of all integers, including inbetween arguments
function getSum(a, b)
{
   //Good luck!
  let sum = 0;
  
  let min = a; //10
  
  let max = b; //5
  
  let temp;
  
  if(min > max)
  {
    temp = max;
    max = min;
    min = temp;
  }
  
  for(let i = 0; i < 2; i++)
  {
    sum += min;
    sum += max;
  }
  
  if(a === b)
  {
    return a;
  }
  
  return sum;
}

// Sum the two lowest integers
function sumTwoSmallestNumbers(numbers)
{  
  // Code here
  
  let min = numbers[0];
  
  let secondMin = 1000000000;
  
  for(let i = 0; i < numbers.length; i++)
  {
    if(numbers[i] < min)
    {
      min = numbers[i];
    }
    if(numbers[i] < secondMin)
    {
      secondMin = numbers[i];
    }
  }
  
  for(let i = 0; i < numbers.length; i++)
  {
    if(numbers[i] < secondMin && numbers[i] >= min)
    {
      secondMin != min[i];
      secondMin = numbers[i];
    }
  }
  
  let sum = min + secondMin;
  
  return sum;
}


// Sum of oddnumbers

function rowSumOddNumbers(n)
{
	// TODO
  let output = 0;
  
  let index = 0;
  
  for(let i = 0; i < n.length; i++)
  {
    //-1
    //-8
    //-27
    //-64
    //-125
  }
  
  return output;
}

// Multiply by x and n and return an array from x to the result of x * n
function countBy(x, n)
{
  let z = [];
  
  let sum = x * n;
  
  sum = sum.toString();
  
  for(let i = x; i < sum.length; i++)
  {
    z.push(i);
  }
  
  z.push(sum);

  return z;
}


function findNeedle(haystack)
{
  for(let i = 0; i < haystack.length; i++)
  {
    if(haystack[i] === 'needle')
    {
      return "found the needle at position " + i;
    }
  }
}


function explode(x)
{
  let score = 0;
  
  if(typeof x[0] === 'string' && typeof x[1] === 'string')
  { 
    score = 'Void!';
  }
  else if(typeof x[0] === 'number' && typeof x[1] === 'number')
  { 
    score = x[0] + x[1];
  } 
  else if(typeof x[0] === 'string')
  { 
    score = x[1];
  } 
  else if(typeof x[1] === 'string')
  { 
    score = x[0];
  } 
  
  for(let i = 0; i < score.length; i++)
  {
    
  }
}
