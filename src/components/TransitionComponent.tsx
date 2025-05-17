import React, { useState, useTransition, Suspense } from "react";

// Simulate a slow data fetching function
const fetchItems = () =>
  new Promise<string[]>((resolve) => {
    setTimeout(() => resolve(["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]), 10000);
  });

// A simple list component that fetches items
function List() {
  const [items, setItems] = useState<string[]>([]);
  
  // Fetch items asynchronously
  React.useEffect(() => {
    fetchItems().then((data) => setItems(data));
  }, []);
  
  return (
    <div>
      {items.length === 0 ? (
        <p>Loading items...</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function TransitionComponent() {
    // useTransition hook
    const [isPending, startTransition] = useTransition();
    
    // State for search term (we simulate a search transition)
    const [search, setSearch] = useState("");
  
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
  
      // Mark the search as a low-priority update
      startTransition(() => {
        setSearch(value);
      });
    };
  
    return (
      <div>
        <hr></hr>
        <h1>Concurrent Mode : useTransition, Suspense, startTransition </h1>
  
        {/* Simulating Suspense for async components */}
        <Suspense fallback={<div>Loading...</div>}>
          <List />
        </Suspense>
  
        <br/>
        
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search..."
        />
        
        {isPending ? <p>Updating search...</p> : <p>Search Term: {search}</p>}
        <hr></hr>
      </div>
    );
  }