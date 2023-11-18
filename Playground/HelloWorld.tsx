import * as React from "react";
import { Rating, IRating } from "@fluentui/react";

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

  React.useEffect(() => {
    setRating(props.rating);
  }, [props.rating]);

  React.useEffect(() => {
    console.log("component mounted");
  }, []);

  React.useEffect(() => {
    handleChange(rating);
  }, [rating]);

  return <Rating componentRef={ref} rating={rating} onChange={handleClick} />;
}
