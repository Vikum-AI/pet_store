import { Dropdown, Label, Radio } from 'flowbite-react'
import React from 'react'
import IStoreFilter from './IStoreFilter'

const StoreFilter = ({setItemFilter, setPriceFilter, categoryFilters}: IStoreFilter) => {
  return (
    <Dropdown className="!my-0" label='Filter' inline dismissOnClick={false} > 
        <div className="px-3 font-semibold">Price</div>
        <Dropdown.Item>
            <div className="flex items-center gap-2">
              <Radio
                id="lowToHigh"
                name="price"
                value="lowToHigh"
                onClick={() => {
                  setPriceFilter('lowToHigh')
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
                  setPriceFilter('highToLow')
                }}
              />
              <Label htmlFor="highToLow" value="high to low" />       
            </div>
        </Dropdown.Item>
        <br className='w-full h-2' />
        <div className="px-3 font-semibold">Categories</div>
        <Dropdown.Item>
            <div className="flex items-center gap-2">
              <Radio
                defaultChecked
                id="all"
                name="categories"
                value="all"
                onClick={() => {
                  setItemFilter('all')
                }}
              />
              <Label htmlFor="all" value="all" />       
            </div>
        </Dropdown.Item>

        {categoryFilters?.map((item) => (
            <Dropdown.Item key={item}>
                <div className="flex items-center gap-2">
                    <Radio
                        id={item}
                        name="categories"
                        value={item}
                        onClick={() => {
                          setItemFilter(item)
                        }}
                    />
                    <Label htmlFor={item} value={item} />       
                </div>
            </Dropdown.Item>
        ))}
    </Dropdown>
  )
}

export default StoreFilter