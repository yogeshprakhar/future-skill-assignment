import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Post from "../components/Post";
import Footer from "../components/Footer";

let API_URL = "http://localhost:7000";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchAllPosts = async () => {
      const response = await fetch(`${API_URL}/cards`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();

      setPosts(result);
    };
    fetchAllPosts();
  }, []);

  const handleSearch = async () => {
    const response = await fetch(`${API_URL}/cards/search/${input}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (!response.ok) {
      return;
    }
    const result = await response.json();

    if (result.length >= 1) {
      setPosts(result);
      return;
    }
  };

  return (
    <div>
      <Header />
      <div className="bg-violet-200 flex flex-col justify-center items-center gap-7 text-center p-14">
        <div className="text-4xl font-bold">How can we help?</div>
        <input
          className="w-[35%] py-2 px-3 rounded-lg"
          placeholder="search"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
      </div>
      <div className="flex flex-wrap p-16 m-10 justify-around">
        {posts.map((data) => (
          <div className="m-10">
            <Post title={data?.name} desc={data?.description} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
