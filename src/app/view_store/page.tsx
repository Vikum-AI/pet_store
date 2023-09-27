"use client";

import StoreFilter from "@/components/filters/StoreFilter";
import ItemsCard from "@/components/items-card/ItemsCard";
import NavigationBar from "@/components/nav-bar/NavigationBar";
import axios from "axios";
import { Card, TextInput, Button } from "flowbite-react";
import { useEffect, useState } from "react";

const ViewStore = () => {
  const [items, setItems] = useState([]);
  const [selectedItemFilter, setSelectedItemFilter] = useState("all");
  const [itemsList, setItemsList] = useState<any>(items);
  const [selectedPriceFilter, setSelectedPriceFilter] = useState();
  const [data, setData] = useState<any>();

  const category = items.map((item: any) => item.category);
  const categoryList = category.filter((item, p, q) => q.indexOf(item) === p);

  const sendEmail = () => {
    axios.post(
      "https://lybvc3ti6zccssfxtgcfmrlt4u0adrws.lambda-url.us-east-1.on.aws/",
      { email: data }
    );
  };

  const handleChange = (e: any) => {
    const value = e.target.value;
    setData(value);
  };

  useEffect(() => {
    (async () => {
      const data = await axios.get(
        "https://lybvc3ti6zccssfxtgcfmrlt4u0adrws.lambda-url.us-east-1.on.aws/"
      );
      setItems(data.data);
      setItemsList(data.data);
      console.log(data.data);
    })();
  }, []);

  useEffect(() => {
    let sortVal: any[] = [];
    if (selectedPriceFilter === "lowToHigh") {
      sortVal = items.sort((a: any, b: any) => {
        const priceA = parseInt(a.newPrice.replace(",", ""), 10);
        const priceB = parseInt(b.newPrice.replace(",", ""), 10);

        return priceB - priceA;
      });
    } else if (selectedPriceFilter === "highToLow") {
      sortVal = items.sort((a: any, b: any) => {
        const priceA = parseInt(a.price.replace(",", ""), 10);
        const priceB = parseInt(b.price.replace(",", ""), 10);

        return priceA - priceB;
      });
    }
    setItemsList(sortVal);
  }, [selectedPriceFilter]);

  useEffect(() => {
    setItemsList(items);
    if (selectedItemFilter !== "all") {
      setItemsList(
        items.filter((item: any) => item.category === selectedItemFilter)
      );
    }
  }, [selectedItemFilter]);

  return (
    <div className="min-h-screen bg-white">
      <NavigationBar />
      <div>
        <div className="mt-4 ml-4">
          <Card className="w-1/3">
            <p className="text-xl font-bold text-black">
              Send Inventory Report
            </p>

            <div className="flex w-full gap-5">
              <TextInput
                className="w-3/4"
                placeholder="name@hotmail.com"
                required
                type="email"
                onChange={handleChange}
              />
              <Button onClick={sendEmail}>Send</Button>
            </div>
          </Card>
        </div>
      </div>
      <div className="py-4 flex justify-end px-5">
        <StoreFilter
          setPriceFilter={setSelectedPriceFilter}
          categoryFilters={categoryList}
          setItemFilter={setSelectedItemFilter}
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {itemsList.map((item: any) => (
          <ItemsCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ViewStore;
