function Footer() {
  return (
    <footer>
      <div className="bg-footer py-2">
        <div className="container mx-auto text-center">
          <a href="#" className="text-xl mr-20 text-white hover:text-gray-300">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="text-xl text-white hover:text-gray-300">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-xl ml-20 text-white hover:text-gray-300">
            <i className="fab fa-dribbble"></i>
          </a>
        </div>
      </div>
      <div className="bg-gray-800 py-1">
        <div className="container mx-auto text-gray-400 text-center">
          <span className="text-sm">Roya Shahroudi | 2021</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
