import React from "react";
import { RatingProps } from "./Rating.props";
import StarIcon from "./star.svg";
import styles from "./Rating.module.css";
import cn from "classnames";

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  className,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = React.useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  React.useEffect(() => {
    constructRating(rating);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating]);

  const changeDispay = (i: number) => {
    if (!isEditable) return;

    constructRating(i);
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) return;

    setRating(i);
  };

  const handleSpace = (e: React.KeyboardEvent<SVGElement>, i: number) => {
    if (e.code !== "Space" || !setRating) return;
    setRating(i);
  };

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span
          onMouseEnter={() => changeDispay(i + 1)}
          onMouseLeave={() => changeDispay(rating)}
          onClick={() => onClick(i + 1)}
          className={cn(
            styles.star,
            {
              [styles.filled]: i < currentRating,
              [styles.editable]: isEditable,
            },
            className
          )}
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: React.KeyboardEvent<SVGElement>) =>
              isEditable && handleSpace(e, i + 1)
            }
          />
        </span>
      );
    });

    setRatingArray(updatedArray);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
