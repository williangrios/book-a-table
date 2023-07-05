import SearchHeader from "@/components/SearchHeader";
import SearchRestaurandCard from "@/components/SearchRestaurandCard";
import SearchSideBar from "@/components/SearchSideBar";
import React from "react";

export default function Search() {
  return (
    <>
      <SearchHeader />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar />
        <div className="w-5/6">
          <SearchRestaurandCard />
        </div>
      </div>
    </>
  );
}
