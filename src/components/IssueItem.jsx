import React, { useState } from 'react'

import { Card, CardHeader, CardBody, CardTitle, Button, Badge } from 'reactstrap';

// context
import { useIssueContext } from '../context/issueContext';


function IssueItem() {
    const { issuesFiltered, deleteIssue, updateIssue } = useIssueContext();


    return (
        <>
            {issuesFiltered.map(issue => {
                // console.log('tung issue: ', issue)
                let newStatus = '';
                if(issue.status === 'new') {
                    newStatus = 'close';
                }
                if(issue.status === 'close') {
                    newStatus = 'new';
                }
                // console.log('day la: ', newStatus)
                
                return (
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
                                onClick={() => updateIssue(issue.id, issue, newStatus)}
                            >
                                {issue.status === 'new' ? "Close" : "Open"}
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
            )})}
            
        </>
    )
}

export default IssueItem;
