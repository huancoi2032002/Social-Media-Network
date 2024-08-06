import React, { useState, useEffect, useRef } from "react";
import { SearchNav } from "../../../assets/contants";
import { SearchResult } from "../SearchResults/SearchResults";

const SearchBar = () => {
    const [input, setInput] = useState("");
    const [results, setResult] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const wrapperRef = useRef(null);

    const fetchData = (value) => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then((json) => {
                const filteredResults = json.filter((item) => {
                    return item && item.title && item.title.toLowerCase().includes(value.toLowerCase());
                });
                setResult(filteredResults);
                setShowResults(value.length > 0);
            })
            .catch(error => console.error('Error:', error));
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    const handleClickOutside = (event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setShowResults(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const completed = results.filter(result => result.completed === true);
    const notCompleted = results.filter(result => result.completed === false);

    return (
        <div className="relative flex items-center bg-backgroundSearch text-white rounded-full w-[560px] p-2.5 shadow-lg" ref={wrapperRef}>
            <SearchNav className="w-5 h-5 fill-colorTextSidebar" />
            <input
                className="bg-transparent border-none w-full ml-2 text-sm text-gray-300 placeholder-gray-400 focus:outline-none"
                placeholder="Search..."
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
            {showResults && (
                <div className="absolute top-full left-0 mt-2 bg-gray-800 w-full max-h-[400px] overflow-y-auto rounded-lg shadow-lg z-10">
                    <div className="p-2">
                        {completed.length > 0 && (
                            <div className="mb-2">
                                <h3 className="text-xs text-gray-400 mb-1">Completed</h3>
                                {completed.map((result, id) => (
                                    <SearchResult result={result.title} key={`completed-${id}`} className="p-2 hover:bg-gray-700 rounded-lg" />
                                ))}
                            </div>
                        )}
                        {notCompleted.length > 0 && (
                            <div>
                                <h3 className="text-xs text-gray-400 mb-1">Not Completed</h3>
                                {notCompleted.map((result, id) => (
                                    <SearchResult result={result.title} key={`notCompleted-${id}`} className="p-2 hover:bg-gray-700 rounded-lg" />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchBar;
