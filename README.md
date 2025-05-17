# React Advanced Concepts Project

This project demonstrates various advanced concepts in React, showcasing best practices and patterns for building scalable and maintainable React applications.

## Features

The project includes the following components and concepts:

1. **Context API + Custom Context Hooks**:
   - Demonstrates the use of React's Context API for state management.

2. **Render Props**:
   - A component that uses the render props pattern to share mouse position data.

3. **Higher-Order Components (HOCs)**:
   - Higher-Order Component wraps `UserProfile` component to provide a loading state

4. **Concurrent Mode : useTransition, Suspense, startTransition**:
   - Generating fallback component while data is in loading state. use of transition for low-priority updates

5. **React Portal : render children into a different DOM node**:
   - Demonstrates the use of React Portals for rendering components outside the DOM hierarchy.

6. **React Memoization : React.memo, useMemo, useCallBack**:
   - `React.memo` to prevent unnecessary re-render, `useMemo` for memoizing value, `useCallback` to memoize function reference 

7. **Export imperative methods to parent components : useImperativeHandle + forwardRef**:
   - imperative method functionality for focusing in custom input is exported to parent component.

8. **Controlled and Uncontrolled Inputs**:
   - Demonstrates Controlled and Uncontrolled Inputs

9. **Compound Components**:
   - Demonstrates the compound components pattern for building flexible and reusable UI components.



## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/react-advanced-concepts.git
   cd react-advanced-concepts
2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
3. Start the development server:
    ```bash
    npm start
    # or
    yarn start
4. Open the app in your browser at http://localhost:3000.