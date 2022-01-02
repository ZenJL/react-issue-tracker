import React from 'react'

import { Card, CardHeader, CardBody, CardTitle, Button, Badge } from 'reactstrap';

// context
import { useIssueContext } from '../context/issueContext';


function IssueItem() {
    const { issuesFiltered, deleteIssue, setIssueStatus, issueStatus } = useIssueContext();

    return (
        <>
            {issuesFiltered.map(issue => (
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
                        <div className="btn-card-group" offset='true'>
                            <Button color='primary'
                                onClick={() => setIssueStatus(prev => console.log(!prev))}
                            >
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

export default IssueItem;
