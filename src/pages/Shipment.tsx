import img from "../assets/shipment_list_icon.png";
import ShipmentList from "../components/ShipmentList";

const DasboardDetails = () => {
  return (
    <div className="p-4">
      <div className="flex  items-center gap-2">
        <img src={img} alt="" />
        <h1 className="text-xl md:text-4xl font-bold text-[#213C70]">
          Shipment List
        </h1>
      </div>

      <div className="py-4">
        <div className="py-4 lg:py-8">
          <ShipmentList />
        </div>
      </div>
    </div>
  );
};

export default DasboardDetails;
