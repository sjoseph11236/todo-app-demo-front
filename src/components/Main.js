import React, {useState, useEffect} from 'react'
import Card from './Card';

function Main() {

  const [todoList, setTodoList] = useState([{}]);

  useEffect(() => {
    fetchTodoList();
  }, [])

  const fetchTodoList = async () => {
    const response = await fetch("http://localhost:8000/api/todolist/get/all");
    const fetchedTodoList = await response.json();
    setTodoList(fetchedTodoList);
  };

  return (
    <section className="section">
    <div className="container">
        <h1 className="title">
            Hello World
        </h1>
        <p className="subtitle">
            My first website with <strong>Bulma</strong>!
        </p>

        <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">
                <div className="tile">
                    <div className="tile is-parent">
                        <article className="tile is-child notification is-info">
                            <p className="title">Middle tile</p>
                            <p className="subtitle">With an image</p>
                              {todoList.map(item => <Card key={item.id} item={item}/>)}
                        </article>
                    </div>
                </div>
            </div>
            <div className="tile is-parent">
                <article className="tile is-child notification is-success">
                    <div className="content">
                        <p className="title">Tall tile</p>
                        <p className="subtitle">With even more content</p>
                        <div className="content">
              
                            <div className="field">
                                <label className="label">Todo List Title</label>
                                <div className="control">
                                    <input className="input" type="text" placeholder="Text input"/>
                                </div>
                            </div>



                            <div className="field">
                                <label className="label">Task Description</label>
                                <div className="control">
                                    <textarea className="textarea" placeholder="Textarea"></textarea>
                                </div>
                            </div>

                            <div className="field is-grouped">
                                <div className="control">
                                    <button className="button is-link">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
</section>
  )
}

export default Main
