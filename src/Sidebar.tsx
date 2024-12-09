import React, { useState } from 'react';

type SidebarButtonProps = {
  selectedButton: string | null;
  onClick: (buttonName: string) => void;
  addNewChore: () => void; // Function passed from the parent (App)
};

export default function Sidebar({
  addNewChore,
  selectedButton,
  onClick,
}: SidebarButtonProps) {
  // State for managing modal visibility and form inputs
  const [showModal, setShowModal] = useState(false);
  const [choreName, setChoreName] = useState('');
  const [choreDescription, setChoreDescription] = useState('');

  // Handle button click for Update Chore
  const handleButtonClick = (buttonName: string) => {
    onClick(buttonName); // Set the selected button
    setShowModal(true);  // Show the modal
  };

  // Handle modal close
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the form data (e.g., send it to an API or update the state)
    console.log('Chore Name:', choreName);
    console.log('Chore Description:', choreDescription);
    
    // Close the modal after form submission
    setShowModal(false);
  };

  return (
    <>
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
            onClick={() => handleButtonClick('Update Chore')}
          >
            Update Chore
          </button>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Update Chore
                  </h5>
                  <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  {/* Form Inside Modal */}
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="choreName" className="form-label">
                        Chore Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="choreName"
                        value={choreName}
                        onChange={(e) => setChoreName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="choreDescription" className="form-label">
                        Chore Description
                      </label>
                      <textarea
                        className="form-control"
                        id="choreDescription"
                        value={choreDescription}
                        onChange={(e) => setChoreDescription(e.target.value)}
                        required
                      />
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                        Close
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Delete Chore Button */}
        <div className="p-2">
          <button
            type="button"
            className={`btn ${selectedButton === 'Delete Chore' ? 'btn-success' : 'btn-danger'}`}
            onClick={() => onClick('Delete Chore')}
          >
            Delete Chore
          </button>
        </div>
      </div>
    </>
  );
}
