interface AddDigimonFormProps {
    onFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    digimonName: string;
    onNameChange: (name: string) => void;
    digimonType: string;
    onTypeChange: (type: string) => void;
}

function AddDigimon({onFormSubmit, digimonName, onNameChange, digimonType, onTypeChange}: AddDigimonFormProps) {
    return(
        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            placeholder="What is your digimon?"
            value={digimonName}
            onChange={(e) => onNameChange(e.target.value)}
          />
          <input
            type="text"
            placeholder="What is your digimon's type?"
            value={digimonType}
            onChange={(e) => onTypeChange(e.target.value)}
          />
          <button>Submit</button>
        </form>
    )
}

export default AddDigimon;