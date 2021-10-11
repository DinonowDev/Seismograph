import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { p2e } from "./../../Utils/Utils";
import { BoxItem } from "../index";
import classes from "./ListLarze.module.scss";
import Lang from "./../../context/lang.context";

export const ListLarze = () => {
  const [state, setState] = useState([]);
  const lang = useContext(Lang);

  const getData = (link = "http://irsc.ut.ac.ir/events_list_fa.xml") => {
    axios.get(link).then((response) => {
      let tempStateData = [];

      const parser = new DOMParser();
      const xmlDOM = parser.parseFromString(response.data, "text/xml");

      let items = xmlDOM.getElementsByTagName("item");
      let listDataArr = [].slice.call(items);
      listDataArr.splice(0, 1);

      listDataArr.map((item) => {
        let itemData = [].slice.call(item.children);

        let lat = itemData[10]?.textContent.split(" ");
        lat = p2e(lat[0]);

        let long = itemData[9]?.textContent.split(" ");
        long = p2e(long[0]);

        tempStateData.push({
          id: itemData[0]?.textContent,
          reg1: itemData[1]?.textContent,
          dis1: itemData[2]?.textContent,
          reg2: itemData[3]?.textContent,
          dis2: itemData[4]?.textContent,
          reg3: itemData[5]?.textContent,
          dis3: itemData[6]?.textContent,
          mag: itemData[7]?.textContent,
          dep: itemData[8]?.textContent,
          long: long,
          lat: lat,
          date: itemData[11].textContent,
        });
      });

      setState(tempStateData);
    });
  };

  useEffect(() => {
    let link;
    if (lang === "fa") {
      link = "http://irsc.ut.ac.ir/events_list_fa.xml";
    } else {
      link = "http://irsc.ut.ac.ir/events_list.xml";
    }
    getData(link);
  }, [lang]);

  useEffect(() => {
    console.log(state);
  }, [state])

  return (
    <div className={classes.listItemsBox}>
      {state.map((item) => {
        return <BoxItem {...item} />;
      })}
    </div>
  );
};
