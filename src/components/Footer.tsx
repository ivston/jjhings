import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-yellow-50 text-amber-700 text-center py-6 font-gabrito text-lg ">
      <p>
        For business enquiries, contact{" "}
        <a
          href="mailto:jjhings@gmail.com"
          className="underline hover:text-pink-400 transition-colors duration-200"
        >
          jjhingsicecream@gmail.com
        </a>
      </p>

      <div className="mt-4 flex justify-center gap-6 text-2xl">
        <a
          href="https://instagram.com/jjhings"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-pink-400 transition-colors duration-200"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
