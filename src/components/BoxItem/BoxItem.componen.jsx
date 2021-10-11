import classes from "./BoxItem.module.scss";
import { Cities, BaseInfo } from "../index";

export const BoxItem = (props) => {
  return (
    <div key={props.id} className={classes.boxItem}>
      <div className={classes.infoBox}>
        <Cities {...props} />
        <BaseInfo {...props} />
      </div>
      <iframe
        className={classes.iframeLocation}
        src={`https://map.parsijoo.ir/API.html?lat=${props?.lat}&lon=${props?.long}&zoom=8&m=1`}
      ></iframe>
    </div>
  );
};
