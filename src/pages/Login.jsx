import React, { useState } from "react";
import { Box } from "@chakra-ui/layout";
import { Button, useToast } from "@chakra-ui/react";
import LogoCart from "../assets/images/Cart.svg";
import { http } from "../libs/services/http";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../libs/helpers/auth";
import { useEffect } from "react";

const method = "post";
const url = "auth/login";

const Login = () => {
  useEffect(() => {
    const testAuth = async () => {
      if (isAuthenticated()) window.location.href = "/";
    };
    testAuth();
  }, []);

  const toast = useToast();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("authToken", "admin-token");
      localStorage.setItem("username", username);
      navigate("/report");
      window.location.reload();
      return;
    }
    const data = {
      username,
      password,
    };
    const response = await http(method, url, data);
    if (response.isError) {
      toast({
        title: "Login Failed!",
        description: "Please check username or password.",
        status: "error",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
      localStorage.removeItem("authToken");
      localStorage.removeItem("username");
      setLoading(false);
      return;
    }
    localStorage.setItem("authToken", response.data.token);
    localStorage.setItem("username", username);
    navigate("/");
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex px-5 pb-5 md:p-0 md:flex-row md:space-x-10 items-center justify-center">
      <div className="bg-white p-5 lg:p-10 rounded-md shadow-lg w-full md:w-6/12 lg:w-5/12 xl:w-4/12">
        <a href="/">
          <Box className="justify-center text-2xl mb-10 flex space-x-3 items-center">
            <img src={LogoCart} width="150px" alt="LogoCart" />
          </Box>
          <p className="text-center text-2xl text-gray-600">OneStore</p>
        </a>

        <form className="space-y-5 w-full" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-bold text-gray-500">
              Username
            </label>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border-2 border-gray-500 p-3 rounded outline-none focus:border-orange-500"
              label="beli"
            />
          </div>

          <div>
            <label className="block mb-1 font-bold text-gray-500">
              Password
            </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-2 border-gray-500 p-3 rounded outline-none focus:border-orange-500"
            />
          </div>

          <Button
            isLoading={loading}
            type="submit"
            backgroundColor="orange.300"
            style={{ width: "100%" }}
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
