
type SidebarButtonProps = {
    onClick: () => void}

export default function Sidebar({onClick}: SidebarButtonProps) {
    return (
        <div className="d-flex flex-column mf-3">
        <div className="p-2"><button type="button" className="btn btn-primary"
        onClick={onClick}>
            Add Chore
            </button></div>
        <div className="p-2"><button type="button" className="btn btn-warning"
        onClick={onClick}
        >
            Update Chore
            </button></div>
        <div className="p-2"><button type="button" className="btn btn-danger"
        onClick={onClick}
        >
            Delete Chore
            </button></div>
   </div>
   
    )
}