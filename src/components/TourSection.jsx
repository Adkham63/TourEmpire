import React, { useState } from "react";
import "../index.css";
import {tours} from '../constants/index'
import {
  Clock,
  CircleDollarSign,
  MoveUpRight,
  X,
  Send,
  Mail,
  Instagram,
} from "lucide-react";
export const TourSection = ({ scrollToContact }) => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, tours.length);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);

  const openPopup = (tour) => {
    setSelectedTour(tour);
    setShowPopup(true);
    document.body.style.overflow = "hidden";
  };
  const closePopup = () => {
    setShowPopup(false);
    setSelectedTour(null);
    document.body.style.overflow = "";
  };

  const currentItems = tours.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleContactClick = () => {
    closePopup();
    scrollToContact();
  };
  return (
    <section id="tours">
      <div className="text-center">
        <span className="bg-[#222]  text-white rounded-full h-6 text-xl font-medium px-2 py-1 uppercase">
          Tours
        </span>
      </div>

      <div className="container relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-5">
          {currentItems.map((tour, index) => (
            <div className="tour-item" key={index}>
              <img src={tour.image} alt={tour.name} className="tour-img" />
              <div>
                <h4 className="text-xl mb-4 mt-2">{tour.name}</h4>
                <div className="tour-item-info">
                  <div className="tour-item-duration flex items-center gap-2">
                    <span className="p-2 rounded-full bg-[#eee]">
                      <Clock className="text-[#222]" />
                    </span>
                    <p className="text-lg">{tour.duration}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="p-2 rounded-full bg-[#eee]">
                      <CircleDollarSign className="text-[#222]" />
                    </span>
                    <p>{tour.price}</p>
                  </div>
                </div>
                <button
                  className="w-[100%] h-12 bg-[#eee] rounded-full mt-4 flex justify-center items-center relative"
                  onClick={() => openPopup(tour)}
                >
                  Learn More{" "}
                  <span className="absolute right-2 p-[5px] rounded-full bg-[#444]">
                    <MoveUpRight className=" text-[#eee]" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination flex justify-center items-center gap-2 mt-4">
          {Array.from(
            { length: Math.ceil(tours.length / itemsPerPage) },
            (_, i) => (
              <button
              key={i}
              className={currentPage === i + 1 ? "active" : ""}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
            )
          )}
        </div>

        {showPopup && selectedTour && (
          <>
            <div
              className="popup-overlay fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"
              onClick={closePopup}
            ></div>
            <div className="popup fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white rounded-lg z-20 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/3">
              <div className="popup-content">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl mb-4 mt-2">{selectedTour.name}</h4>
                  <span className="close cursor-pointer" onClick={closePopup}>
                    <X />
                  </span>
                </div>
                <img
                  src={selectedTour.image}
                  alt={selectedTour.name}
                  className="tour-popup-img object-cover max-h-[200px] w-full rounded-lg"
                />
                <div className="tour-item-info mt-4">
                  <div className="flex items-center justify-between">
                    <div className="tour-item-duration flex items-center gap-2">
                      <span className="p-2 rounded-full bg-[#eee]">
                        <Clock className="text-[#222]" />
                      </span>
                      <p className="text-lg">{selectedTour.duration}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="p-2 rounded-full bg-[#eee]">
                        <CircleDollarSign className="text-[#222]" />
                      </span>
                      <p>{selectedTour.price}</p>
                    </div>
                  </div>
                  <p className="tour-description text-sm">
                    {selectedTour.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <a
                      className="contact-btn w-[50%] p-2 rounded-full bg-[#222] text-white text-center mt-4 cursor-pointer"
                      onClick={handleContactClick}
                    >
                      Contact
                    </a>
                    <div className="flex gap-2 items-center justify-between mt-2">
                      <span className="cursor-pointer flex justify-center items-center w-[35px] h-[35px] p-2 rounded-full bg-[#222] text-white">
                        <Send />
                      </span>
                      <span className="cursor-pointer flex justify-center items-center w-[35px] h-[35px] p-2 rounded-full bg-[#222] text-white">
                        <Mail />
                      </span>
                      <span className="cursor-pointer flex justify-center items-center w-[35px] h-[35px] p-2 rounded-full bg-[#222] text-white">
                        <Instagram />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
