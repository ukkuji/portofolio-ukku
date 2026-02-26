for (let i = 1; i <= 5; i++) {          // loop luar
  console.log("===================");
  console.log("Outer loop ke-", i);
  console.log("{ hasil pangkat nilai}",i **2);
  for (let j = 1; j <= 3; j++) {        // loop dalam
    console.log("  Inner loop ke-", j);
    console.log("{ hasil pangkat nilai}",j**2);
  }
}