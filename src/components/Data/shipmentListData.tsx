import bin from "../../assets/Bin.png";
import pencil from "../../assets/Pencil Icon.png";
import pdf from "../../assets/pdf.png";
import storage from "../../assets/storage.png";
import truck from "../../assets/truck_delivery.png";
import support from "../../assets/support.png";

const data = [
  {
    orderId: "1532",
    pdf: pdf,
    service: "With Label",
    recipient: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
    tracking_no: "155010345994",
    addService: "Insured up to amount",
    addAmmount: "$ 150,000",
    storage: "--",
    price: "$150,0",
    currentState: "Delivered",

    truck: truck,
    support: support,
  },
  {
    orderId: "1532",
    pdf: pdf,
    service: "With Label",
    recipient: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
    tracking_no: "155010345994",

    addService: "Insured up to amount",
    addAmmount: "$ 150,000",

    storage: "--",

    price: "$150,0",
    currentState: "On the Way ",

    truck: truck,
    support: support,
  },
  {
    orderId: "1532",
    pdf: pdf,
    service: "Without Label",
    recipient: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
    tracking_no: "155010345994",

    addService: "Insured up to amount",
    addAmmount: "$ 150,000",

    anomalies: storage,
    storage: "storage",

    price: "$150,0",
    currentState: "Being Delivered",

    truck: truck,
    support: support,
  },
  {
    orderId: "1532",
    pdf: pdf,
    service: "With Label",
    recipient: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
    tracking_no: "155010345994",

    addService: "Insured up to amount",
    addAmmount: "$ 150,000",

    anomalies: storage,
    storage: "storage",

    price: "$150,0",
    currentState: "Being Processed",

    truck: truck,
    support: support,
  },
  {
    orderId: "1532",
    pdf: pdf,
    service: "Without Label",
    recipient: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
    tracking_no: "155010345994",

    addService: "Insured up to amount",
    addAmmount: "$ 150,000",

    anomalies: storage,
    storage: "storage",

    price: "$150,0",
    currentState: "Delivered",
    total: "$16.19",
    status: "Pending",
    truck: truck,
    support: support,
  },
  {
    orderId: "1532",
    pdf: pdf,
    service: "Without Label",
    recipient: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
    tracking_no: "155010345994",

    addService: "Insured up to amount",
    addAmmount: "$ 150,000",

    storage: " --",

    price: "$150,0",
    currentState: "On the Way",

    truck: truck,
    support: support,
  },
  {
    orderId: "1532",
    pdf: pdf,
    service: "Without Label",
    recipient: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
    tracking_no: "155010345994",

    addService: "Insured up to amount",
    addAmmount: "$ 150,000",

    storage: " --",

    price: "$150,0",
    currentState: "On the Way",

    truck: truck,
    support: support,
  },
  {
    orderId: "1532",
    pdf: pdf,
    service: "Without Label",
    recipient: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
    tracking_no: "155010345994",

    addService: "Insured up to amount",
    addAmmount: "$ 150,000",

    storage: " --",

    price: "$150,0",
    currentState: "On the Way",

    truck: truck,
    support: support,
  },
];
export default data;
