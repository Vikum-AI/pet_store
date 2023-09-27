interface IItemCard {
  data: {
    id: string;
    name: string;
    imageURL?: string;
    status?: string;
    price: number;
    category: string;
  };
  admin?: boolean;
}

export default IItemCard;
