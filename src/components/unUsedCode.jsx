

const [inputFields, setInputFields] = useState([{ text: '', file: null }])
const [selectedImage, setSelectedImage] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);
const openModal = (img) => {
    setSelectedImage(img);
    setIsModalOpen(true);
};

const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
};

//input and file type add or delete
const handleTextChange = (index, value) => {
    const newInputFields = [...inputFields];
    newInputFields[index].text = value;
    setInputFields(newInputFields);
};

const handleFileChange = (index, file) => {
    const newInputFields = [...inputFields];
    newInputFields[index].file = file;
    setInputFields(newInputFields);
};

const handleAddInput = () => {
    setInputFields([...inputFields, { text: '', file: null }]);
};

const handleDeleteInput = (index) => {
    const newInputFields = [...inputFields];
    newInputFields.splice(index, 1);
    setInputFields(newInputFields);
};




                    <div className='flex flex-col gap-2'>
                        {inputFields.map((input, index) => (
                            <div key={index}>
                                <input
                                    type="text"
                                    placeholder="Enter text"
                                    value={input.text}
                                    onChange={(e) => handleTextChange(index, e.target.value)}
                                />
                                <input className='outline-none'
                                    type="file"
                                    onChange={(e) => handleFileChange(index, e.target.files[0])}
                                />
                                <button className='py-2 px-4 rounded-lg hover:bg-red-400 bg-red-600 text-white' onClick={() => handleDeleteInput(index)}>Delete</button>
                            </div>
                        ))}
                        <button className='py-2 px-4 rounded-lg w-20 hover:bg-green-400 bg-green-600 text-white' onClick={handleAddInput}>Add</button>
                    </div>