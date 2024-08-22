const Footer_Mob = () => {
  return (
    <div className="absolute w-full overflow-x-hidden">
      <div className="absolute w-full bottom-10 mt-24 z-10 flex justify-around text-white">
        <div className="flex flex-row">
          <div className="flex flex-col text-xs ml-1">
            <h3 className="font-bold">Address:</h3>
            Nr. Shastri maidan,
            <br/>
            opp. ISCKON Temple,
            <br/> Vallabh Vidyanagar,<br/>
            Anand, Gujarat, 388120
          </div>
          <div className="flex flex-col text-xs ml-4">
            <h3 className="font-bold">Contact:</h3>
            <p>02692 - 237240</p>
            <h3 className="mt-4 font-bold">Email:</h3>
            <p
              className="cursor-pointer"
              onClick={() => window.open("mailto:principal@bbit.ac.in")}
            >
              principal@bbit.ac.in
            </p>
          </div>
          <div className="flex flex-col text-xs mt-0">
            <h3 className="font-bold">Follow Us On:</h3>
            <div className="flex gap-2 mr-2">
              <img
                className="w-4 h-8 cursor-pointer"
                src="../footer/insta.svg"
                alt="Instagram"
                onClick={() => window.open("/", "_blank")}
              />
              <img
                className="w-4 h-8 cursor-pointer"
                src="../footer/linkedin.svg"
                alt="LinkedIn"
                onClick={() => window.open("/", "_blank")}
              />
              <img
                className="w-4 h-8 cursor-pointer"
                src="../footer/twitter.svg"
                alt="Twitter"
                onClick={() => window.open("/", "_blank")}
              />
              <img
                className="w-4 h-8 cursor-pointer"
                src="../footer/facebook.svg"
                alt="Facebook"
                onClick={() => window.open("/", "_blank")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full bottom-2 z-10 text-xs text-white text-center">
        Copyright 2024. All Rights Reserved By BBIT
      </div>
      <div className="relative w-full flex justify-center items-center bottom-0">
        <img src="/footer.svg" alt="footer" className="w-full h-full mt-10"
        />
      </div>
    </div>
  );
};

export default Footer_Mob;