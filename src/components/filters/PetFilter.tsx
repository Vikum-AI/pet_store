import { Dropdown, Label, Radio } from "flowbite-react";
import React from "react";
import IPetFilter from "./IPetFilter";

const PetFilter = ({
  setPetFilter,
  setPriceFilter,
  setAgeFilter,
  breedFilters,
  colorFilters,
  setColorFilters
}: IPetFilter) => {
  return (
    <Dropdown
      className="!my-0 !text-black"
      label="Filter"
      inline
      dismissOnClick={false}
    >
      <div className="px-3 font-semibold">Price</div>
      <Dropdown.Item>
        <div className="flex items-center gap-2">
          <Radio
            id="lowToHigh"
            name="price"
            value="lowToHigh"
            onClick={() => {
              setPriceFilter("lowToHigh");
            }}
          />
          <Label htmlFor="lowToHigh" value="low to high" />
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex items-center gap-2">
          <Radio
            id="highToLow"
            name="price"
            value="highToLow"
            onClick={() => {
              setPriceFilter("highToLow");
            }}
          />
          <Label htmlFor="highToLow" value="high to low" />
        </div>
      </Dropdown.Item>
      <br className="w-full h-2" />
      <div className="px-3 font-semibold">Breeds</div>
      <Dropdown.Item>
        <div className="flex items-center gap-2">
          <Radio
            id="all"
            name="price"
            value="all"
            onClick={() => {
              setPetFilter("all");
            }}
          />
          <Label htmlFor="all" value="all" />
        </div>
      </Dropdown.Item>

      {breedFilters?.map((item) => (
        <Dropdown.Item key={item}>
          <div className="flex items-center gap-2">
            <Radio
              id={item}
              name="price"
              value={item}
              onClick={() => {
                setPetFilter(item);
              }}
            />
            <Label htmlFor={item} value={item} />
          </div>
        </Dropdown.Item>
      ))}

      <div className="px-3 font-semibold">Age</div>
      <Dropdown.Item>
        <Radio
          id="age_1"
          name="price"
          value={0}
          onClick={() => {
            setAgeFilter(0);
          }}
        />
        <Label htmlFor="less" value="Less than 1 year" />
      </Dropdown.Item>
      <Dropdown.Item>
        <Radio
          id="age_2"
          name="price"
          value={1}
          onClick={() => {
            setAgeFilter(1);
          }}
        />
        <div></div>
        <Label htmlFor="more" value="More than 1 year" />
      </Dropdown.Item>

      <div className="px-3 font-semibold">Colors</div>
      <Dropdown.Item>
        <div className="flex items-center gap-2">
          <Radio
            id="all"
            name="price"
            value="all"
            onClick={() => {
              setColorFilters("all");
            }}
          />
          <Label htmlFor="all" value="all" />
        </div>
      </Dropdown.Item>
      {colorFilters?.map((item) => (
        <Dropdown.Item key={item}>
          <div className="flex items-center gap-2">
            <Radio
              id={item}
              name="price"
              value={item}
              onClick={() => {
                setColorFilters(item);
              }}
            />
            <Label htmlFor={item} value={item} />
          </div>
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
};

export default PetFilter;
