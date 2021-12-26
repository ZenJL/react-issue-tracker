import React from 'react'

import { FormGroup, Label, Col, Input, Button, ButtonGroup } from 'reactstrap';
import ListItem from './ListItem';

function IssueList({todos, deleteIssue}) {
    return (
        <div className='issueList'>
            <div className="list-header" row>
                <h3 className='list-title'>List Issues</h3>
                <Col sm={3}>
                    <Input
                        type="search"
                        placeholder="Search by description... "
                    />
                </Col>
            </div>

            <FormGroup row>
                    <Label
                        for="severity"
                        sm={2}
                    >
                        Filter: 
                    </Label>
                    <Col sm={2}>
                        <ButtonGroup className='btn-group'>
                            <Button color='primary'>
                                All
                            </Button>
                            <Button color='success'>
                                Open
                            </Button>
                            <Button>
                                Close
                            </Button>
                        </ButtonGroup>
                    </Col>
                </FormGroup>
            
                <FormGroup row>
                    <Label
                        for="severity"
                        sm={2}
                    >
                        Order By:
                    </Label>
                    <Col sm={2}>
                        <Input
                            id="severity"
                            name="severity"
                            type="select"
                        >
                            <option>
                                ASC
                            </option>
                            <option>
                                DESC
                            </option>
                        </Input>
                    </Col>
                </FormGroup>


                <ListItem todos={todos} deleteIssue={deleteIssue}/>
        </div>
    )
}

export default IssueList
