import React from "react";
import { StarIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";

const CardProduct = ({
  id,
  category,
  image,
  title,
  price,
  rating,
  handleClick,
  stock,
}) => {
  return (
    <Box
      w="250px"
      className="shadow-lg cursor-pointer text-gray-600"
      overflow="hidden"
      onClick={() => handleClick(id)}
    >
      <Image
        src={image}
        alt="product"
        w="100%"
        className="object-contain h-20 md:h-40 bg-white bg-opacity-40"
      />

      <Box p="3" className="space-y-2">
        <Box className="flex flex-row">
          <p className="text-sm">Stock : {stock}</p>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {title}
        </Box>

        <div className="flex flex-row justify-between items-center">
          <Box fontSize="sm">$ {price}</Box>

          <Box display="flex" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < rating.rate ? "yellow.300" : "gray.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {rating.count} reviews
            </Box>
          </Box>
        </div>
      </Box>
    </Box>
  );
};

export default CardProduct;
