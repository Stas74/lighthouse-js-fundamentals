let temperature = 45;
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

if (!raining) {
  console.log("Leave your umbrella at home!");
}

/*
We read the expression in the above example usually as "if not raining", 
but it's not always intuitive what "not true" or "not false" 
mean unless you remember that the ! operator reverses the value of raining. 
That is, if raining is true, !raining is false. If raining is false, !raining is true.
*/