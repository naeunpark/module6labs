import { useState } from "react";

export function AddCatForm({addData}){

    const [ addedCatName, setAddedCatName ] = useState('');
    const [ addedCatLatinName, setAddedCatLatinName ] = useState('');
    const [ addedCatImage, setAddedCatImage ] = useState('');

    const inputReset = () => {
        setAddedCatImage('')
        setAddedCatLatinName('')
        setAddedCatName('')
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addData({addedCatName, addedCatLatinName, addedCatImage});
        inputReset();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Cat Name: 
                        <input type="text" name="catName" value={addedCatName} onChange={(e)=>setAddedCatName(e.target.value)}/>
                    </label>
                </div>
                <div>
                    <label>Cat Latin Name: 
                        <input type="text" name="catLatinName" value={addedCatLatinName} onChange={(e)=>setAddedCatLatinName(e.target.value)}/>
                    </label>
                </div>
                <div>
                    <label>Cat Image: 
                        <input type="text" name="catImage" value={addedCatImage} onChange={(e)=>setAddedCatImage(e.target.value)}/>
                    </label>
                </div>
                <button>Add Cat</button>
            </form>
        </>
    )

}