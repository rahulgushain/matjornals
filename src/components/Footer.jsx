import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import logo from '../Photos/mat.jpg'

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-12">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 ">
  
            {/* Contact Info Section */}
            <div className="space-y-4 text-left">
              <h2 className="text-2xl font-semibold text-green-400 mb-4 flex justify-center"><img src={logo}/></h2>
              <p className="text-gray-400">MAT Journals Pvt. Ltd., Established in 2015, MAT Journals Pvt. Ltd. publishes 90+ peer-reviewed, indexed journals in Engineering, Pharmacy, Nursing, and Management. We provide high-quality content for students, researchers, academicians, and professionals, ensuring global accessibility and impact.</p>
             

            </div>
  
            {/* Quick Links Section */}
            <div className="space-y-4 text-left">
              <h2 className="text-2xl font-semibold text-green-400 mb-4">Quick Links</h2>
              <ul className="space-y-2 text-gray-400">
              <li>Home</li>
              <li>Journals</li>
              <li>Subscribes</li>
              <li>Indexing</li>
        <li>DOI</li>
        <li >Publication Ethics</li>
        <li>Career</li>
        <li>Contact</li>
              </ul>
            </div>

            <div className="space-y-4 text-left ">
              <h2 className="text-2xl font-semibold text-green-400 mb-4">Email</h2>
              <ul className="space-y-2 text-gray-400">
              <li>info@matjournals.com</li>
              <li>matjournals@gmail.com</li>
              </ul>
            </div>
  
            {/* Newsletter Subscription */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-green-400 mb-4">Stay Updated</h2>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and news.</p>
              <form className="flex flex-wrap gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2  bg-gray-700 border-none text-white outline-none w-full rounded-r "
                />
                <button className="bg-green-500 w-full text-center px-4 py-2 rounded-r text-white hover:bg-green-600 transition">
                  Subscribe
                </button>
              </form>
            </div>
  
          </div>
  
          {/* Footer Bottom: Social Media & Terms */}
          <div className="mt-10 border-t border-gray-700 pt-6 text-center">
            <div className="flex justify-center  items-center text-2xl space-x-6">
              {/* Social Media Icons */}
              <a href="#" className="text-gray-400 hover:text-white transition">
              <CiFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
              <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
              <FaLinkedin />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
              <FaInstagram />
              </a>
            </div>
  
            <div className="mt-6">
              <p className="text-sm text-gray-500">
                &copy; 2025 MAT Journals Pvt. Ltd. All Rights Reserved.
              </p>
              <a href="#" className="text-sm text-gray-500 hover:text-white transition mt-2 inline-block">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  