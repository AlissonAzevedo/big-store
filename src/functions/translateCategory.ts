const TranslateCategory = (category: string) => {
  switch (category) {
    case "electronics":
      return "Eletrônicos";
    case "jewelery":
      return "Jóias";
    case "men's clothing":
      return "Roupas Masculinas";
    case "women's clothing":
      return "Roupas Femininas";
    default:
      return "Outros";
  }
};

export { TranslateCategory };
