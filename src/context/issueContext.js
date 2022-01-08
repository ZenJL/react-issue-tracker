import { createContext, useContext, useEffect, useState } from 'react';

// services
import httpRequest from '../services/httpRequest';


const IssuesContext = createContext();

const IssueProvider = ({ children }) => {

  const [issues, setIssues] = useState([]);
  const [issuesFiltered, setIssuesFiltered] = useState([]);
  const [textSearch, setTextSearch] = useState('');
  const [orderBy, setOrderBy] = useState('asc');
  const [filterBy, setFilterBy] = useState('all');


  // fetch issues
  useEffect(() => {
    const fetchData = async () => {
      const res = await httpRequest.get('https://tony-json-server.herokuapp.com/api/todos');
      const data = res.data.data;
      setIssues(data);
    }
    fetchData()
  }, []);

  // filter & search
  useEffect(() => {
    if (issues.length === 0) return;

    let newIssues = issues.length > 0 ? issues : [];

    if(filterBy === 'new') {
      newIssues = newIssues
        .filter(issue => issue.status === filterBy);
    };
    if(filterBy === 'close') {
      newIssues = newIssues
        .filter(issue => issue.status === filterBy);
    };
    newIssues = newIssues
      .filter(issue => issue.description.toLowerCase().includes(textSearch.toLowerCase()))
      .sort((m1, m2) => {
        // if(orderBy === 'asc') return m2.description - m1.description;
        // return m1.description - m2.description
        if(orderBy === 'asc' && m1.description < m2.description) {
          return -1;
        }
        if(orderBy === 'desc' && m1.description > m2.description) {
          return -1;
        }
        // return 1;
      })

    setIssuesFiltered(newIssues)
  }, [issues, textSearch, orderBy, filterBy])

  // add issues
  async function addIssue(issue) {
    try {
      const res = await httpRequest.post('https://tony-json-server.herokuapp.com/api/todos', issue);
      const data = res.data.data;
      setIssues(prevState => [data, ...prevState])
    } catch (error) {
      console.error(error);
    }
  }

  // update issue
  async function updateIssue(issueId, issue, newStatus) {
    try {
      const res = await httpRequest.patch(`https://tony-json-server.herokuapp.com/api/todos/${issueId}`, {
        ...issue,
        status: newStatus,
      });
      const data = res.data.data;
      const newIssues = [...issues];
      const issueIndex = newIssues.findIndex(issue => issue.id === issueId);
      newIssues.splice(issueIndex, 1, data);
      // console.log('day la data moi: ', data);
      setIssues(newIssues);
    } catch (error) {
      console.error(error);
    }
  }

  // delete issues
  async function deleteIssue(issueId) {
    try {
      await httpRequest.delete(`https://tony-json-server.herokuapp.com/api/todos/${issueId}`);
      const newIssues = [...issues];
      const issueIndex = newIssues.findIndex(issue => issue.id === issueId);
      newIssues.splice(issueIndex, 1);
      setIssues(newIssues)
    } catch (error) {
      console.error(error);
    }
  }

  // create debounce for search field
  const useDebounce = (text, delay = 700) => {
    const [debounced, setDebounced] = useState(text);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebounced(text)
      }, delay);

      // clean effect
      return () => {
        clearTimeout(handler)
      }
    }, [text, delay])

    return debounced;
  };




  return (
    <IssuesContext.Provider
      value={{
        issues,
        issuesFiltered,
        textSearch,
        addIssue,
        deleteIssue,
        setTextSearch,
        setOrderBy,
        setFilterBy,
        updateIssue,
        useDebounce,
      }}
    >
      {children}
    </IssuesContext.Provider>
  )
}

const useIssueContext = () => useContext(IssuesContext)

export {
  IssueProvider,
  useIssueContext,
}
