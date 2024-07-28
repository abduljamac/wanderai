"use client";
import { useState } from "react";
import cities from "@/data/cities";
import Image from "next/image";

export default function Home() {
  const [selectedCity, setSelectedCity] = useState("");
  const [guideLanguage, setGuideLanguage] = useState("");
  const [guideAccent, setGuideAccent] = useState("");
  const [guideGender, setGuideGender] = useState("");

  const languages = ["English", "Spanish", "French", "German", "Italian"];
  const accents = ["American", "British", "Australian", "Local"];
  const genders = ["Male", "Female", "Non-binary"];

  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-20">
      <h1 className="text-3xl font-bold mb-6">Create Your Tour Guide</h1>

      <div className="w-full max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Select a Destination</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {cities.map((city) => (
            <div
              key={city.id}
              className={`w-full aspect-[3/2] overflow-hidden group cursor-pointer relative rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                selectedCity === city.id ? "ring-4 ring-blue-500" : ""
              }`}
              onClick={() => setSelectedCity(city.id)}
            >
              <Image
                src={city.img}
                alt={city.title}
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                fill={true}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-full p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-2xl font-bold">{city.title}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4">
          Customize Your Tour Guide
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div>
            <label className="block mb-2 font-semibold">Language</label>
            <select
              className="w-full p-2 border rounded"
              value={guideLanguage}
              onChange={(e) => setGuideLanguage(e.target.value)}
            >
              <option value="">Select a language</option>
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 font-semibold">Accent</label>
            <select
              className="w-full p-2 border rounded"
              value={guideAccent}
              onChange={(e) => setGuideAccent(e.target.value)}
            >
              <option value="">Select an accent</option>
              {accents.map((accent) => (
                <option key={accent} value={accent}>
                  {accent}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 font-semibold">Gender</label>
            <select
              className="w-full p-2 border rounded"
              value={guideGender}
              onChange={(e) => setGuideGender(e.target.value)}
            >
              <option value="">Select a gender</option>
              {genders.map((gender) => (
                <option key={gender} value={gender}>
                  {gender}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          disabled={
            !selectedCity || !guideLanguage || !guideAccent || !guideGender
          }
        >
          Generate Tour Guide
        </button>
      </div>
    </div>
  );
}
