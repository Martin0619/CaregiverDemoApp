type Resource = {
  id: string;
  title: string;
  author: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  introduction: string;
  text: string;
};

type Category = {
  id: string;
  image: string;
  title: string;
};
