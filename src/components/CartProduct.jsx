import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/react";
import React from "react";
import LogoTrash from "../assets/images/trash.svg";
/** @jsxImportSource @emotion/react */
import { PlusBiru, PlusGray, MinusMerah } from "./PlusMinus.styled";

const CartProduct = ({
  id,
  image,
  title,
  price,
  count,
  handleClickAdd,
  handleClickSubtract,
  handleRemoveItem,
  stock,
}) => {
  return (
    <Box p="4" className="shadow-lg text-gray-600 rounded-lg">
      <div className="flex flex-row mb-3">
        <Image
          src={image}
          alt="product"
          className="object-contain h-16 md:h-40 bg-white bg-opacity-40"
        />

        <Box px="3" className="w-full flex flex-col justify-between">
          <div className="space-y-2">
            <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
              {title}
            </Box>
            <Box className="font-semibold">$ {price}</Box>
          </div>
          <div className="space-x-5 flex flex-row justify-between items-center relative">
            <img
              src={LogoTrash}
              width="30px"
              alt="Trash"
              className="cursor-pointer"
              olor="red"
              onClick={() => handleRemoveItem(id)}
            />
            {stock - count < 5 && (
              <p className="absolute -top-7 right-5 text-sm text-red-500">
                Stock sisa {stock - count}
              </p>
            )}
            <Stack
              direction="row"
              spacing={4}
              align="center"
              className="space-x-5"
            >
              <MinusMerah onClick={() => handleClickSubtract(id)}>
                -
              </MinusMerah>
              <p className="text-xl font-bold">{count}</p>
              {stock - count === 0 ? (
                <PlusGray
                  onClick={() => stock - count !== 0 && handleClickAdd(id)}
                >
                  +
                </PlusGray>
              ) : (
                <PlusBiru
                  onClick={() => handleClickAdd(id)}
                >
                  +
                </PlusBiru>
              )}
            </Stack>
          </div>
        </Box>
      </div>
    </Box>
  );
};

export default CartProduct;
