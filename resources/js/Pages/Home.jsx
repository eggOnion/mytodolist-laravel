import TextInput from '@/Components/TextInput';

import Header from '@/Components/Header';
import UserTask from './UserTask';
import DisplayToDoList from './DisplayToDoList.jsx';

import '../../css/home.css';

function Home() {
   
    return (
        <div>
            <Header/>            
            <body className='my-home'>
                <h1 className='my-home-title'>To Do List</h1>
                <div className='search-todotask'>                 
                    {/* <TextInput placeholder="search task..."/> */}   
                    <UserTask />
                    <DisplayToDoList />
                </div>
            </body>
        </div>
    );
}

export default Home;
