type SidebarButtonProps = {
    selectedButton: string | null;
    onClick: (buttonName: string) => void;
    addNewChore: () => void;  // Function passed from the parent (App)
  };
  
  export default function Sidebar({ 
    addNewChore, 
    selectedButton, 
    onClick,
 }: SidebarButtonProps) {
    return (
      <div className="d-flex flex-column mf-3">
        {/* Add Chore Button */}
        <div className="p-2">
          <button
            type="button"
            className={`btn ${selectedButton === 'Add Chore' ? 'btn-success' : 'btn-primary'}`}
            onClick={addNewChore} // This should call the addNewChore function passed from App
          >
            Add Chore
          </button>
        </div>
  
        {/* Update Chore Button */}
        <div className="p-2">
          <button
            type="button"
            className={`btn ${selectedButton === 'Update Chore' ? 'btn-success' : 'btn-warning'}`}
            onClick={() => onClick('Update Chore')} // Correct: Calls onClick with 'Update Chore'
          >
            Update Chore
          </button>
        </div>
  
        {/* Delete Chore Button */}
        <div className="p-2">
          <button
            type="button"
            className={`btn ${selectedButton === 'Delete Chore' ? 'btn-success' : 'btn-danger'}`}
            onClick={() => onClick('Delete Chore')} // Correct: Calls onClick with 'Delete Chore'
          >
            Delete Chore
          </button>
        </div>
      </div>
    );
  }