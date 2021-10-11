import classes from "./BaseInfo.module.scss";
import { WiTime4 } from "react-icons/wi";
import { MdOutlineReportProblem } from "react-icons/md";
import { GiEarthAmerica, GiEarthAfricaEurope } from "react-icons/gi";
import Lang from "./../../context/lang.context";
import { useContext } from "react";

export const BaseInfo = (props) => {
  const lang = useContext(Lang);
  return (
    <div key="baseInfo" className={classes.BaseInfo}>
      <div>
        {lang === "fa" ? "زمان" : "Time"} : {props.date}{" "}
        <WiTime4 className={classes.icons} />
      </div>
      <div>
        {lang === "fa" ? "عمق" : "Depth"} : {props.dep} {lang === "fa" ? "کیلومتر" : "Km"}{" "}
        <MdOutlineReportProblem className={classes.icons} />
      </div>
      <div>
      {lang === "fa" ? "عرض جغرافیایی" : "Latitude"} : {props.lat}N{" "}
        <GiEarthAfricaEurope className={classes.icons} />
      </div>
      <div>
      {lang === "fa" ? "طول جغرافیایی" : "Longitude"} : {props.lat}E{" "}
        <GiEarthAmerica className={classes.icons} />
      </div>
    </div>
  );
};
