import blogFetch from "../axios/config";

import { useState } from "react";

import   { useNavigate } from "react-router-dom";

import "./NewPost.css";

const Newpost = () => {
  const navigate = useNavigate()

  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  const createPost = async (e)  => {
    e.preventDeFault();

    const post = {title, body, userid: 1}

    await blogFetch.post("/posts", {
      body: post,
    });
  };


  return (
    <div className='new-post'>
      <h2>inserir nova receita:</h2>
      <form onSubmit={(e)  => createPost(e)}>

        <div className='form-control'>
          <label htmlFor='title'>nome da receita:</label>
          <input 
          type='text' 
          id='title'
          name='title' 
          placeholder="digite o nome da receita"
          onChange={(e)  => setTitle(e.target.value)}

          />
        </div>
        <div className='form-control'>
          <label htmlFor='body'>Conteúdo:</label>
          <textarea 
          name="body" 
          id="body"
          placeholder='digite o conteúdo'
          onChange={(e)  => setBody(e.target.value)}
          ></textarea>
        </div>
        <input type="submit" value="criar post" className='btn'/>

      </form>
    </div>
  )
}

export default Newpost