import * as React from "react";
import { Rating, IRating, ITheme, PartialTheme, ThemeProvider } from "@fluentui/react";
import "./style.css";
import colors from "tailwindcss/colors";

export interface IHelloWorldProps {
  rating: number;
  handleChange: (val: number | undefined) => void;
}

export function HelloWorld(props: IHelloWorldProps) {
  const { handleChange } = props;
  const [rating, setRating] = React.useState<number | undefined>(props.rating);
  const ref = React.useRef<IRating>(null);

  const handleClick = (e: React.FormEvent<HTMLElement>, rating: number | undefined) => {
    setRating(rating);
  };

  // const theme: PartialTheme = {
  //   spacing: {
  //     s1: "100px",
  //   },
  //   palette: {
  //     themePrimary: colors.rose[600],
  //     themeSecondary: colors.sky[600],
  //   },
  // };

  React.useEffect(() => {
    setRating(props.rating);
  }, [props.rating]);

  React.useEffect(() => {
    console.log("component mounted");
  }, []);

  React.useEffect(() => {
    handleChange(rating);
  }, [rating]);

  return (
    // <ThemeProvider theme={theme}>
    // </ThemeProvider>
    <div className="w-52 bg-slate-300 rounded-lg m-12 border-slate-500 border-2 mx-auto">
      <Rating componentRef={ref} rating={rating} onChange={handleClick} />
    </div>
  );
}
