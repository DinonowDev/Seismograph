import classes from "./Cities.module.scss";
import { p2e } from "./../../Utils/Utils";
import Lang from "./../../context/lang.context";
import { useContext } from "react";

export const Cities = (props) => {
  const lang = useContext(Lang);

  return (
    <div key="cities" className={classes.Cities}>
      <h3>{lang === "fa" ? "شهر ها" : "Cities"}</h3>
      <div>
        <p>
          <span>{lang === "fa" ? "شهر" : "City"}</span> : {props.reg1}
        </p>
        <p>
          <span>{lang === "fa" ? "فاصله" : "Distance"}</span> : {p2e(props.dis1)}Km
        </p>
      </div>
      <div>
        <p>
          <span>{lang === "fa" ? "شهر" : "City"}</span> : {props.reg2}
        </p>
        <p>
          <span>{lang === "fa" ? "فاصله" : "Distance"}</span> : {p2e(props.dis2)}Km
        </p>
      </div>
      <div>
        <p>
          <span>{lang === "fa" ? "شهر" : "City"}</span> : {props.reg3}
        </p>
        <p>
          <span>{lang === "fa" ? "فاصله" : "Distance"}</span> : {p2e(props.dis3)}Km
        </p>
      </div>
    </div>
  );
};
