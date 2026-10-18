// Step 2: Employee Role Access System
let role = prompt("Enter your role (admin / manager / developer / intern)");

switch (role) {
  case "admin":
    alert("Full system access");
    break;
  case "manager":
    alert("Team management access");
    break;
  case "developer":
    alert("Code access");
    break;
  case "intern":
    alert("Limited access");
    break;
  default:
    alert("Invalid input. Please try again.");
}

// Step 3: Online Payment Method Selection
let payment = prompt("Choose payment method (credit / debit / upi / cod)");

switch (payment) {
  case "credit":
    alert("You selected Credit Card");
    break;
  case "debit":
    alert("You selected Debit Card");
    break;
  case "upi":
    alert("You selected UPI");
    break;
  case "cod":
    alert("You selected Cash on Delivery");
    break;
  default:
    alert("Invalid input. Please try again.");
}

// Step 4: Order Status Checker
let status = prompt("Enter order status (placed / packed / shipped / delivered / cancelled)");

switch (status) {
  case "placed":
    alert("Your order is placed");
    break;
  case "packed":
    alert("Your order is packed");
    break;
  case "shipped":
    alert("Your order is shipped");
    break;
  case "delivered":
    alert("Your order is delivered");
    break;
  case "cancelled":
    alert("Your order is cancelled");
    break;
  default:
    alert("Invalid input. Please try again.");
}

// Step 5: Office Working Day Checker
let day = prompt("Enter day name (Monday - Sunday)");

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    alert("Working day");
    break;
  case "Saturday":
    alert("Half day");
    break;
  case "Sunday":
    alert("Holiday");
    break;
  default:
    alert("Invalid input. Please try again.");
}