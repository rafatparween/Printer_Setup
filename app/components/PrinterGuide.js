export default function PrinterGuide() {
  return (
    <div className="bg-white p-8">
      <h4 className="flex justify-center text-[30px] text-blue-500 text-2xl text-[#1c85c1] mb-4">
        Some Simple Steps to Rectify the Error of Printer
      </h4>

      <h4 className="w-[540px] h-[28px] text-[24px] m-[auto] text-[#1c85c1] mb-[8px]">Blank Page Error</h4>

      <ul className="list-disc w-[540px] h-[744px] pt-0 pr-0 pb-0 pl-10 text-[16px] font-normal ">
        <li>Check the estimated ink levels.</li>
        <li>Load a plain white paper in the paper tray.</li>
        <li>
          Touch the minus button (–) next to the setup (wrench) icon on the
          lower-left corner of the printer’s control panel.
        </li>
        <li>
          Touch the Right Arrow button ({">"}) to select Tools, and then touch OK.
        </li>
        <li>
          Touch ({">"}) again to select Estimated Ink Levels, and then touch OK. A
          figure will appear on the printer LCD screen, showing ink levels.
        </li>
        <li>
          If any of the ink cartridges are low on ink, see the next step to
          replace them.
        </li>
        <li>
          Load a plain white paper in the input tray, and press the Power button
          to turn on the printer.
        </li>
        <li>Open the cartridge door. Wait until the printer turns silent and idle.</li>
        <li>Give a light press to the cartridge to release it. Pull it out.</li>
        <li>
          Hold the new cartridge by its sides with the nozzles toward the printer.
          Insert it into its colour-coded slot until it snaps into place automatically.
        </li>
        <li>
          Insert the tri-colour cartridge in the left slot and the black cartridge in
          the right slot. Close the cartridge door.
        </li>
        <li>
          Now, align your HP printer’s cartridges. Follow the next few steps to do it.
          Ensure that the printer is turned on and a plain paper is loaded in the input tray.
        </li>
        <li>
          Touch the minus button (–) next to the Setup (wrench) icon on the
          lower-left corner of the printer’s control panel.
        </li>
        <li>
          Touch the Right Arrow button ({">"}) to select Tools, and then touch OK.
          Touch the ({">"}) button again to select Align Printer, and then touch OK.
        </li>
        <li>
          The printer will print an alignment page.
        </li>
        <li>
          Lift the printer lid. Place the alignment page (printed-side down) on the
          right-front corner of the scanner glass. Follow the engraved guide next
          to the scanner glass to load the alignment page.
        </li>
        <li>
          Close the lid, and then press OK to finish the alignment command.
          Wait until the printer scans the alignment sheet and finishes the
          alignment process.
        </li>
      </ul>

      <div className="w-[570px] mt-[-617px] m-[auto]">
        <img
          src="hp1.png"
          alt="Printer Image 1"
          width={432}
          height={389}
        />
        <img
          src="hp2.png"
          alt="Printer Image 2"
          width={432}
          height={389}
        />
      </div>
    </div>
  );
};
