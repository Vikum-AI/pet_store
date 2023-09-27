"use client";

import PetFilter from "@/components/filters/PetFilter";
import NavigationBar from "@/components/nav-bar/NavigationBar";
import ItemCard from "@/components/pet-card/PetCard";
import PetEditor from "@/components/pet-editor/PetEditor";
import axios from "axios";
import { useState, useEffect } from "react";

const ViewPets = () => {
  const [pets, setPets] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loggedInTrigger, setLoggedInTrigger] = useState(false);
  const [selectedPetFilter, setSelectedPetFilter] = useState("all");
  const [selectedPriceFilter, setSelectedPriceFilter] = useState();
  const [petsList, setPetsList] = useState<any>(pets);
  const [ageFilter, setAgeFilter] = useState<null | number>(null);
  const [colorFilter, setColorFilter] = useState<null | string>('all');

  const breeds = pets.map((item: any) => item.breed);
  const breedsList = breeds.filter((item, p, q) => q.indexOf(item) === p);

  const colors = pets.map((item: any) => item.color);
  const colorsList = colors.filter((item, p, q) => q.indexOf(item) === p);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) setIsAuthenticated(true);
    else setIsAuthenticated(false);
  }, [loggedInTrigger]);

  useEffect(() => {
    (async () => {
      const data = await axios.get(
        "https://lcbv4eko7hewypbhllatabxcku0tibwl.lambda-url.us-east-1.on.aws/"
      );

      setPets(data.data);
      setPetsList(data.data);
      console.log(data.data);
    })();
  }, []);

  useEffect(() => {
    setPetsList(pets);
    if (selectedPetFilter !== "all") {
      setPetsList(pets.filter((item: any) => item.breed === selectedPetFilter));
    }
  }, [selectedPetFilter]);

  useEffect(() => {
    setPetsList(pets);
    if (colorFilter !== "all") {
      setPetsList(pets.filter((item: any) => item.color === colorFilter));
    }
  }, [colorFilter]);

  console.log(selectedPriceFilter);

  useEffect(() => {
    let sortVal: any[] = [];
    if (selectedPriceFilter === "lowToHigh") {
      sortVal = pets.sort((a: any, b: any) => {
        const priceA = parseInt(a.newPrice.replace(",", ""), 10);
        const priceB = parseInt(b.newPrice.replace(",", ""), 10);

        return priceB - priceA;
      });
    } else if (selectedPriceFilter === "highToLow") {
      sortVal = pets.sort((a: any, b: any) => {
        const priceA = parseInt(a.newPrice.replace(",", ""), 10);
        const priceB = parseInt(b.newPrice.replace(",", ""), 10);

        return priceA - priceB;
      });
    }
    setPetsList(sortVal);
  }, [selectedPriceFilter]);

  useEffect(() => {
    let sortVal: any[] = [];
    if (ageFilter === 0) {
      pets.forEach((item: any) => {
        if (parseInt(item.age) <= 1) {
          sortVal.push(item);
        }
      });
    } else if (ageFilter === 1) {
      pets.forEach((item: any) => {
        if (parseInt(item.age) > 1) {
          sortVal.push(item);
        }
      });
    }

    setPetsList(sortVal);
  }, [ageFilter]);

  return (
    <div className="min-h-screen bg-white">
      <NavigationBar setTrigger={setLoggedInTrigger} />

      <div className="flex flex-row-reverse justify-start gap-3 px-3">
        {isAuthenticated ? <PetEditor /> : null}

        <PetFilter
          setPriceFilter={setSelectedPriceFilter}
          setPetFilter={setSelectedPetFilter}
          breedFilters={breedsList}
          colorFilters={colorsList}
          setAgeFilter={setAgeFilter}
          setColorFilters={setColorFilter}
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        {petsList.map((item: any) => (
          <ItemCard key={item.id} data={item} admin={isAuthenticated} />
        ))}
      </div>
    </div>
  );
};

export default ViewPets;
