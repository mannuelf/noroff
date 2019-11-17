var double = function(myNumber) {
  console.log("answer:", myNumber * 2)
  return myNumber * 2;
}

double(double(2) + double(2));
