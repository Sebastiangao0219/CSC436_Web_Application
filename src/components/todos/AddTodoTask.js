import React, {useState} from 'react';

function AddTodoTask({user, dispatch}) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    function handleTitle(evt) {
        setTitle(evt.target.value);
    }
    function handleContent(evt) {
        setContent(evt.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        dispatch({type: 'CREATE_TODO', title, content, author: user, complete: false})
    }
    return (
        <form onSubmit={e => {handleSubmit(e)}}>
            <div>Author: <b>{user}</b></div>
            <div>
                <label htmlFor="create-title">Title: </label>
                <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title"/>
            </div>
            <textarea value={content} onChange={handleContent}/>
            <input type="submit" value="Create"/>
        </form>
    );
}
export default AddTodoTask;

