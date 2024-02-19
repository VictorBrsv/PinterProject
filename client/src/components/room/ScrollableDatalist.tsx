import React, { useState } from "react";
import styles from "./styles/AddRoomModal.module.scss";

interface ScrollableDatalistProps {
  id: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ScrollableDatalist: React.FC<ScrollableDatalistProps> = ({
  id,
  options,
  value,
  onChange,
}) => {
  const [open, setOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState<string[]>(options);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    onChange(e);
    setFilteredOptions(
      options.filter((option) =>
        option.toLowerCase().includes(inputValue.toLowerCase()),
      ),
    );
    setOpen(true);
  };

  const handleOptionClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    let question = e.currentTarget.textContent;
    const event = {
      target: { value: question },
    } as React.ChangeEvent<HTMLInputElement>;
    onChange(event);
    setOpen(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <input
        list={id}
        value={value}
        placeholder="Ваш вопрос..."
        onClick={() => setOpen(false)}
        onChange={handleInputChange}
      />
      {open && (
        <div
          style={{
            position: "absolute",
            zIndex: 1,
            backgroundColor: "white",
            borderRadius: "5px",
            left: "15px",
            width: "710px",
            maxHeight: "100px",
            overflowY: "auto",
          }}
        >
          {filteredOptions.map((option, index) => (
            <div
              onClick={handleOptionClick}
              className={styles.datalist}
              key={index}
              // onClick={handleOptionClick(e)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ScrollableDatalist;
