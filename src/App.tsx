import { useState } from 'react';
import Sidebar from "./Sidebar";
import ItemList from "./ItemList";
import ItemListImage from "./assets/laundry.avif";
import ItemListImage2 from "./assets/dishes.jpg";
import ItemListImage3 from "./assets/vacuuming.jpg";
import ItemListImage4 from "./assets/Bathroom.jpg";
import ItemListImage5 from "./assets/Groceries.jpeg";
import NewChoreImage from "./assets/mopping.jpg";

// Define chores data
const chores = [
  {
    id: 1,
    order: 1,
    src: ItemListImage,
    alt: "Laundry",
    onClickMessage: "Laundry",
    borderColor: "#FF6347",
  },
  {
    id: 2,
    order: 2,
    src: ItemListImage2,
    alt: "Dishes",
    onClickMessage: "Dishes",
    borderColor: "#32CD32",
  },
  {
    id: 3,
    order: 3,
    src: ItemListImage3,
    alt: "Vacuuming",
    onClickMessage: "Vacuuming",
    borderColor: "#1E90FF",
  },
  {
    id: 4,
    order: 4,
    src: ItemListImage4,
    alt: "Bathroom",
    onClickMessage: "Clean the bathroom",
    borderColor: "#FFD700",
  },
  {
    id: 5,
    order: 5,
    src: ItemListImage5,
    alt: "Groceries",
    onClickMessage: "Grocery Shopping",
    borderColor: "#8A2BE2",
  }
];

export default function App() {
  // Initialize the chore state with the chores array
  const [chore, setChores] = useState(chores);
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const [selectedChoreId, setSelectedChoreId] = useState<number | null>(null);

  // Handle button click
  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  // Handle image click
  const handleImageClick = (message: string) => {
    console.log(message); // Log the message when an image is clicked
  };

  //Function to handle the "Update Chore" button
  const updateChoreColor = () => {
    if (selectedChoreId === null) {
      alert('Please select a chore to update.');
      return;
    }

  const updatedChores = chore.map ((chore) => {
    if (chore.id === selectedChoreId) {
      return { ...chore, borderColor: '#008080' };
    }
    return chore;
  });

  setChores(updatedChores);
  setSelectedButton(null);
};

  // Function to add a new chore image (placeholder)
  const addNewChore = () => {
    const newChore = {
      id: chore.length + 1,
      order: chore.length + 1,
      src: NewChoreImage,  // Corrected the image reference here
      alt: "New Chore",
      onClickMessage: "New Chore to do",
      borderColor: '#FF6347',
    };
    setChores([...chore, newChore]); // Adding new chore to the state
  };

  const onDeleteChore = (id: number) => {
    const updatedChores = chore.filter((chore) => chore.id !== id);
    setChores(updatedChores);
    console.log(`Chore with id ${id} deleted!`);
  };

  // Now the return statement is inside the App function
  return (
    <div>
      <Sidebar
        addNewChore={addNewChore}
        selectedButton={selectedButton}
        onClick={handleButtonClick}
      />
      <ItemList
        chores={chore} // Pass the chores state
        onClickMessage={null} // Pass the image click handler
        onClick={handleImageClick}
        onDeleteChore={onDeleteChore}
        addChoreImage={() => {}}
        setSelectedChoreId={setSelectedChoreId}
      />
      <div className="mt-3">
        <p>Selected Button: {selectedButton || 'None'}</p>
        <button
          className="btn btn-warning"
          onClick={updateChoreColor}
          >
            Update Chore
          </button>
      </div>
    </div>
  );
}