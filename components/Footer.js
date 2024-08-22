const Footer = () => {
  return (
    <footer className="py-10 bg-[url('/footer1.svg')] bg-cover w-full">
      <div className="container mx-auto flex flex-col items-center text-center space-y-8 px-4 md:flex-row md:justify-between md:space-y-0 lg:space-x-8">

        <div className="w-full md:w-1/3">
          <h3 className="text-xl md:text-2xl font-bold text-white">Address</h3>
          <p className="text-sm md:text-base text-white mt-2 leading-relaxed">
            Nr. Shastri maidan, opp. ISCKON Temple, Vallabh Vidyanagar, Anand,
            Gujarat, 388120
          </p>
        </div>

        <div className="w-full md:w-1/3">
          <h3 className="text-xl md:text-2xl font-bold text-white">Contact</h3>
          <p className="text-sm md:text-base text-white mt-2">02692 - 237240</p>
          <p className="text-lg md:text-xl font-bold text-white mt-5">
            Email: <br />
            <a href="mailto:principal@bbit.ac.in" className="text-white font-light text-sm md:text-base">
              principal@bbit.ac.in
            </a>
          </p>
        
        </div>

        <div className="w-full md:w-1/3 text-start">
          <h3 className="text-xl md:text-2xl font-bold text-white">Follow us on:</h3>
          <div className="flex justify-center md:justify-start mt-5 space-x-5">
            <a href="#" aria-label="Facebook">
              <img src="../footer/facebook.svg" alt="Facebook" className="w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src="../footer/insta.svg" alt="Instagram" className="w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a href="#" aria-label="Twitter">
              <img src="../footer/twitter.svg" alt="Twitter" className="w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img src="../footer/linkedin.svg" alt="LinkedIn" className="w-6 h-6 md:w-8 md:h-8" />
            </a>
          </div>
        </div>

      </div>
    
    </footer>
  );
};

export default Footer;
