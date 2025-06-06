import React, { useState } from "react";

interface Item {
  id: number;
  text: string;
}

const DragAndDropList = () => {
  const [items, setItems] = useState<Item[]>([
    { id: 1, text: "Item One" },
    { id: 2, text: "Item Two" },
    { id: 3, text: "Item Three" },
  ]);

  const [draggedItemIndex, setDraggedItemIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedItemIndex(index);
  };

  const handleDragOver = (event: React.DragEvent<HTMLLIElement>) => {
    event.preventDefault(); // Necessary to allow dropping
  };

  const handleDrop = (index: number) => {
    if (draggedItemIndex === null || draggedItemIndex === index) return;

    const newItems = [...items];
    const [movedItem] = newItems.splice(draggedItemIndex, 1); // Remove the dragged item
    newItems.splice(index, 0, movedItem); // Insert it at the drop position
    setItems(newItems);
    setDraggedItemIndex(null); // Reset the dragged item index
  };

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {items.map((item, index) => (
        <li
          key={item.id}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={handleDragOver}
          onDrop={() => handleDrop(index)}
          style={{
            padding: "10px",
            margin: "5px 0",
            backgroundColor: "#f0f0f0",
            cursor: "move",
            border: "1px solid #ccc",
          }}
        >
          {item.text}
        </li>
      ))}
    </ul>
  );
};

export default DragAndDropList;
