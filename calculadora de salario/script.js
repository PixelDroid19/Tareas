const Payment = 16000, extra = 20000;
let Total = 0, ExtraPayment = 0;

const NumberHours = document.getElementById("Hours"),
      BtnCheck = document.getElementById("BtnCheck");

const ReturnValue = (Target, Value = 0, Return) => {
  switch (Return) {
    case "true":
      document.getElementById(Target).value = Value;
    case "false":
      return Target.value;
  }
};

const CalculateSalary = () => {
  const Hours = ReturnValue(NumberHours, 0, "false");
  Total = 0;

  if (Hours == 40 || Hours < 40) {
    //Condicional para calcular pagos
    for (let i = 0; i < Hours; i++) {
      Total += Payment;
    }

    console.log("Pago: " + Total);
    ReturnValue("Salary", Hours * Payment, "true");
    ReturnValue("totalPay", Total, "true");
  } else {
    ExtraPayment = Hours - 40;
    Total = ExtraPayment * extra + 40 * Payment;

    ReturnValue("hoursExtra", ExtraPayment * extra, "true");
    ReturnValue("Salary", 40 * Payment, "true");
    ReturnValue("totalPay", Total, "true");
  }
};

BtnCheck.addEventListener("click", CalculateSalary);
