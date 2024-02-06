import { FC, ReactNode, useState, CSSProperties, useRef, useEffect } from "react";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import "./Info.scss";

interface iInfo {
  children: ReactNode;
  text?: string;
  html?: string;
  className?: string;
};

interface iPosition {
  "--x": string;
  "--y": string;
};

export const Info: FC<iInfo> = ({ children, text, html, className = "", }) => {
  const [position, setPosition] = useState<iPosition>({ "--x": "1px", "--y": "1px" });
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const htmlProp = html ? { dangerouslySetInnerHTML: { __html: html } } : {};

  useOnClickOutside(ref, setShow.bind(null, false));

  useEffect(() => {
    const listener = () => {
      setShow(false);
    };

    document.addEventListener("scroll", listener);

    return () => {
      document.removeEventListener("scroll", listener);
    }
  }, [])

  const onMouseOver = () => {
    if (!ref.current) return;
    ref.current.classList.add('active');
    setPosition(getCoords(ref.current));
  };

  const getCoords = (target: HTMLDivElement) => {
    const { x, y, width, height } = target.getBoundingClientRect();
    const { height: tooltipHeight } = getComputedStyle(tooltipRef.current as HTMLDivElement);
    const valid = parseFloat(tooltipHeight);
    const xCoord = `${x + (width / 2)}px`;
    const yCoord = `${y + (valid / 2) + height}px`;

    return {
      "--x": xCoord,
      "--y": yCoord
    };
  };

  return (
    <div className={`Info ${className}`} onMouseOver={onMouseOver} ref={ref}>
      <div className="Info-content">
        {children}
        <div
          className={`Info-tooltip ${show ? "active" : ""}`}
          style={position as CSSProperties}
          ref={tooltipRef}
          {...htmlProp}
        >
          {html ? null : text}
        </div>
      </div>

      <button
        className="Info-btn"
        onClick={() => setShow(pv => !pv)}
        title="Info description"
      />
    </div>
  );
};