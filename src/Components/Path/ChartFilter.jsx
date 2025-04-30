import React, { Fragment, useState, useEffect, useRef } from "react";
import { ReactSVG } from "react-svg";
import useHostname from "../Provider/HostnameProvider";
import { useDarkModeContext } from "@/pages/context/DarkModeContext";

const ChartFilter = () => {
  const originalUrl = useHostname();
  const { darkMode } = useDarkModeContext();

  const [toogleSelect, settoogleSelect] = useState("Month");
  const [toogleDropdown, settoogleDropdown] = useState(false);

  // Menggunakan useRef untuk merujuk ke elemen dropdown
  const dropdownRef = useRef(null);

  // Fungsi untuk menangani klik di luar area dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        settoogleDropdown(false); // Menutup dropdown jika klik di luar
      }
    };

    // Menambahkan event listener saat komponen dimuat
    document.addEventListener("mousedown", handleClickOutside);

    // Membersihkan event listener saat komponen dibongkar
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Fragment>
      <div className="inline-block relative z-[9]" ref={dropdownRef}>
        {/* Tombol untuk membuka/tutup dropdown */}
        <div
          onClick={() => settoogleDropdown(!toogleDropdown)}
          className="cursor-pointer flex items-center gap-2 py-1 pl-[12px] pr-1 rounded-full border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark"
        >
          <p className="font-medium text__14 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
            This {toogleSelect}
          </p>
          <ReactSVG
            className={
              "transition-all duration-200 " + (toogleDropdown ? "-rotate-180" : "")
            }
            src={originalUrl + "/images/Chevron-down.svg"}
            beforeInjection={(svg) => {
              svg.setAttribute("fill", darkMode ? "white" : "#1A1A1A");
              svg.setAttribute("stroke", darkMode ? "white" : "#1A1A1A");
            }}
          />
        </div>

        {/* Dropdown menu */}
        <div
          className={
            "absolute right-0 shadow-[32px_32px_40px_rgba(35,35,35,0.06)] rounded-2xl bg-Mbackgrounds-bg-primary dark:bg-Mbackgrounds-bg-primary-dark border !border-Mborder-border-secondary dark:!border-Mborder-border-secondary-dark transition-all duration-300 " +
            (toogleDropdown
              ? "top-[106%]"
              : "top-[130%] opacity-0 pointer-events-none")
          }
        >
          {["Day", "Month", "Year"].map((obj) => {
            return (
              <div
                key={obj} // Tambahkan key untuk menghindari warning React
                onClick={() => {
                  settoogleSelect(obj);
                  settoogleDropdown(false); // Menutup dropdown setelah memilih opsi
                }}
                className="cursor-pointer inline-block w-full text__14 text-Mtext-text-primary dark:text-Mtext-text-primary-dark px-3 py-2"
              >
                {obj}
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default ChartFilter;