import bin from "../../assets/Bin.png";
import pencil from "../../assets/Pencil Icon.png";
import pdf from "../../assets/pdf.png";
import storage from "../../assets/storage.png";
import truck from "../../assets/truck_delivery.png";
import support from "../../assets/support.png";

const data = [
  {
    orderId: "1532",
    recipient: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
    Anomaly: "Discrepancy Volume",
    declaredWeight: "12,3",
    detectedWeight: "12,3",
    declaredPv: "24,6 PV",
    declaredVolume: "0,098 mc3",
    detectedPv: "27,6 PV",
    detectedVolume: "0,033 mc3",
  
  },
  {
    orderId: "1532",
    recipient: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
    Anomaly: "Discrepancy Volume",
    declaredWeight: "12,3",
    detectedWeight: "12,3",
    declaredPv: "24,6 PV",
    declaredVolume: "0,098 mc3 ",
    detectedPv: "27,6 PV",
    detectedVolume: "0,033 mc3",
   

  },
  {
    orderId: "1532",
    recipient: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
    Anomaly: "Undelivered",
    declaredWeight: "--",
    detectedWeight: "12,3",
    anomalies: storage,
    declaredPv: "24,6 PV",
    declaredVolume: "0,098 mc3",
    detectedPv: "27,6 PV",
    detectedVolume: "0,033 mc3",
    storage: storage

  },
  {
    orderId: "1532",
    recipient: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
    Anomaly: "Damage",
    declaredWeight: "--",
    detectedWeight: "--",
    anomalies: storage,
    declaredPv: "",
    declaredVolume: "--",
    detectedPv: "--",
    detectedVolume: "",
    storage: storage

  },
  {
    orderId: "1532",
    recipient: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
    Anomaly: "Undelivered",
    declaredWeight: "--",
    detectedWeight: "--",
    anomalies: storage,
    declaredPv: "",
    declaredVolume: "--",
    total: "$16.19",
    status: "Pending",
    detectedPv: "--",
    detectedVolume: "",
  

  },
  {
    orderId: "1532",
    recipient: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
    Anomaly: "Damage",
    declaredWeight: "--",
    detectedWeight: "--",
    declaredPv: "",
    declaredVolume: "--  ",
    detectedPv: "",
    detectedVolume: "",
    

  },
];
export default data;
