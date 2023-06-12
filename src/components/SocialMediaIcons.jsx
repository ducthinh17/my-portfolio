const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/pham-le-duc-thinh-4095aa273/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/ducthinh.pld"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="../assets/facebook.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/ducthinh17"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="../assets/git.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
