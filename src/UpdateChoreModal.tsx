import { useState, useEffect } from 'react';

interface UpdateChoreModalProps {
  show: boolean;
  onClose: () => void;
  onUpdate: (id: number, status: string, reason: string) => void;
  choreId: number | null;
  chores: Array<{
    id: number;
    status: string | null;
    reason: string | null;
  }>;
}

const UpdateChoreModal = ({ show, onClose, onUpdate, choreId, chores }: UpdateChoreModalProps) => {
  const [status, setStatus] = useState<string>('');
  const [reason, setReason] = useState<string>('');
  const [customReason, setCustomReason] = useState<string>('');

  useEffect(() => {
    if (choreId !== null) {
      const currentChore = chores.find(chore => chore.id === choreId);
      if (currentChore) {
        setStatus(currentChore.status || '');
        setReason(currentChore.reason || '');
        setCustomReason('');
      }
    }
  }, [choreId, chores]);

  const handleSubmit = () => {
    if (status && reason) {
      if (reason === 'other' && !customReason) {
        alert('Please describe the reason');
        return;
      }
      onUpdate(choreId as number, status, reason === 'other' ? customReason : reason);
      onClose(); // Close modal after update
    } else {
      alert('Please fill out both status and reason');
    }
  };

  return (
    show && (
      <div className="modal" style={{ display: 'block' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update Chore</h5>
              <button type="button" className="close" onClick={onClose}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="status">Chore Status</label>
                <select
                  id="status"
                  className="form-control"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="">Select Status</option>
                  <option value="finished">Finished</option>
                  <option value="half-done">Half Done</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="reason">Reason</label>
                <select
                  id="reason"
                  className="form-control"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                >
                  <option value="">Select Reason</option>
                  <option value="Ran-out-of-time">Ran out of time!</option>
                  <option value="No-more-cleaner">No more cleaner!</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {reason === 'other' && (
                <div className="form-group">
                  <label htmlFor="customReason">Other Reason</label>
                  <textarea
                    id="customReason"
                    className="form-control"
                    placeholder="Describe the reason"
                    value={customReason}
                    onChange={(e) => setCustomReason(e.target.value)}
                  ></textarea>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                Update Chore
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default UpdateChoreModal;