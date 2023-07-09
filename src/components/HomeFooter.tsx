import logo from "../Images/logo.png";

const HomeFooter = () => {
  return (
    <footer className="bd-footer pt-5 pb-2 mt-5 footer-info">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3">
            <a
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
              href="#"
            >
              <img
                src={logo}
                alt="Rotary Club of Lutterworth"
                width="413"
                height="135"
              />
            </a>
          </div>
          <div className="col-12 col-lg-6"></div>
          <div className="col-12 col-lg-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9725.090810816466!2d-1.1997342!3d52.4560885!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48776a703d9faa1f%3A0xca3ae41aa02798fd!2sGreyhound%20Coaching%20Inn!5e0!3m2!1sen!2suk!4v1688417435161!5m2!1sen!2suk"
              width="300"
              height="225"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="row">
            <div className="col-12">The Rotary Club of Lutterworth, Chartered 1953, Rotary District 1070.</div>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
