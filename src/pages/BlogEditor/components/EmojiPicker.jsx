import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
function EmojiPickerModal({ onSelect, onClose }) {
  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (emojiObject, event) => {
    onSelect(emojiObject.emoji);
    onClose(false);
  };

  return (
    <div className="emoji-container">
      <EmojiPicker
        pickerStyle={{ width: "100%" }}
        onEmojiClick={onEmojiClick}
      />
    </div>
  );
}

export default EmojiPickerModal;
