export const useCreateFeature = () => {
  const titles = [
    "Improving end distrusts instantly",
    "Become the tended active",
    "Message or am nothing",
    "Really boy law county",
  ];
  const texts = [
    "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",

    "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",

    "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",

    "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
  ];

  const featuresData = titles.map((title, index) => ({
    title,
    text: texts[index],
  }));

  return { featuresData };
};
