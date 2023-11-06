import { Stack, Box } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { Icon } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdDevicesOther } from "react-icons/md";
import { BiSpreadsheet } from "react-icons/bi";
import { AiOutlineStock } from "react-icons/ai";
import { GiGemNecklace, GiTravelDress, GiClothes } from "react-icons/gi";
import routesName from "../router/routesName";
import { useNavigate } from "react-router-dom";
import { isAdmin } from "../libs/helpers/auth";

const userMenus = [
  {
    name: "Electronics",
    icon: MdDevicesOther,
    route: routesName.ELECTRONICS,
  },
  {
    name: "Jewelry",
    icon: GiGemNecklace,
    route: routesName.JEWELRY,
  },
  {
    name: "Men's clothing",
    icon: GiClothes,
    route: routesName.MENS_CLOTH,
  },
  {
    name: "Women's clothing",
    icon: GiTravelDress,
    route: routesName.WOMENS_CLOTH,
  },
];

const Sidebar = ({ isOpen }) => {
  const navigate = useNavigate();
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const sideBarAdmin = async () => {
      if (await isAdmin()) {
        const adminMenu = [
          {
            name: "Update stock",
            icon: AiOutlineStock,
            route: routesName.UPDATE_STOCK,
          },
          {
            name: "Report",
            icon: BiSpreadsheet,
            route: routesName.REPORT,
          },
        ];
        return setMenus(adminMenu);
      }
    };
    sideBarAdmin();
    setMenus(userMenus);
  }, []);

  return (
    <div
      className={`w-72 h-full p-6 text-gray-600 ${
        isOpen
          ? "block bg-orange-100 md:bg-orange-100 z-50 md:z-0 h-screen md:h-auto fixed md:relative top-0 md:top-auto"
          : "hidden"
      } md:block`}
    >
      <Stack direction={"column"} spacing="35px">
        <Box
          className="text-2xl mb-10 flex flex-row space-x-3 items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <Icon
            as={AiOutlineShoppingCart}
            w="35px"
            h="35px"
            color="black.400"
          />
          <p className="font-bold">OneStore</p>
        </Box>
        {menus.map((menu, idx) => {
          return (
            <Box
              onClick={() => navigate({ pathname: menu.route })}
              key={idx}
              className="flex flex-row space-x-3 items-center cursor-pointer"
            >
              <Icon as={menu.icon} w="20px" h="20px" color="black.400" />
              <p className="text-base font-semibold">{menu.name}</p>
            </Box>
          );
        })}
      </Stack>
    </div>
  );
};

export default Sidebar;
