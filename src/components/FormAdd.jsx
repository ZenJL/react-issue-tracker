import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {v4 as uuidv4} from "uuid";

import { Form, FormGroup, Label, Col, Input, Button } from 'reactstrap';

function FormAdd({addIssue, form, setForm, description, setDescription, severity, setSeverity}) {
    // const [description, setDescription] = useState('');
    // const [severity, setSeverity] = useState('');

    

    function handleChangeForm(e) {
        const {name, value} = e.currentTarget;

    
        setForm(prevState => {
          return {
            ...prevState,
            [name]: value,
            // id: uuidv4(),
          }
        })
        console.log('ur form: ', form)
      }

    const handleSubmit = (e) => {
        e.preventDefault();


        const newIssue = {
            id: uuidv4(),
            title: "Learn React",
            author: "Tony Nguyen",
            description: form.description,
            severity: form.severity,
            status: "new",
        };

        setForm(newIssue);
        addIssue(newIssue);
        // console.log('form add: new', newIssue)
        // console.log('f add issue: ', form)
        setDescription('');

    };


    return (
        <div>
            <Form onSubmit={handleSubmit}>
                {/* issue */}
                <FormGroup row>
                    <Label
                    for="describeIssue"
                    sm={1}
                    >
                        Description
                    </Label>
                    <Col sm={12}>
                    <Input
                        id="description"
                        name="description"
                        placeholder="Describe the issue ... "
                        type="text"
                        onChange={handleChangeForm}
                        value={form.description}
                    />
                    </Col>
                </FormGroup>

                {/* severity */}
                <FormGroup row>
                    <Label
                    for="severity"
                    sm={1}
                    >
                        Severity
                    </Label>
                    <Col sm={12}>
                    <Input
                        id="severity"
                        name="severity"
                        type="select"
                        onChange={handleChangeForm}
                        value={form.severity}
                    >
                        <option>
                            Low
                        </option>
                        <option>
                            Medium
                        </option>
                        <option>
                            High
                        </option>

                    </Input>
                    </Col>
                </FormGroup>
                
                <FormGroup
                    check
                    row
                >
                    <Col
                        sm={{
                            offset: 5,
                            size: 2
                        }}
                    >
                    <Button
                        className='btn-submit'
                        color='primary'
                        // {form.description === '' || form.severity === '' && disabled}
                        // disabled
                    >
                        Submit
                    </Button>
                    </Col>
                </FormGroup>
            </Form>
        </div>
        
    )
}

export default FormAdd
