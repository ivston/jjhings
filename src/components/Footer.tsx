import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-yellow-50 text-amber-700 text-center py-6 font-gabrito text-lg ">
      <div className="flex flex-col gap-2">
        <p>
          For business enquiries -{" "}
          <a
            href="mailto:jjhings@gmail.com"
            className="font-bold hover:text-pink-400 transition-colors duration-200"
            title="Send us an email"
          >
            jjhingsicecream@gmail.com
          </a>
        </p>

        <div className="flex justify-center text-2xl">
          <a
            href="https://instagram.com/jjhings"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="JJ Hings on Instagram"
            className="hover:text-pink-400 transition-colors duration-200"
          >
            <FaInstagram />
          </a>
        </div>
        <p className="text-sm mt-2">
          &copy; {new Date().getFullYear()} JJ Hings Ice Cream
        </p>

        <div className="mt-4">
          <a
            href="https://www.linkedin.com/in/ivston/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors duration-200 text-sm"
          >
            Website designed & built by Ivan Stoyanov
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
