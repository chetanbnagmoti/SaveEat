import { Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import "./BrandSetting.css"
import {MdClose} from 'react-icons/md'
export default function TagInput({type,tg}) {
    const [text,setText]=useState("")
    const [tags, setTags] = useState([ tg?tg:"label"]);

   

    const handleChange=(e)=>{
        const files = e.target.files;
       
    if (files && files.length > 0) {
        console.log(files)
      const fileNames = Array.from(files).map((file) => file.name);
      setTags([...tags, ...fileNames]);
      e.target.value = null; // Clear the file input
    }
    else{
        console.log(e.target.value)
       setText(e.target.value)
        
    }
}
   
      const handleSubmit=(e)=>{
      e.preventDefault()
      console.log(text)
      setTags([...tags,text])
  
      }


    const removeTag = (removedTag) => {
      const newTags = tags.filter((tag) => tag !== removedTag);
      setTags(newTags);
    };
  return (
    <div className="tag-container">
    {tags.map((tag, index) => {
      return (
        <div key={index} className="tag" style={{maxWidth:"100%",overflow:"hidden"}}>
          {tag} <span onClick={() => removeTag(tag)}><MdClose/></span>
        </div>
      );
    })}
<form onSubmit={handleSubmit}>
    <input  type={type} onChange={handleChange} />
    </form>
  </div>
  )
}
