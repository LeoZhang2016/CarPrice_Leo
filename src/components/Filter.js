
import  Select from "./Select";
import InputBox from "./InputBox";
import InfoSum from "./InfoSum";
import GetOneNow from "./GetOneNow";
import Lists  from "./Lists";

const Filter = () => {

  const onChange = () => {

  }

  const Brand = ['Audi', 'Austin', 'BMW', 'Buick'];
  const Model = ['A2', 'A3', 'A5', 'A6', 'A7', 'A8'];
  const Years = ['2008', '2009', '2010', '2011'];
  const Badges = ['40 TFSI S line', '40 TFSI sport', '45 TFSI S line', '45 TFSI sport', 'S Line Competition'];
  const BodyType = ['Cabriolet', 'Coupe', 'Hatchback', 'Buick'];
  const BodyTypeCon = ['Body Type Config', '(Blank)'];
  const FuelType = ['Fuel Type', 'Diesel', 'Petrol'];
  const Transmission = ['Transmission', 'Automatic', 'CVT'];
  const Engine = ['Engine', '1.8', '2.0', '3.0','3.2'];
  const Cylinders = ['Cylinders', '4', '6'];
  const Division = ['Division', 'Motor Vehicles'];
  const Drive = ['Drive', '4x4', 'Front Wheel Drive'];
  const Seat = ['Seat', '4', '5'];
  const Doors = ['Doors', '2', '5'];
  const Odometer = ['Odometer', '5,000km','10,000km', '15,000km', '20,000km'];
  const State = ['State', 'ACT', 'NSW', 'QLD','SA','VIC','TAS','WA'];
  const Sale_category = ['Sale Category', 'Auction', 'Dealership', 'Fixed Price', 'Wholesale'];
  const Sale_date = ['Sale Date', 'Last 7 days', 'Last 30 days', 'Last 90 days'];
  const Sort_sold_date = ['Sort | Sold Date', 'Age', 'Odometer'];
  const Order_by = ['Order By', 'Asc', 'Desc'];

    return (
      <div>
         <div className="container">
         <Select 
            options= {Brand}
            onChange = { onChange }
          />
          <Select 
           options= {Model}
           onChange = { onChange }
          />
          <Select 
            options= {Years}
            onChange = { onChange }
          />
          <Select 
             options= {Badges}
             onChange = { onChange }
          />
          <Select 
              options= {BodyType}
              onChange = { onChange}
          />
          <Select 
             options= {BodyTypeCon}
             onChange = { onChange}
          />
          <Select 
            options= {FuelType}
            onChange = { onChange}
          />
          <Select 
            options= {Transmission}
            onChange = { onChange}
          />
          <Select 
            options= {Engine}
            onChange = { onChange}
          />
          <Select 
            options= {Cylinders}
            onChange = { onChange}
          />
          <Select 
            options= {Division}
            onChange = { onChange}
          />
          <Select 
            options= {Drive}
            onChange = { onChange}
          />
          <Select 
            options= {Seat}
            onChange = { onChange}
          />
          <Select 
           options= {Doors}
           onChange = { onChange}
          />
          <Select 
            options= {Odometer}
            onChange = { onChange}
          />
          <Select 
            options= {State}
            onChange = { onChange}
          />
          <Select 
            options= {Sale_category}
            onChange = { onChange}
          />
          <Select 
            options= {Sale_date}
            onChange = { onChange}
          />
          <Select 
            options= {Sort_sold_date}
            onChange = { onChange}
          />
          <Select 
            options= {Order_by}
            onChange = { onChange}
          />
          <InputBox placeholder="Enter text ..."/>
          <button className="btn btn-default">Apply Filter</button>
          <button className="btn btn-default">Clear Filter</button>
          <button className="btn btn-normal">Subscribe to Generate Summary Report</button>
         </div>
          
          <InfoSum/>
          <GetOneNow/>
          <Lists />         

      </div> 
    )
}

export default Filter;