import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const API_URL = "http://localhost:7000";

const CreatePost = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const handleSubmit = async () => {
    const response = await fetch(`${API_URL}/cards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    navigate("/");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-blue-200">
      <div className="p-10 flex flex-col w-96 rounded-2xl gap-5 m-10 bg-gray-400">
        <label className="text-gray-700 text-sm font-bold">
          Title
          <input
            value={formData.name}
            type="text"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="border rounded w-full font-normal px-2 py-1"
          />
        </label>
        <label className="text-gray-700 text-sm font-bold">
          Description
          <textarea
            value={formData.description}
            type="text"
            required
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="border rounded w-full font-normal px-2 py-1"
          />
        </label>
        <button
          onClick={handleSubmit}
          className="bg-blue-600 mt-1 rounded-md text-white pl-4 pr-4 p-2 font-bold hover:bg-blue-500 text-lg"
        >
          Create Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
