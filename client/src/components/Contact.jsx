import "../styles/Contact.css";

function Contact() {

  return (

    <section 
      id="contact" 
      className="contact"
    >

      <h2>
        Contact Us
      </h2>


      <p>
        Have questions? We'd love to hear from you.
      </p>



      <div className="contact-container">


        <div className="contact-info">

          <h3>
            Tripora
          </h3>


          <p>
            📍 Chennai, Tamil Nadu, India
          </p>


          <p>
            📧 support@tripora.com
          </p>


          <p>
            📞 +91 98765 43210
          </p>


        </div>



        <form className="contact-form">


          <input
            type="text"
            placeholder="Your Name"
          />



          <input
            type="email"
            placeholder="Your Email"
          />



          <textarea
            placeholder="Your Message"
            rows="6"
          ></textarea>



          <button type="submit">
            Send Message
          </button>


        </form>


      </div>


    </section>

  );

}


export default Contact;