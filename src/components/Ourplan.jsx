import React from 'react';
import './Ourplan.css';

const plans = [
  {
    name: "Free",
    price: "$0",
    features: [
      "1 user request",
      "1 design account",
      "Email support",
      "10 deployments",
    ],
    gradient: false,
  },
  {
    name: "Premium",
    price: "$55",
    features: [
      "10 user requests",
      "3 design accounts",
      "Email Support",
      "100 deployments",
      "24/7 Support",
      "Premium Support",
    ],
    gradient: true, 
  },
  {
    name: "Enterprise",
    price: "$105",
    features: [
      "Unlimited user requests",
      "3 to 50 design accounts",
      "Email support",
      "Unlimited deployments",
      "24/7 Support",
      "Advanced security",
      "Invoice and billing",
    ],
    gradient: false,
  },
];

function Ourplan() {
  return (
    <>
      <div className='container text-center'>
        <div className="row">
          <div className="col-6 offset-3">
            <h2 className='plan__heading'>Choose Our Plan</h2>
            <p className='plan__text'>
              Select the perfect plan that suits your business needs. Whether you're just starting or scaling up,  
              our tailored solutions offer flexibility, affordability, and the best value for your investment.
            </p>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row justify-content-center">
          {plans.map((plan, index) => (
            <div key={index} className="col-md-4">
              <div className={`plan-card ${plan.gradient ? "premium-card" : ""}`}>
                <h3 className="plan-title">{plan.name}</h3>
                <h2 className="plan-price">{plan.price}<span>/mo</span></h2>
                <ul className="plan-features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>✔ {feature}</li>
                  ))}
                </ul>
                <button className="plan-button">Choose Plan</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Ourplan;
