/* eslint-disable react/jsx-key */
import Options from "../Options/Options";


const PriseOption = () => {
 
    [
    
          {
            "id": 1,
            "name": "Starter",
            "features": [
              "Basic gem",
              "Access to community forum",
              "Email support",
              "Weekly gem updates",
              "Limited access to tutorials"
            ],
            "price": 19.99
          },
          {
            "id": 2,
            "name": "Pro",
            "features": [
              "Advanced gem with extra features",
              "Access to premium content",
              "Priority email support",
              "Unlimited access to tutorials",
              "Monthly webinars"
            ],
            "price": 49.99
          },
          {
            "id": 3,
            "name": "Enterprise",
            "features": [
              "Full gem package",
              "Dedicated support",
              "Customization options",
              "24/7 phone support",
              "Personal gem consultant"
            ],
            "price": 99.99
          }
       
    ];
      


    return (
        <div>
            <h2 className="text-5xl">Best Price in the torw</h2>
            {
                PriseOption.map(Option =><Options key={Option.id}  Option={Option}></Options>)
            }
        </div>
    );
};

export default PriseOption;