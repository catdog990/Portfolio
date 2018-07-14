let argOne = process.argv[2];
let argTwo = process.argv[3];

 // Run the test
if (argOne === argTwo) {

    // Print equality.
    console.log(true);
  }
  else {
    console.log(false);
  }

  if ((argOne % 7) === 0 && (argTwo % 7) === 0) {
    console.log(true);
  }
  else {
    console.log(false);
  }
  