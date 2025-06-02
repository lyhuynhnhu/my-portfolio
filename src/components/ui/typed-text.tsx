import { useEffect, useState } from "react";

// Typing animation component
const TypedText = ({
  strings,
  typeSpeed = 100,
  backSpeed = 100,
  backDelay = 1000,
}: {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
}) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const currentString = strings[currentStringIndex];

        if (isDeleting) {
          setCurrentText(currentString.substring(0, currentText.length - 1));
          if (currentText === "") {
            setIsDeleting(false);
            setCurrentStringIndex((prev) => (prev + 1) % strings.length);
          }
        } else {
          setCurrentText(currentString.substring(0, currentText.length + 1));
          if (currentText === currentString) {
            setTimeout(() => setIsDeleting(true), backDelay);
          }
        }
      },
      isDeleting ? backSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentStringIndex, strings, typeSpeed, backSpeed, backDelay]);

  return <span className="text-cyan-500 dark:text-cyan-400">{currentText}</span>;
};

export default TypedText;
