type ItemListProps = {
    chores: Array<{ 
      id: number;
      order: number; 
      src: string;
      alt: string;
      onClickMessage: string;
      borderColor: string;
    }>;

    onClickMessage: string | null;
    onClick: (buttonName: string) => void;
    addChoreImage: () => void;
    onDeleteChore: (id: number) => void;
    setSelectedChoreId: (id: number) => void;
  };
  
  export default function ItemList({
    chores, 
    addChoreImage, 
    onClickMessage, 
    onClick,
    onDeleteChore,
    setSelectedChoreId,
  }: ItemListProps) {
    return (
      <div className="container-sm">
        <div className="border-end bg-light p-3">
            {chores.map((chore) => (
                <div 
                key={chore.id} 
                className="position-relative"
                style={{ 
                    border: `5px solid ${chore.borderColor}`,
                    cursor: 'pointer',
                }}
                onClick={() => setSelectedChoreId(chore.id)}
                >
                    <img
                        src={chore.src}
                        alt={chore.alt}
                        onClick={() => alert(chore.onClickMessage)}
                        className="img-thumbnail w-50"
                    />
                <button
                     className="btn btn-sm btn-outline-danger position-absolute top-0 end-0"
                     onClick={(e) => {
                        e.stopPropagation(); 
                        onDeleteChore(chore.id);
                     }}
                     style={{
                        top: '5px',
                        right: '5px',
                        zIndex: 10,
                     }}
                >
                    
                    DELETE CHORE
                </button>
            </div>
            ))}
        </div>
      </div>
    );
  }
  