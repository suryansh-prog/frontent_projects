import React, { useState, forwardRef, useImperativeHandle } from 'react'
import './counter.history.css'
import { fetchHistory } from '../services/counter.service';
import { deleteCount } from '../services/counter.service';


const counterhistory = forwardRef((props, ref) => {

    const [history, setHistory] = useState([]);
    const [show, setShow] = useState(false);

    // Expose refresh function to parent component
    useImperativeHandle(ref, () => ({
        refreshHistory: async () => {
            const data = await fetchHistory();
            setHistory(data);
        }
    }));

    const toggleHistory = async () => {
        if (!show) {
            const data = await fetchHistory();
            setHistory(data);
        }
        setShow(!show);
    }

    const deleteHandler = async (id) => {
        try {
            const response = await deleteCount(id);
            if (response && response.ok) {
                alert('Count deleted successfully');
                // Refresh the history list
                const data = await fetchHistory();
                setHistory(data);
            } else {
                alert('Failed to delete count');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error deleting count');
        }
    }

    return (
        <div className='historyContainer'>
            <button className='historyToggleBtn' onClick={toggleHistory}>
                {show ? 'Hide' : 'Show'} History
            </button>
            {
                show && (
                    <div className='historyDetail'>
                        {
                            history.length === 0 ? (
                                <p>No history available</p>
                            ) : (
                                history.map((item, index) => (
                                    <div key={index} className='historyItem'>
                                        <p>Count: {item.count}</p>
                                        <p>Time: {new Date(item.time).toLocaleString()}</p>

                                        <div className='del'>
                                            <button onClick={() => deleteHandler(item._id)}>Delete</button>
                                        </div>
                                    </div>
                                ))
                            )
                        }
                    </div>
                )
            }
        </div>
    )
})

export default counterhistory
