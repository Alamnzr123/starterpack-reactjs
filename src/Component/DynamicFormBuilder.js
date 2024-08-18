import React, { useState, useEffect } from 'react';

const DynamicFormBuilder = () => {
    useEffect(() => {
        document.title = 'DynamicFormBuilder';
    }, [])

    const [form, setForm] = useState([
        { id: 'name', label: 'Name', type: 'text' },
        { id: 'age', label: 'Age', type: 'number' },
        { id: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female', 'Other'] }
    ]);
    const [alertState, setAlert] = useState("");

    const ComponentData = (data) => {
        if (data.type === 'text') {
            return (
                <input
                    value={data.label}
                    onChange={(e) => {
                        data.label = e.target.value;
                        setForm([...form]);
                    }}
                    className="form-control"></input>
            )
        }

        else if (data.type === 'select') {
            return (
                <div className="form-group">
                    {data.options.map((check, key) => {
                        return (
                            <div className="form-check" key={key}>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue={check}
                                    id="option"
                                    value={data.label}
                                    onChange={(e) => {
                                        data.label = e.target.value;
                                        setForm([...form]);
                                    }} />
                                <label className="form-check-label">{check}</label>
                            </div>
                        )
                    })}
                </div>
            )
        }

        else if (data.type === 'number') {
            return (
                <input
                    type="number"
                    className="form-control"
                    value={data.label}
                    onChange={(e) => {
                        data.label = e.target.value;
                        setForm([...form]);
                    }}
                ></input>
            )
        }
    }

    const handleClick = (e, data) => {
        e.preventDefault();

        if (data.id === "" || data.label === "" || data.type === "") {
            setAlert("semua input wajib diisi")
        }
        else {
            alert(JSON.stringify(form))
        }
    }


    return (
        <>
            {form.map((data, key) => {
                return (
                    <div className="pt-2" key={key}>
                        <span>{key + 1}. </span><label className="form-label">{data.id}</label>
                        <div>
                            <form onSubmit={(e) => handleClick(e, data)}>
                                {ComponentData(data)}
                                <h1>
                                    {alertState}
                                </h1>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        <hr />
                    </div>
                )
            })}
        </>
    )
}

export default DynamicFormBuilder;