interface IPetCard {
  data: {
    id: string;
    title: string;
    imageURL: string;
    breed: string;
    color: string;
    age: string | number;
    characteristic: string;
    prevPrice: string;
    newPrice: string;
  };
  admin?: boolean;
}

export default IPetCard;
