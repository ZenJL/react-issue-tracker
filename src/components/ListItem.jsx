import React from 'react'

import { Card, CardHeader, CardBody, CardTitle, Button, Badge } from 'reactstrap';


function ListItem({todos, deleteIssue}) {
    console.log('list item dos: ', todos)
    return (
        <>
            {todos.map(issue => (
                <Card className='listItem' key={issue.id}>
                    <CardHeader>
                        {issue.id}
                        <Badge 
                            style={{
                                marginLeft: '10px',
                            }}
                        >{issue.status}</Badge>
                    </CardHeader>
                    <CardBody>
                        <CardTitle tag="h5">
                            {issue.description}
                        </CardTitle>
                        <div className="btn-card-group"
                            offset='true'
                        >
                            <Button color='primary'>
                                Close
                            </Button>
                            <Button
                                color='danger'
                                onClick={() => deleteIssue(issue.id)}
                            >
                                Delete
                            </Button>
                        </div>
                        
                    </CardBody>
                </Card>
            ))}
            
        </>
    )
}

export default ListItem
