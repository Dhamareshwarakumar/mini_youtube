import React, { useState } from 'react';
import axios from 'axios';

const FloatingButton = ({ addVideo }) => {
    const [form, setForm] = useState({
        title: '',
        link: '',
        category: '',
        createdAt: new Date(),
        updatedAt: new Date()
    });

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value, updatedAt: new Date(), createdAt: new Date() });
    }

    const reset = () => {
        setForm({
            title: '',
            link: '',
            category: '',
            createdAt: new Date(),
            updatedAt: new Date()
        });
    }

    const handleForm = e => {
        e.preventDefault();
        addVideo(form);
        reset();
    }


    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <div className='floating-button' data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="bi bi-plus"></i></div>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleForm}>
                            <div className="modal-body">
                                <h3 className='text-center text-danger'>Add Video</h3>
                                <div className="form-group my-3">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" className="form-control" onChange={handleChange} value={form.title} name="title" id="title" placeholder="Enter title" />
                                </div>
                                <div className="form-group my-3">
                                    <label htmlFor="link">Video Link</label>
                                    <input type="text" className="form-control" onChange={handleChange} value={form.link} name="link" id="link" placeholder="Enter Video link" />
                                </div>
                                <div className="form-group my-3">
                                    <label htmlFor="category">Category</label>
                                    <input type="text" className="form-control" onChange={handleChange} value={form.category} name="category" id="category" placeholder="Enter Category" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="reset" className="btn btn-warning" data-bs-dismiss="modal" onClick={reset}>Discard</button>
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FloatingButton